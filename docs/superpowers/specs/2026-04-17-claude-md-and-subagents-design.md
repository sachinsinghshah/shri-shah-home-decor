# Design: Optimized CLAUDE.md + 7 Sub-Agents
**Date:** 2026-04-17
**Project:** Shri Shah Home Decor (`shahhomedecor.in`)

---

## Overview

Replace the current minimal `CLAUDE.md` (just `@AGENTS.md`) with a comprehensive project brain, and add 7 specialized Claude Code sub-agents in `.claude/agents/`. The agents work as a coordinated expert team — some in parallel, some in sequence — guided by an orchestration section in `CLAUDE.md`.

---

## 1. CLAUDE.md Structure

`CLAUDE.md` is auto-loaded into every Claude Code conversation. It will contain:

| Section | Purpose |
|---|---|
| Project Identity | Site name, business info, domain, target audience |
| Tech Stack Quick Ref | Exact versions, key packages, gotchas |
| Data Architecture | `constants.ts` is the ONLY source of truth for all content |
| File Structure Map | Pages, components, lib, public assets |
| Dev Commands | `npm run dev`, `build`, `lint`, `start`, `postbuild` |
| Coding Conventions | Tailwind v4 CSS-first, shadcn new-york, file naming rules |
| Environment Variables | `GOOGLE_SITE_VERIFICATION`, Vercel env vars |
| Agent Orchestration | When and how to invoke each sub-agent |
| Must-Read Before Coding | `@AGENTS.md` — Next.js 16 breaking changes |

### Agent Orchestration triggers (in CLAUDE.md)

```
New feature / component change  →  dev agent
Adding/changing content/images  →  content agent
Writing or updating tests       →  test agent
Any page change before deploy   →  seo + performance agents (parallel)
Pre-deploy review               →  code-review agent
Deploying to Vercel             →  deployment agent
SEO analysis / GSC data         →  seo agent (with MCP)
```

---

## 2. Sub-Agent Roster

All agents live in `.claude/agents/<name>.md`.

### `dev.md` — Next.js 16 Senior Engineer
- **Tools:** all
- **Scope:** Feature development, component work, bug fixes
- **Key behaviours:**
  - Reads `node_modules/next/dist/docs/` before writing any Next.js code
  - Enforces `constants.ts` as single source of truth — never hardcodes business data
  - Knows Tailwind v4 CSS-first (no `tailwind.config.js`), shadcn new-york, GSAP + Motion patterns
  - Follows React 19 conventions (no `forwardRef`, use compiler, etc.)
  - Always runs `npm run build` mentally before suggesting a change

### `test.md` — QA Engineer (Vitest + Playwright)
- **Tools:** all
- **Scope:** Test infrastructure setup, unit tests, component tests, E2E tests
- **Key behaviours:**
  - Sets up Vitest + React Testing Library for unit/component tests
  - Sets up Playwright for E2E across all 5 routes (`/`, `/services`, `/gallery`, `/about`, `/contact`)
  - Tests ContactForm submission, WhatsApp button, lightbox gallery, animations
  - Validates SEO: checks `<title>`, `<meta description>`, canonical tags per page
  - Runs `npm run lint` and type-check as part of every test run

### `deployment.md` — Vercel Deployment Expert
- **Tools:** all
- **Scope:** Vercel deploys, env vars, domain, build triage
- **Key behaviours:**
  - Manages preview vs. production deployments
  - Handles `vercel env` for `GOOGLE_SITE_VERIFICATION` and any future secrets
  - Configures custom domain `shahhomedecor.in` on Vercel
  - Runs post-deploy checklist: sitemap live, robots.txt accessible, OG image loads, structured data valid
  - Triages Vercel build errors by reading logs before suggesting fixes

### `seo.md` — Local SEO Specialist + Search Console Analyst
- **Tools:** all
- **Scope:** On-page SEO, structured data, local search, GSC analysis
- **Key behaviours:**
  - Audits and improves Next.js metadata API usage across all 5 pages
  - Maintains JSON-LD schemas: `LocalBusiness`, `WebSite`, `BreadcrumbList`, `Service`
  - Optimises for local keywords: Ramnagar, Nainital, Uttarakhand, specific services
  - Manages `next-sitemap` config and `robots.txt`
  - **When Google Search Console MCP is available:** queries GSC for search queries, CTR, impressions, index coverage, mobile usability, page experience signals — provides data-driven recommendations
  - Validates with Google Rich Results Test and Schema.org validator

### `performance.md` — Core Web Vitals Engineer
- **Tools:** all
- **Scope:** LCP, CLS, INP, bundle size, image optimization, font loading
- **Key behaviours:**
  - Audits all `<Image>` usage for proper `sizes`, `priority`, AVIF/WebP formats
  - Analyses JS bundle with `@next/bundle-analyzer`
  - Optimises GSAP scroll animations for CLS/INP
  - Font loading strategy: `display: swap`, preconnect to Google Fonts
  - Targets Lighthouse score ≥ 90 on mobile for all pages
  - Works alongside SEO agent — performance is a ranking signal

### `content.md` — Content Manager
- **Tools:** Read, Edit, Write, Bash (limited to `public/images/`)
- **Scope:** Gallery photos, service descriptions, business info, copy updates
- **Key behaviours:**
  - Works ONLY through `src/lib/constants.ts` and `public/images/gallery/`
  - Never modifies component code, styles, or config files
  - Guides image requirements: correct dimensions, naming convention, format
  - Updates `GALLERY_ITEMS`, `SERVICES`, business info arrays in `constants.ts`
  - Safe to use even without deep code knowledge — designed for eventual client handoff

### `code-review.md` — Pre-Deploy Reviewer
- **Tools:** all (read-only focus)
- **Scope:** Reviewing changes before every Vercel deployment
- **Key behaviours:**
  - Checks for TypeScript errors (`npm run build` output)
  - Verifies no hardcoded business data outside `constants.ts`
  - Checks for SEO regressions: missing metadata, broken canonical, missing alt text
  - Accessibility audit: focusable elements, ARIA labels, colour contrast
  - Confirms `next-sitemap` will generate correctly
  - Reviews imports for unused packages or broken paths
  - Issues a **GO / NO-GO** verdict with a clear list of blockers vs. warnings

---

## 3. Parallel Execution Model

```
Page change committed
        │
        ├── seo agent ──────────────┐
        │                           ├── both complete → code-review agent → deployment agent
        └── performance agent ──────┘
```

Dev + test agents are invoked on-demand during development. Content agent is independent and can be invoked any time without touching code.

---

## 4. File Layout After Implementation

```
D:/projects/shri-shah-home-decor/
├── CLAUDE.md              ← rewritten: full project brain + orchestration
├── AGENTS.md              ← kept: Next.js 16 breaking changes warning
└── .claude/
    └── agents/
        ├── dev.md
        ├── test.md
        ├── deployment.md
        ├── seo.md
        ├── performance.md
        ├── content.md
        └── code-review.md
```

---

## 5. Out of Scope

- No GitHub Actions / CI pipeline (Vercel handles CI natively)
- No database or auth (static site)
- No i18n (single language: English)
- Agent files do not write code automatically — they are invoked by the user or Claude on-demand
