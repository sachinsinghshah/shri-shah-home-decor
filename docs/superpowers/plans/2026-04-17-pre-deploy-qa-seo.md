# Pre-Deploy QA & SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all pre-deploy blockers, close SEO gaps, and verify clean build so the site is ready to deploy to www.shreeshahhomedecor.com.

**Architecture:** Seven focused fixes across metadata, favicon, lightbox CSS, contact form, structured data, footer, and build verification. Each task is independent and self-contained.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript 5, Tailwind v4, Motion 12, GSAP 3.15, yet-another-react-lightbox

---

## Identified Issues

| # | Severity | Issue |
|---|----------|-------|
| 1 | Critical  | Gallery page is `'use client'` — no SEO metadata exported |
| 2 | High      | `yet-another-react-lightbox` has no CSS import — lightbox unstyled |
| 3 | High      | `favicon.ico` referenced in layout but missing from `public/` |
| 4 | High      | Contact form is a simulation (`setTimeout`) — no real submission |
| 5 | Medium    | Footer "Privacy Policy" links to `/about` — misleading |
| 6 | Medium    | No `AggregateRating` / `Review` schema for testimonials |
| 7 | Medium    | No `LocalBusiness` keywords for areaServed pages (Haldwani, Corbett) |

---

## Task 1: Fix Gallery Page Metadata (Server/Client Split)

**Files:**
- Create: `src/app/gallery/GalleryContent.tsx` (client component — extracted from page.tsx)
- Modify: `src/app/gallery/page.tsx` (convert to server component, export metadata)

- [ ] **Step 1: Create `GalleryContent.tsx`**

Move all the `'use client'` logic from `gallery/page.tsx` into a new file:

```tsx
// src/app/gallery/GalleryContent.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnimatedSection from '@/components/AnimatedSection'
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '@/lib/constants'
import 'yet-another-react-lightbox/styles.css'

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false })

const HEIGHTS: Record<string, string> = {
  tall: 'h-72', wide: 'h-44', normal: 'h-56',
}

const PLACEHOLDER_COLORS = [
  'from-teal-100 to-emerald-200', 'from-amber-100 to-orange-200',
  'from-sky-100 to-blue-200', 'from-rose-100 to-pink-200',
  'from-green-100 to-teal-200', 'from-violet-100 to-purple-200',
  'from-cyan-100 to-sky-200', 'from-fuchsia-100 to-pink-200',
  'from-lime-100 to-green-200', 'from-orange-100 to-amber-200',
  'from-indigo-100 to-violet-200', 'from-teal-200 to-cyan-300',
]

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  const slides = filtered.map((item) => ({
    src: item.src, alt: item.label, width: 1200, height: 800,
  }))

  function openLightbox(index: number) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <header
          className="relative pt-32 pb-16 text-center"
          style={{ backgroundColor: 'oklch(0.44 0.12 162)' }}
        >
          <div className="container-xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li className="text-white font-medium" aria-current="page">Gallery</li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl text-white md:text-5xl">Project Gallery</h1>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Browse our portfolio of completed projects across PVC panels, wallpaper, false ceilings and more.
            </p>
          </div>
        </header>

        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <div
              className="mb-10 flex flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Filter gallery by category"
            >
              {GALLERY_CATEGORIES.map((cat) => (
                <motion.button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  aria-controls="gallery-grid"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[oklch(0.62_0.14_162)] text-white shadow-sm'
                      : 'border border-black/10 bg-white text-[oklch(0.35_0.01_260)] hover:border-[oklch(0.82_0.09_162)] hover:text-[oklch(0.62_0.14_162)]'
                  }`}
                  whileTap={{ scale: 0.96 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            <div id="gallery-grid" role="tabpanel" aria-label={`Gallery: ${GALLERY_CATEGORIES.find((c) => c.id === activeCategory)?.label}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="masonry-grid"
                >
                  {filtered.map((item, index) => (
                    <AnimatedSection key={item.id} animation="scale" delay={index * 0.04} className="masonry-item">
                      <button
                        onClick={() => openLightbox(index)}
                        className="group relative block w-full overflow-hidden rounded-2xl text-left"
                        aria-label={`View ${item.label} – click to enlarge`}
                      >
                        <div
                          className={`relative w-full bg-gradient-to-br ${PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]} ${HEIGHTS[item.aspect] ?? 'h-56'} flex items-end p-4 transition-transform duration-300 group-hover:scale-105`}
                        >
                          <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{ backgroundColor: 'rgba(15,110,86,0.65)' }}
                          >
                            <span className="rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                              View Full Size
                            </span>
                          </div>
                          <div className="relative z-10 rounded-xl bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                            <p className="text-xs font-semibold text-[oklch(0.14_0.01_260)]">{item.label}</p>
                          </div>
                        </div>
                      </button>
                    </AnimatedSection>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <p className="py-20 text-center text-[oklch(0.55_0.01_260)]">No items found for this category.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      )}
    </>
  )
}
```

- [ ] **Step 2: Rewrite `gallery/page.tsx` as server component with metadata**

```tsx
// src/app/gallery/page.tsx
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import GalleryContent from './GalleryContent'

export const metadata: Metadata = buildMetadata({
  title: 'Project Gallery – Wallpaper, PVC Panels & False Ceiling Photos',
  description:
    'Browse our gallery of completed home decor projects in Ramnagar and Nainital – PVC panels, 3D wallpaper, false ceilings, gypsum tiles, and more. See real transformations.',
  path: '/gallery',
  keywords: [
    'home decor gallery ramnagar',
    'wallpaper installation photos nainital',
    'false ceiling designs ramnagar',
    'pvc panel installation photos',
    'interior decor portfolio uttarakhand',
  ],
})

export default function GalleryPage() {
  return <GalleryContent />
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: 0 errors

---

## Task 2: Fix Favicon Reference

**Files:**
- Modify: `src/app/layout.tsx` (lines 79–86 — icons config)

The `public/favicon.ico` doesn't exist. Remove that entry; `icon.png` is sufficient.

- [ ] **Step 1: Update icons config in layout.tsx**

Change:
```ts
icons: {
  icon: [
    { url: '/favicon.ico', sizes: '48x48' },
    { url: '/icon.png', type: 'image/png', sizes: '32x32' },
  ],
  apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
},
```

To:
```ts
icons: {
  icon: [
    { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
    { url: '/icon.png', type: 'image/png', sizes: '32x32' },
  ],
  apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
},
```

---

## Task 3: Fix Footer Privacy Policy Link

**Files:**
- Modify: `src/components/Footer.tsx` (line 142–146 — bottom bar links)

The "Privacy Policy" link pointing to `/about` is misleading. Replace it with a real link to the contact page.

- [ ] **Step 1: Fix the footer bottom link**

Change:
```tsx
<Link href="/about" className="transition-colors hover:text-white/70">
  Privacy Policy
</Link>
```

To:
```tsx
<Link href="/about" className="transition-colors hover:text-white/70">
  About Us
</Link>
<Link href="/contact" className="transition-colors hover:text-white/70">
  Contact
</Link>
```

---

## Task 4: Add AggregateRating & Review Schema

**Files:**
- Modify: `src/lib/structured-data.ts` (add new export function)
- Modify: `src/app/page.tsx` (add schema script)
- Modify: `src/app/layout.tsx` (or page.tsx — add review schema)

- [ ] **Step 1: Add `getAggregateRatingSchema` to `structured-data.ts`**

Add after the `getFaqSchema` function:

```ts
export function getAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.shreeshahhomedecor.com/#business',
    name: 'Shri Shah Home Decor',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ramesh Verma' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Excellent work! Got my entire living room wallpapered and false ceiling done. The team was professional, clean, and finished on time. Highly recommend!',
        name: 'Wallpaper + False Ceiling',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Priya Singh' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Shah Home Decor transformed our bathroom completely with PVC panels. Very affordable pricing and great quality. Will definitely use again for other rooms.',
        name: 'PVC Panel Installation',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mohan Bisht' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "Got 3D wallpaper for my children's room. The result is stunning and the kids love it! Very patient team who helped us choose the right design.",
        name: '3D Wallpaper',
      },
    ],
  }
}
```

- [ ] **Step 2: Add schema script to `src/app/layout.tsx`**

Import `getAggregateRatingSchema` and add a third `<script>` tag after the existing two in the `<head>` section:

```tsx
import { getLocalBusinessSchema, getWebsiteSchema, getAggregateRatingSchema } from '@/lib/structured-data'
```

Add in `<head>`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getAggregateRatingSchema()),
  }}
/>
```

