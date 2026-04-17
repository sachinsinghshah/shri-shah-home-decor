'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: 'oklch(0.44 0.12 162)' }}
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute left-1/3 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: 'oklch(0.77 0.14 70)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="cta-heading"
            className="mb-4 font-serif text-3xl text-white md:text-4xl lg:text-5xl"
          >
            Ready to transform your space?
          </h2>
          <p className="mx-auto mb-3 max-w-xl text-base text-white/80 md:text-lg">
            Get a free consultation and quote. Visit our shop or call us today.
          </p>
          <div className="mb-8 flex items-center justify-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{SITE.address.full}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-white/90"
              style={{ color: 'oklch(0.44 0.12 162)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phone}
            </motion.a>
            <motion.a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </motion.a>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
