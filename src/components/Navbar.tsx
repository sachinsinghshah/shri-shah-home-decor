'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import LogoImage from './LogoImage'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const { scrollY } = useScroll()
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)'],
  )
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ['0 0 0 0 rgba(0,0,0,0)', '0 1px 20px 0 rgba(0,0,0,0.08)'],
  )
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.06)'],
  )

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  // On non-home pages, always show solid white bg
  const isAlwaysSolid = !isHome

  return (
    <>
      <motion.header
        style={
          isAlwaysSolid
            ? {}
            : {
                backgroundColor: navBg,
                boxShadow: navShadow,
                borderBottomColor: navBorder,
              }
        }
        className={cn(
          'fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-sm transition-colors duration-300',
          isAlwaysSolid && 'border-black/6 bg-white/95 shadow-sm',
        )}
        role="banner"
      >
        <div className="container-xl flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Shri Shah Home Decor – Back to homepage"
            className="flex-shrink-0"
          >
            <LogoImage
              variant="light"
              heightClass="h-14 md:h-16"
              className={cn(
                'transition-all duration-300',
                !scrolled && isHome ? 'brightness-0 invert' : '',
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  !scrolled && isHome
                    ? 'text-white/90 hover:text-white'
                    : 'text-[oklch(0.35_0.01_260)] hover:text-[oklch(0.62_0.14_162)]',
                  (pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]))) &&
                    '!text-[oklch(0.62_0.14_162)]',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200',
                !scrolled && isHome
                  ? 'bg-white text-[oklch(0.44_0.12_162)] hover:bg-white/90'
                  : 'bg-[oklch(0.62_0.14_162)] text-white hover:bg-[oklch(0.54_0.14_162)]',
              )}
            >
              Get Free Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-lg md:hidden',
              !scrolled && isHome ? 'text-white' : 'text-[oklch(0.35_0.01_260)]',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-39 border-b bg-white/98 px-6 py-6 shadow-xl backdrop-blur-md md:hidden"
            style={{ top: '64px' }}
          >
            <nav
              className="flex flex-col gap-4"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base font-medium text-[oklch(0.25_0.01_260)] transition-colors hover:text-[oklch(0.62_0.14_162)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t pt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[oklch(0.62_0.14_162)] px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-[oklch(0.62_0.14_162)] px-6 py-3 text-sm font-semibold text-[oklch(0.62_0.14_162)]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
