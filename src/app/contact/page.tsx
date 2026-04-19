import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'
import { buildMetadata } from '@/lib/seo'
import { SITE } from '@/lib/constants'
import { getBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  title: 'Contact – Shah Home Decor Ramnagar | Free Quote Kashipur, Nainital',
  description:
    'Contact Shri Shah Home Decor for a free quote in Ramnagar, Kashipur, Peerumadara, Nainital & across Uttarakhand. PVC panels, wallpaper, false ceiling & more. Call 9548506887 or WhatsApp now.',
  path: '/contact',
  keywords: [
    'contact shah home decor',
    'home decor quote ramnagar',
    'home decor quote kashipur',
    'home decor quote nainital',
    'free site visit ramnagar',
    'free site visit kashipur',
    'free site visit peerumadara',
    'home decor contact uttarakhand',
    'pvc panel quote ramnagar',
    'pvc panel quote kashipur',
    'false ceiling quote ramnagar',
    'wallpaper estimate kashipur',
    'interior quote ramnagar',
  ],
})

const CONTACT_ITEMS = [
  {
    icon: Phone,
    title: 'Call or WhatsApp',
    lines: [SITE.phoneDisplay],
    href: `tel:${SITE.phone}`,
    linkLabel: 'Call now',
  },
  {
    icon: MapPin,
    title: 'Visit Our Shop',
    lines: [
      'Near Sai Mandir, Behind Guru Kirpa Hardware',
      'Ramnagar, Nainital – 244715',
      'Uttarakhand, India',
    ],
    href: 'https://maps.google.com/?q=29.3951,79.1312',
    linkLabel: 'Get directions',
  },
  {
    icon: Clock,
    title: 'Store Hours',
    lines: [SITE.hours.weekdays, SITE.hours.weekend],
    href: null,
    linkLabel: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.shreeshahhomedecor.com' },
              { name: 'Contact', url: 'https://www.shreeshahhomedecor.com/contact' },
            ]),
          ),
        }}
      />
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <header
          className="relative pt-32 pb-16 text-center"
          style={{ backgroundColor: 'oklch(0.44 0.12 162)' }}
        >
          <div className="container-xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="text-white font-medium" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl text-white md:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Free consultation & quote. We&apos;ll visit your site and help you
              choose the best solutions for your home.
            </p>
          </div>
        </header>

        {/* Contact Layout */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Left: Contact details */}
              <AnimatedSection animation="fadeLeft" className="lg:col-span-2">
                <aside>
                  <h2 className="mb-6 font-serif text-2xl text-[oklch(0.14_0.01_260)]">
                    Contact Details
                  </h2>
                  <div className="space-y-5">
                    {CONTACT_ITEMS.map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={item.title}
                          className="flex gap-4 rounded-2xl border border-black/6 bg-white p-5 shadow-sm"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[oklch(0.96_0.04_162)]">
                            <Icon
                              className="h-5 w-5 text-[oklch(0.44_0.12_162)]"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="mb-1 font-semibold text-sm text-[oklch(0.14_0.01_260)]">
                              {item.title}
                            </p>
                            {item.lines.map((line, i) => (
                              <p
                                key={i}
                                className="text-sm text-[oklch(0.45_0.01_260)]"
                              >
                                {line}
                              </p>
                            ))}
                            {item.href && item.linkLabel && (
                              <a
                                href={item.href}
                                className="mt-2 inline-block text-sm font-medium text-[oklch(0.62_0.14_162)] hover:underline"
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {item.linkLabel} →
                              </a>
                            )}
                          </div>
                        </div>
                      )
                    })}

                    {/* WhatsApp CTA */}
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366' }}
                      aria-label="Chat on WhatsApp – Shri Shah Home Decor"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </aside>
              </AnimatedSection>

              {/* Right: Form */}
              <AnimatedSection animation="fadeRight" delay={0.1} className="lg:col-span-3">
                <div className="rounded-3xl border border-black/6 bg-white p-8 shadow-sm">
                  <h2 className="mb-2 font-serif text-2xl text-[oklch(0.14_0.01_260)]">
                    Request a Free Quote
                  </h2>
                  <p className="mb-6 text-sm text-[oklch(0.55_0.01_260)]">
                    Fill in your details and we&apos;ll get back to you within 24
                    hours.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-20 bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Shri Shah Home Decor location – Ramnagar, Nainital"
                src={SITE.mapEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Shri Shah Home Decor location near Sai Mandir, Ramnagar"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
