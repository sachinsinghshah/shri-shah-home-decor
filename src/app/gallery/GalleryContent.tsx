'use client'

import { useState } from 'react'
import Image from 'next/image'
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

            <div
              id="gallery-grid"
              role="tabpanel"
              aria-label={`Gallery: ${GALLERY_CATEGORIES.find((c) => c.id === activeCategory)?.label}`}
            >
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
                        <div className={`relative w-full ${HEIGHTS[item.aspect] ?? 'h-56'}`}>
                          <Image
                            src={item.src}
                            alt={item.label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{ backgroundColor: 'rgba(15,110,86,0.65)' }}
                          >
                            <span className="rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                              View Full Size
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 z-10 rounded-xl bg-white/80 px-3 py-1.5 backdrop-blur-sm">
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

        <section className="py-16 text-center" style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}>
          <div className="container-xl">
            <h2 className="mb-4 font-serif text-3xl text-[oklch(0.14_0.01_260)]">
              Like what you see?
            </h2>
            <p className="mb-8 text-[oklch(0.45_0.01_260)]">
              Get a similar transformation for your home in Ramnagar or Nainital.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[oklch(0.62_0.14_162)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.54_0.14_162)]"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-[oklch(0.62_0.14_162)] px-8 py-3.5 text-sm font-semibold text-[oklch(0.62_0.14_162)] transition-colors hover:bg-[oklch(0.96_0.04_162)]"
              >
                View Our Services
              </Link>
            </div>
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
