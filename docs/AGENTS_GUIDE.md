# Claude Agents Guide — Shri Shah Home Decor

Your complete reference for using all 7 Claude sub-agents that power AI assistance on this project.

---

## How agents work

Claude reads the description of each agent and automatically selects the right one based on your request. You don't need to name agents explicitly — just describe what you want and Claude routes it correctly.

**Three ways to trigger agents:**

| Method                | How                                        | Example                                         |
| --------------------- | ------------------------------------------ | ----------------------------------------------- |
| **Auto-select**       | Describe the task — Claude picks the agent | "Fix the hero animation" → dev agent            |
| **Explicit ask**      | Name the agent or role                     | "Use the SEO agent to review the services page" |
| **Parallel dispatch** | Ask for multiple things at once            | "Run SEO and performance checks simultaneously" |

---

## Agent Quick Reference

| Agent                        | File             | Best for                                            |
| ---------------------------- | ---------------- | --------------------------------------------------- |
| **Next.js Dev Expert**       | `dev.md`         | Features, bug fixes, components, styling            |
| **QA Engineer**              | `test.md`        | Setting up tests, writing test suites               |
| **Vercel Deployment Expert** | `deployment.md`  | Deploying, domain setup, env vars, build errors     |
| **Local SEO Specialist**     | `seo.md`         | Metadata, structured data, GSC analysis, keywords   |
| **Core Web Vitals Engineer** | `performance.md` | Lighthouse, images, LCP/CLS/INP fixes               |
| **Content Manager**          | `content.md`     | Gallery photos, service descriptions, business info |
| **Pre-Deploy Code Reviewer** | `code-review.md` | Pre-deploy GO/NO-GO verdict                         |

---

## Each Agent — What to Say

### Next.js Dev Expert

Handles all code changes: components, pages, styling, animations, new features, bug fixes.

**Trigger phrases:**

- "Build a [feature]"
- "Fix the [component/bug]"
- "Add [X] to the [page]"
- "Refactor [component]"
- "Why is [X] broken?"

**Examples:**

```
"Add a sticky header that hides on scroll"
"The gallery lightbox isn't opening — fix it"
"Add a new WhatsApp CTA at the bottom of the services page"
"Animate the service cards with Motion when they enter the viewport"
"Why is the font not loading in production?"
```

**Knows:** Next.js 16.2 breaking changes, React 19, Tailwind v4 CSS-first (no tailwind.config.js), shadcn base-nova, GSAP `useEffect`+`gsap.context()` pattern, constants.ts discipline.

---

### QA Engineer (Vitest + Playwright)

Sets up test infrastructure and writes test suites. Handles both unit/component tests (Vitest + RTL) and E2E tests (Playwright).

**Trigger phrases:**

- "Set up tests"
- "Write tests for [component/page]"
- "Add E2E tests"
- "Test the [feature]"

**Examples:**

```
"Set up Vitest and React Testing Library for this project"
"Write tests for the ContactForm component"
"Add Playwright E2E tests for all 5 pages"
"Write SEO tests that verify title, description, canonical, and h1 for each route"
"Test that the WhatsApp button links to the correct number"
```

**Produces:** Complete test files in `src/__tests__/` (unit) and `e2e/` (E2E), with config files if not already present.

---

### Vercel Deployment Expert

Handles all deployment tasks — first deploy, domain DNS, env vars, build failures, and production validation.

**Trigger phrases:**

- "Deploy to Vercel"
- "Set up the domain"
- "Add an environment variable"
- "Fix the build error on Vercel"
- "Run post-deploy checks"

**Examples:**

```
"Deploy the site to Vercel for the first time"
"Set up www.shreeshahhomedecor.com as the custom domain"
"Add GOOGLE_SITE_VERIFICATION to production env vars"
"The Vercel build is failing with 'Module not found' — diagnose and fix"
"Run post-deploy validation to confirm everything is live"
```

**Pre-requisite:** Install Vercel CLI with `npm i -g vercel` before first deploy.

---

### Local SEO Specialist

SEO audits, keyword strategy, metadata improvements, structured data, and live Google Search Console analysis (after setup).

