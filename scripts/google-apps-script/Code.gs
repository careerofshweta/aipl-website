/**
 * Google Apps Script for website leads.
 * Required Script Properties:
 * SPREADSHEET_ID, SHEET_NAME, RECIPIENT_EMAIL, LEAD_WEBHOOK_SECRET
 */
function doPost(event) {
  try {
    var properties = PropertiesService.getScriptProperties();
    var payload = JSON.parse(event.postData.contents || "{}");

    if (!payload.secret || payload.secret !== properties.getProperty("LEAD_WEBHOOK_SECRET")) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    var spreadsheet = SpreadsheetApp.openById(properties.getProperty("SPREADSHEET_ID"));
    var sheetName = properties.getProperty("SHEET_NAME") || "Website Leads";
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) sheet = spreadsheet.insertSheet(sheetName);

    var headers = [
      "Submitted At",
      "Full Name",
      "Phone",
      "Email",
      "Property Type",
      "Budget",
      "Message",
      "Source",
      "Status",
    ];

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
        sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        new Date(),
        safeCell(payload.name),
        safeCell(payload.phone),
        safeCell(payload.email),
        safeCell(payload.propertyType),
        safeCell(payload.budget),
        safeCell(payload.message),
        safeCell(payload.source),
        "New",
      ]);
    } finally {
      lock.releaseLock();
    }

    var recipient = properties.getProperty("RECIPIENT_EMAIL");
    if (!recipient) throw new Error("RECIPIENT_EMAIL is missing");

    var subject = "New website lead: " + payload.name + " (" + payload.phone + ")";
    var plainBody = leadLines(payload).join("\n");
    var options = {
      to: recipient,
      subject: subject,
      body: plainBody,
      htmlBody: leadHtml(payload),
      name: "AIPL DreamCity Website",
    };
    if (payload.email) options.replyTo = payload.email;
    MailApp.sendEmail(options);

    return jsonResponse({ ok: true });
  } catch (error) {
    var message = error && error.message ? error.message : String(error);
    console.error(message);
    // The request is authenticated before any Google resource is accessed, so this
    // diagnostic is only returned to the website server, not to an unauthenticated caller.
    return jsonResponse({ ok: false, error: "Lead delivery failed: " + message });
  }
}

function safeCell(value) {
  var clean = String(value || "").trim();
  return /^[=+\-@]/.test(clean) ? "'" + clean : clean;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function leadLines(lead) {
  return [
    "A new lead was submitted from the AIPL DreamCity website.",
    "",
    "Name: " + (lead.name || "-"),
    "Phone: " + (lead.phone || "-"),
    "Email: " + (lead.email || "-"),
    "Property Type: " + (lead.propertyType || "-"),
    "Budget: " + (lead.budget || "-"),
    "Message: " + (lead.message || "-"),
  ];
}

function leadHtml(lead) {
  var rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "-"],
    ["Property Type", lead.propertyType],
    ["Budget", lead.budget],
    ["Message", lead.message || "-"],
  ];
  return "<h2>New AIPL DreamCity website lead</h2><table cellpadding='8' cellspacing='0' border='1' style='border-collapse:collapse'>" +
    rows.map(function (row) {
      return "<tr><th align='left'>" + escapeHtml(row[0]) + "</th><td>" + escapeHtml(row[1]) + "</td></tr>";
    }).join("") + "</table>";
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
