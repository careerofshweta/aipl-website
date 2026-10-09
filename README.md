# AIPL DreamCity Ludhiana

Production Next.js App Router migration of the AIPL DreamCity Ludhiana website.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Contact lead setup (Google Sheet + email)

The contact form sends every valid lead to the server-only `/api/contact` route. That route calls
a secured Google Apps Script web app, which appends the lead to Google Sheets and emails the client.
The success dialog is shown only after both operations complete.

### 1. Create the client-owned Sheet

Create a Google Sheet in the client's account (for example, `Zavira Realty Website Leads`). Copy
the spreadsheet ID from the URL between `/d/` and `/edit`. The script creates a `Website Leads`
tab and its headings automatically if it does not exist.

### 2. Configure Google Apps Script

1. In the Sheet, open **Extensions → Apps Script**.
2. Replace the editor contents with [`scripts/google-apps-script/Code.gs`](scripts/google-apps-script/Code.gs).
3. Open **Project Settings → Script Properties** and add:
   - `SPREADSHEET_ID`: the ID copied above
   - `SHEET_NAME`: `Website Leads`
   - `RECIPIENT_EMAIL`: client email (multiple recipients can be comma-separated)
   - `LEAD_WEBHOOK_SECRET`: a long random secret (at least 32 characters)
4. Select **Deploy → New deployment → Web app**.
5. Set **Execute as** to the Sheet owner and **Who has access** to `Anyone`.
6. Authorize Sheets and email access, deploy, and copy the `/exec` Web App URL.

The endpoint is publicly reachable because the website server must call it, but it rejects requests
without the secret. Never put the secret in a `NEXT_PUBLIC_` variable or client-side source code.

### 3. Configure the website

Copy `.env.example` to `.env.local` for local development. Set:

```env
GOOGLE_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
GOOGLE_LEADS_WEBHOOK_SECRET=the-same-secret-used-in-script-properties
```

Add the same two variables to the production hosting project (for example, Vercel) and redeploy.

### 4. Test before launch

Submit one test lead. Confirm that exactly one Sheet row is created, the client receives the email,
and replying to the notification uses the customer's email when it was supplied. Apps Script sends
mail from the Google account that owns/deploys the script and is subject to that account's email
quota.