**Trigger phrases:**

- "Review SEO for [page]"
- "Improve the metadata"
- "Check structured data"
- "What keywords should we target?"
- "Analyse [data] in Search Console" _(after GSC setup)_

**Examples:**

```
"Run a full SEO audit on the services page"
"Improve the title and meta description for the gallery page"
"Add FAQ structured data to the services page"
"What local keywords should the homepage target?"
"Show top search queries for www.shreeshahhomedecor.com in the last 28 days"  ← GSC required
"Check if any pages have indexing issues"  ← GSC required
"Find content opportunities — queries at position 11–20 with high impressions"  ← GSC required
```

**GSC setup:** Follow `docs/GSC_SETUP.md` after the site goes live at www.shreeshahhomedecor.com.

---

### Core Web Vitals Engineer

Lighthouse audits, image optimization, LCP/CLS/INP fixes, bundle analysis, and animation performance.

**Trigger phrases:**

- "Run a performance audit"
- "Improve Lighthouse score"
- "Fix LCP/CLS/INP"
- "Optimize images"
- "Analyze the bundle"

**Examples:**

```
"Run a Lighthouse audit on the homepage and fix any issues"
"The hero image is causing a layout shift — fix CLS"
"Optimize all gallery images for mobile"
"The Lighthouse mobile score is 72 — get it to 90+"
"Analyze the JavaScript bundle and find what's making it large"
"The page is slow on mobile — audit and fix"
```

**Target:** Lighthouse ≥ 90 on mobile for all 5 pages.

---

### Content Manager

Safe content updates through `constants.ts` only. No code knowledge needed — designed for eventual client handoff.

**Trigger phrases:**

- "Update [business info/phone/address]"
- "Add a gallery photo"
- "Update the [service] description"
- "Add a testimonial"
- "Change the stat numbers"

**Examples:**

```
"Add 3 new gallery photos to the wallpaper category"
"Update the phone number to +91-9876543210"
"Add a customer testimonial from Priya, Haldwani, 5 stars"
"Update the false ceiling service description"
"Change the stat from '500+ clients' to '700+ clients'"
"Add WhatsApp hours to the business info: 9am-7pm"
```

**Boundary:** Only touches `src/lib/constants.ts` and `public/images/gallery/`. Refuses to edit components or config.

---

### Pre-Deploy Code Reviewer

10-point GO/NO-GO checklist before every Vercel deployment. Issues clear verdict with blockers vs. warnings.

**Trigger phrases:**

- "Review before deployment"
- "Run code review"
- "Is this ready to deploy?"
- "Check for issues before I push"

**Examples:**

```
"Review all changes before I deploy to production"
"Run the pre-deploy checklist"
"Is the current codebase safe to deploy?"
```

**Checks:** Build integrity, constants.ts discipline, SEO integrity, image hygiene (`<img>` vs `<Image>`), TypeScript hygiene, `'use client'` audit, import hygiene, accessibility basics, console.log cleanup, sitemap integrity.

**Output format:**

```
## Code Review Verdict

**Verdict: ✅ GO** (or ❌ NO-GO)

### Blockers (must fix before deploy)
### Warnings (fix soon, not blocking)
### Reviewed: Build ✅ | TypeScript ✅ | SEO ✅ | Images ✅ | Accessibility ✅
```

---

## Parallel / Simultaneous Agents

Ask for multiple things in one message and Claude dispatches agents in parallel automatically.

**Examples of parallel dispatch:**

```
"Run the SEO audit and performance audit simultaneously on the homepage"
```

→ `seo` + `performance` agents run at the same time

```
"Review the code AND run the deployment checklist in parallel"
```

→ `code-review` + `deployment` agents run at the same time

```
"Run SEO, performance, and code review all at once before I deploy"
```

→ All 3 agents run in parallel — fastest way to get deploy-ready

**Tip:** Parallel dispatch saves time when agents are independent. Don't run agents in parallel when one needs the output of another (e.g., fix issues from code review before deploying).

---

## Automatic Agent Triggering (Hooks)

A hook is configured to automatically run the code-review agent before every `git commit`. This catches issues before they enter git history.

