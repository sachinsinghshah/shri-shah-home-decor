'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GALLERY_ITEMS } from '@/lib/constants'

const PREVIEW_ITEMS = GALLERY_ITEMS.slice(0, 6)

export default function GalleryPreview() {
  return (
    <section
      className="section-pad bg-[oklch(0.99_0.003_85)]"
      aria-labelledby="gallery-heading"
    >
      <div className="container-xl">
        <SectionHeading
          tag="Our Work"
          title="See the transformations"
          subtitle="Browse through recent projects across Ramnagar, Nainital and nearby areas."
          align="center"
          id="gallery-heading"
        />

        <div className="masonry-grid">
          {PREVIEW_ITEMS.map((item, index) => (
            <AnimatedSection
              key={item.id}
              animation="scale"
              delay={index * 0.08}
              className="masonry-item"
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <div
                  className={`relative w-full ${
                    item.aspect === 'tall' ? 'h-64' : item.aspect === 'wide' ? 'h-40' : 'h-48'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(15,110,86,0.7)' }}
                  >
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                      {item.label}
                    </span>
                  </motion.div>
                  {/* Label */}
                  <div className="absolute bottom-3 left-3 z-10 rounded-xl bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                    <p className="text-xs font-semibold text-[oklch(0.14_0.01_260)]">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.14_162)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.54_0.14_162)]"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
