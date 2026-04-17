import Link from 'next/link'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import LogoImage from './LogoImage'
import { SITE, SERVICES, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-black/6 bg-[oklch(0.14_0.01_260)] text-white"
      role="contentinfo"
    >
      <div className="container-xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Shri Shah Home Decor homepage">
              <LogoImage variant="dark" heightClass="h-20" className="mb-4" />
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/70">
              Premium home decor solutions in Ramnagar, Nainital. Transforming
              homes with quality PVC panels, wallpapers, false ceilings and
              more.
            </p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{ backgroundColor: '#25D366', color: 'white' }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)]"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  {SITE.address.street},<br />
                  {SITE.address.city}, {SITE.address.district}
                  <br />
                  {SITE.address.state} – {SITE.address.pin}
                </address>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone
                  className="h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)]"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)]"
                  aria-hidden="true"
                />
                <div>
                  <div>{SITE.hours.weekdays}</div>
                  <div>{SITE.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Made with{' '}
            <span className="text-red-400" aria-label="love">
              ♥
            </span>{' '}
            in Ramnagar, Uttarakhand
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="transition-colors hover:text-white/70">
              About Us
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