**What fires automatically:**

| Trigger             | Agent                    | What it checks                                         |
| ------------------- | ------------------------ | ------------------------------------------------------ |
| Before `git commit` | Pre-Deploy Code Reviewer | Build, TypeScript, constants discipline, SEO integrity |

You don't need to ask — it runs automatically when Claude commits code.

**To temporarily skip the hook** (e.g., for a WIP commit):

```
"Commit this as a WIP — skip the pre-commit review"
```

---

## Deployment Workflow (Full Sequence)

The recommended flow before every production deployment:

```
Step 1: Development complete
        ↓
Step 2: "Run SEO and performance audits simultaneously"
        → seo + performance agents in parallel
        ↓
Step 3: Fix any issues found
        ↓
Step 4: "Review the code before deployment"
        → code-review agent issues GO/NO-GO
        ↓
Step 5: Fix all NO-GO blockers
        ↓
Step 6: "Deploy to production"
        → deployment agent runs vercel --prod + post-deploy validation
```

**One-liner for steps 2+4:**

```
"Run SEO audit, performance audit, and code review simultaneously — then tell me what needs fixing before I deploy"
```

---

## Common Scenarios

### "I want to add a new section to the homepage"

```
"Add a [section description] section to the homepage"
```

→ dev agent handles it end-to-end

### "The site has a bug on mobile"

```
"The navbar is broken on mobile — diagnose and fix"
```

→ dev agent

### "Client sent new photos"

```
"Add these photos to the gallery: [file names]. Category: pvc-panels. Labels: [labels]"
```

→ content agent (only touches constants.ts and public/images/gallery/)

### "We need better Google rankings"

```
"Run a complete SEO audit and give me a priority list of improvements"
```

→ seo agent

### "Site is slow on mobile"

```
"Audit mobile performance and fix the top issues to get Lighthouse ≥ 90"
```

→ performance agent

### "Ready to go live for the first time"

```
"The site is ready. Run SEO audit, performance audit, and code review — then deploy to Vercel and set up the www.shreeshahhomedecor.com domain"
```

→ seo + performance in parallel, then code-review, then deployment agent

### "Something broke after a deploy"

```
"The build is failing on Vercel — diagnose and fix"
```

→ deployment agent

### "Set up automated testing"

```
"Set up Vitest for component tests and Playwright for E2E tests on all 5 pages"
```

→ test agent

---

## Agent Boundaries — Who Does What

| Task                    | Correct agent     | Wrong agent |
| ----------------------- | ----------------- | ----------- |
| Edit a React component  | dev               | content     |
| Update phone number     | content           | dev         |
| Fix build failure       | dev or deployment | seo         |
| Add structured data     | seo               | dev         |
| Fix slow image loading  | performance       | dev         |
| Pre-deploy safety check | code-review       | dev         |
| Push to production      | deployment        | any other   |
| Write tests             | test              | dev         |

When in doubt, describe the task — Claude will pick the right agent.

---

## GSC Integration (After Launch)

Once www.shreeshahhomedecor.com is live and GSC is configured (see `docs/GSC_SETUP.md`), the SEO agent gains live data access:

```
"Show top 20 search queries for www.shreeshahhomedecor.com last 28 days"
"Which pages have indexing issues?"
"Inspect URL https://www.shreeshahhomedecor.com/services"
"Submit the sitemap to Google"
"Run a full SEO weekly report"
"Find keywords we rank 11–20 for — content opportunities"
```

These queries use the `mcp-gsc` server configured in `~/.claude/.mcp.json`.

---

Automatic hook (.claude/settings.local.json)

Before every git commit, the hook automatically:

1. Detects it's a commit (ignores all other bash commands)
2. Runs npx tsc --noEmit
3. If TypeScript is clean → shows "✅ TypeScript clean — use code-review agent for full check"
4. If TypeScript errors found → shows a warning to fix before deploying

How parallel agents work

Just ask for multiple things in one message:
"Run SEO audit, performance audit, and code review simultaneously"
Claude dispatches all 3 agents in parallel — no special syntax needed.
