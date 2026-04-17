# Google Search Console MCP Setup

Complete this after `shahhomedecor.in` is live and verified in Google Search Console.

---

## What this enables

The `seo` sub-agent will use `mcp-gsc` to directly query your GSC account for:
- Search queries, impressions, clicks, and CTR
- Index coverage issues
- URL inspection and crawl status
- Mobile usability signals
- Sitemap submission and status

---

## Prerequisites

- Site is live at `https://shahhomedecor.in`
- Site is verified in Google Search Console
- MCP server already wired: `~/.claude/.mcp.json` and `~/.claude/settings.json` are configured
- Credentials folder exists: `C:\Users\sachi\.claude\gsc\`

---

## Step 1 — Google Cloud Console setup

1. Go to https://console.cloud.google.com/
2. Create a new project (e.g. "Shah Home Decor SEO") or select an existing one
3. Go to **APIs & Services → Library**
4. Search for **"Google Search Console API"** → click it → **Enable**
5. Go to **APIs & Services → OAuth consent screen**
   - User type: **External**
   - App name: anything (e.g. "Shah SEO MCP")
   - Support email: sachinsinghshah@gmail.com
   - Add scope: `https://www.googleapis.com/auth/webmasters`
   - Add your email as a **Test user**
   - Save and continue through remaining steps

---

## Step 2 — Create OAuth credentials

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → OAuth client ID**
3. Application type: **Desktop app**
4. Name: anything (e.g. "Claude MCP Client")
5. Click **Create**
6. Click **Download JSON** on the confirmation dialog
7. Rename the downloaded file to `client_secrets.json`
8. Move it to: `C:\Users\sachi\.claude\gsc\client_secrets.json`

---

## Step 3 — First-time authentication

Open Claude Code in this project and say:

> "Authenticate my Google Search Console"

Claude will run the `reauthenticate` tool which opens a browser window once.
Sign in with your Google account and allow access.

The token is saved automatically — no browser auth needed after this.

---

## Step 4 — Verify it works

Ask Claude:

> "List my Google Search Console properties"

You should see `sc-domain:shahhomedecor.in` or `https://shahhomedecor.in` in the response.

---

## Ongoing usage (via the `seo` sub-agent)

Once authenticated, the SEO agent can run queries like:

| What to ask | What it does |
|---|---|
| "Show top search queries for shahhomedecor.in last 28 days" | Clicks, impressions, CTR by keyword |
| "Check indexing issues on shahhomedecor.in" | Finds pages Google can't crawl |
| "Inspect URL https://shahhomedecor.in/services" | Full crawl + indexing status |
| "Submit sitemap for shahhomedecor.in" | Pushes sitemap to Google |
| "Run SEO weekly report for shahhomedecor.in" | Full 28-day performance summary |
| "Find content opportunities for shahhomedecor.in" | Queries at position 11–20 with high impressions |

---

## Troubleshooting

**"File not found" error on startup**
- Confirm `client_secrets.json` is at `C:\Users\sachi\.claude\gsc\client_secrets.json`

**"Access denied" or auth error**
- Make sure your Google account is added as a Test User in the OAuth consent screen
- Re-run authentication: ask Claude "Authenticate my Google Search Console"

**Property not showing up**
- Make sure the site is verified in GSC under the same Google account you used for OAuth
- Try both `https://shahhomedecor.in` and `sc-domain:shahhomedecor.in` as property names
