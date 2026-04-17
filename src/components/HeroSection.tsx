'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Phone, ChevronDown, Star, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SITE } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const HEADLINE_WORDS = ['Premium', 'home', 'decor', 'in', 'Ramnagar', '&', 'Nainital']

export default function HeroSection() {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([])
  const statsRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[]

    const ctx = gsap.context(() => {
      // Staggered word reveal
      gsap.fromTo(
        words,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.3,
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, oklch(0.44 0.12 162) 0%, oklch(0.32 0.1 162) 50%, oklch(0.2 0.06 200) 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: 'oklch(0.77 0.14 70)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/6 h-64 w-64 rounded-full opacity-10 blur-2xl"
        style={{ backgroundColor: 'oklch(0.62 0.14 162)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 pb-16 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
            >
              <Star
                className="h-3.5 w-3.5 fill-[oklch(0.77_0.14_70)] text-[oklch(0.77_0.14_70)]"
                aria-hidden="true"
              />
              <span>Top-rated home decor in Ramnagar, Nainital</span>
            </motion.div>

            {/* Headline with staggered words */}
            <h1
              className="mb-6 overflow-hidden text-4xl leading-tight font-serif text-white md:text-5xl lg:text-6xl"
              style={{ lineHeight: '1.15' }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <span
                    ref={(el) => { wordsRef.current[i] = el }}
                    className="inline-block"
                    style={{ opacity: 0 }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-8 max-w-lg text-base text-white/80 md:text-lg"
            >
              PVC panels, 3D wallpaper, false ceiling, gypsum tiles, wall
              stickers & grass matting — expert installation in Ramnagar &
              Nainital.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold transition-colors"
                  style={{ color: 'oklch(0.44 0.12 162)' }}
                >
                  Explore Services
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {['Free site visit', 'Expert installation', '10+ years exp'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 text-sm text-white/75"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-[oklch(0.77_0.14_70)]"
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ),
              )}
            </motion.div>
          </div>

          {/* Right: Decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="hidden lg:flex lg:items-center lg:justify-center"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="relative h-96 w-80 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                {/* Room mockup placeholder */}
                <div className="flex h-full flex-col justify-between">
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {[
                      { label: 'PVC Panels', src: '/images/services/pvc.jpg' },
                      { label: '3D Wallpaper', src: '/images/services/wallpaper.jpg' },
                      { label: 'False Ceiling', src: '/images/services/ceiling.jpg' },
                      { label: 'Grass Matting', src: '/images/services/grass.webp' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="relative flex items-end rounded-xl overflow-hidden"
                      >
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          sizes="140px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="relative z-10 p-3 text-xs font-semibold text-white drop-shadow">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-white/15 p-4 text-center backdrop-blur-sm">
                    <p className="text-lg font-serif font-semibold text-white">
                      {SITE.nameHindi}
                    </p>
                    <p className="text-sm text-white/75">{SITE.address.city}, Nainital</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="animate-float absolute -left-8 top-12 rounded-xl border border-white/20 bg-white/15 px-4 py-2.5 backdrop-blur-sm">
                <p className="text-xs font-semibold text-white">
                  ✨ Free Consultation
                </p>
              </div>

              {/* Floating badge 2 */}
              <div
                className="animate-float absolute -right-8 bottom-20 rounded-xl px-4 py-2.5 shadow-lg"
                style={{
                  animationDelay: '2s',
                  backgroundColor: 'oklch(0.77 0.14 70)',
                }}
              >
                <p className="text-xs font-semibold text-white">
                  🏆 500+ Happy Clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:grid-cols-4"
        >
          {SITE.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