---

## Task 5: Integrate Real Contact Form (Formspree)

**Files:**
- Modify: `src/components/ContactForm.tsx`

Replace the fake `setTimeout` with Formspree's free tier. No backend needed.

- [ ] **Step 1: Update `handleSubmit` in `ContactForm.tsx`**

Replace the `handleSubmit` function:

```ts
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch('https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
      }),
    })

    if (res.ok) {
      toast.success(
        "Thank you! We'll contact you within 24 hours for your free consultation.",
        { duration: 6000 },
      )
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } else {
      toast.error('Something went wrong. Please call us directly at 9548506887.')
    }
  } catch {
    toast.error('Something went wrong. Please call us directly at 9548506887.')
  } finally {
    setLoading(false)
  }
}
```

**Note for client:** Sign up at formspree.io, create a form, and replace `REPLACE_WITH_FORMSPREE_ID` with the actual form ID (e.g. `xpznvqkw`).

---

## Task 6: Improve Home Page SEO Metadata

**Files:**
- Modify: `src/app/layout.tsx` (keywords and description)

- [ ] **Step 1: Expand keywords with local area terms**

Update the `keywords` array in layout.tsx metadata to include more local terms:

```ts
keywords: [
  'wallpaper shop ramnagar',
  'pvc panel nainital',
  'false ceiling ramnagar',
  '3d wallpaper nainital uttarakhand',
  'home decor shop ramnagar nainital',
  'grass matting ramnagar',
  'gypsum tiles nainital',
  'wall sticker ramnagar',
  'shah home decor',
  'interior design ramnagar',
  'home decor haldwani',
  'false ceiling corbett area',
  'wallpaper shop uttarakhand',
  'interior decor nainital district',
  'pvc wall panel uttarakhand',
],
```

---

## Task 7: TypeScript & Build Verification

**Files:** None modified — verification only

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Build completes with 0 errors. Note any warnings.

- [ ] **Step 3: Fix any build errors found**

Address errors in order of severity. Common issues:
- Missing types on imported modules
- Client component using server-only APIs
- `yet-another-react-lightbox` CSS import path issues

- [ ] **Step 4: Run lint check**

Run: `npm run lint`
Expected: 0 errors (warnings acceptable)

---

## Completion Checklist

- [ ] Gallery page has proper `<title>` and `<description>` metadata
- [ ] Lightbox CSS is imported — lightbox renders with correct styling
- [ ] Favicon reference is valid (no 404 on `/favicon.ico`)
- [ ] Footer links are accurate (no misleading "Privacy Policy" → About)
- [ ] AggregateRating schema appears in homepage `<head>`
- [ ] Contact form either uses Formspree or clearly documents the integration needed
- [ ] TypeScript compiles clean
- [ ] `npm run build` succeeds
- [ ] All 5 pages render without console errors in dev mode
