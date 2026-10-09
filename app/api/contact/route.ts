import { NextResponse } from "next/server";

type ContactLead = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  propertyType?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{7,15}$/;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: ContactLead;

  try {
    body = (await request.json()) as ContactLead;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (text(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: text(body.name, 80),
    phone: text(body.phone, 20),
    email: text(body.email, 120),
    propertyType: text(body.propertyType, 80),
    budget: text(body.budget, 80),
    message: text(body.message, 1000),
    source: "AIPL DreamCity website",
  };

  if (
    lead.name.length < 2 ||
    !phonePattern.test(lead.phone) ||
    (lead.email && !emailPattern.test(lead.email)) ||
    !lead.propertyType ||
    !lead.budget
  ) {
    return NextResponse.json({ error: "Please check the submitted details." }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_LEADS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_LEADS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("Contact integration is not configured.");
    return NextResponse.json(
      { error: "Lead service is temporarily unavailable. Please call us directly." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret: webhookSecret }),
      cache: "no-store",
    });
    const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

    if (!response.ok || !result?.ok) {
      // console.error("Google lead webhook rejected the request.", {
      //   status: response.status,
      //   error: result?.error || "No error message returned",
      // });
      console.error("Google lead webhook rejected the request.", {
        status: response.status,
        error: "Google lead webhook rejected the request",
      });
      throw new Error("Google lead webhook rejected the request.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact lead delivery failed:", error);
    return NextResponse.json(
      { error: "We could not submit your request. Please try again or call us directly." },
      { status: 502 },
    );
  }
}
