# Shri Shah Home Decor — Project Guide

> This is the project brain. Read it fully before starting any task.

## Project Identity

**Site:** Shri Shah Home Decor — premium home decor shop in Ramnagar, Nainital, Uttarakhand  
**Domain:** https://shahhomedecor.in (production target)  
**Phone:** +91-9548506887  
**Address:** Near Sai Mandir, Behind Guru Kirpa Hardware, Ramnagar – 244715  
**Services:** PVC Panels, Wallpaper & 3D Wallpaper, False Ceiling (all types), Gypsum Tiles, Wall Stickers, Grass Matting  
**Pages:** `/` · `/services` · `/gallery` · `/about` · `/contact`

---

## Tech Stack

| Technology | Version | Notes |
|---|---|---|
| Next.js | 16.2.4 | **Breaking changes from 14/15 — read docs first** |
| React | 19.2.4 | Server components by default |
| TypeScript | 5.x | Strict mode on |
| Tailwind CSS | v4 | **CSS-first — no `tailwind.config.js`** |
| shadcn/ui | base-nova | Components in `src/components/ui/` |
| Motion | 12.x | Scroll reveal animations |
| GSAP | 3.15 + @gsap/react | Hero section animations |
| next-sitemap | 4.x | Auto-runs on `npm run build` |
| sharp | 0.34 | Image optimization |

---

## Data Architecture — The Golden Rule

**`src/lib/constants.ts` is the ONLY source of truth for all content.**

Never hardcode in components or pages:
- Business name, phone, address, hours, WhatsApp URL → `SITE`
- Services, features, FAQs → `SERVICES`
- Gallery photos and categories → `GALLERY_ITEMS`, `GALLERY_CATEGORIES`
- Testimonials → `TESTIMONIALS`
- Stats (500+ clients etc.) → `SITE.stats`

If it could ever need updating without a code deploy, it belongs in `constants.ts`.

Other lib files:
- `src/lib/seo.ts` — `buildMetadata()` helper for page metadata
- `src/lib/structured-data.ts` — JSON-LD schema functions
- `src/lib/utils.ts` — `cn()` Tailwind class merger

---

## File Structure

```
src/
  app/
    layout.tsx          # Root layout — fonts, global metadata, JSON-LD scripts
    page.tsx            # Home page
    globals.css         # Tailwind v4 @theme tokens (design tokens live here)
    manifest.ts         # PWA manifest
    about/page.tsx
    contact/page.tsx
    gallery/page.tsx
    services/page.tsx
  components/
    AnimatedSection.tsx  # Motion scroll reveal wrapper
    ContactForm.tsx      # Form with sonner toasts
    GalleryPreview.tsx   # Lightbox gallery (yet-another-react-lightbox)
    HeroSection.tsx      # GSAP scroll animation
    WhatsAppButton.tsx   # Fixed WhatsApp CTA button
    [others...]
    ui/                  # shadcn/ui components
  lib/
    constants.ts         # ← ALL content data lives here
    seo.ts
    structured-data.ts
    utils.ts
public/
  images/gallery/        # Gallery photos (real photos go here)
  og-image.jpg           # Placeholder — client must replace (1200×630px)
```

---

## Commands

```bash
npm run dev       # Dev server → http://localhost:3000
npm run build     # Production build + sitemap generation
npm run lint      # ESLint check
npm run start     # Serve production build locally
npx tsc --noEmit  # TypeScript check only
```

---

## Coding Conventions

- **Tailwind v4:** No `tailwind.config.js`. Design tokens are in `globals.css` under `@theme inline`. Always use `@theme inline`, not bare `@theme`. Use `bg-brand`, `text-brand`, `bg-accent` as utility classes.
- **Components:** PascalCase filenames. `'use client'` only when genuinely needed (hooks, browser APIs, event handlers).
- **Images:** Always `next/image` — never `<img>`. Always set `width`, `height`, `alt`, and `sizes`.
- **React 19:** No `forwardRef`. Server Components by default.
- **shadcn:** Add components via `npx shadcn@latest add <name>`. Never manually edit `src/components/ui/`.
- **TypeScript:** No `any`. Import types with `import type`.
- **GSAP pattern:** Use `useEffect` + `gsap.context()` — the codebase does NOT use the `useGSAP` hook.

---

## Environment Variables

| Variable | Used in | Set in |
|---|---|---|
| `GOOGLE_SITE_VERIFICATION` | `src/app/layout.tsx` | Vercel dashboard → Production |

For local dev: `vercel env pull .env.local`  
See `docs/GSC_SETUP.md` for Google Search Console MCP setup (post-launch).

---

## Agent Orchestration

Use the right expert for every task. Invoke agents with `/agent <name>` or by asking Claude to use a specific agent.

| Task | Agent to use |
|---|---|
| New feature, component, or bug fix | `dev` |
| Adding gallery photos, updating copy or services | `content` |
| Writing or updating tests | `test` |
| Before deploying — check quality | `code-review` |
| Deploying to Vercel (preview or prod) | `deployment` |
| SEO audit, metadata, structured data | `seo` |
| Google Search Console analysis (post-launch) | `seo` (uses GSC MCP) |
| Lighthouse audit, image optimization, bundle | `performance` |

**Standard deployment flow:**
```
Dev changes → seo + performance (parallel) → code-review → deployment
```

**Quick content update flow:**
```
content → code-review → deployment
```

---

## Before Writing Any Code

1. Read `AGENTS.md` — Next.js 16 has breaking changes
2. Check `node_modules/next/dist/docs/` for the specific feature you're building
3. Look at existing patterns in the codebase before inventing new ones

@AGENTS.md
