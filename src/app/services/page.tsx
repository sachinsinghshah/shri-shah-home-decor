import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, CheckCircle2, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { buildMetadata } from '@/lib/seo'
import { SERVICES, SITE } from '@/lib/constants'
import { getBreadcrumbSchema, getFaqSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  title: 'Home Decor Services – Ramnagar, Nainital',
  description:
    'PVC panels, 3D wallpaper, false ceiling, gypsum tiles, wall stickers & grass matting in Ramnagar, Nainital. Expert installation. Call 9548506887.',
  path: '/services',
  keywords: [
    'pvc panel installation ramnagar',
    'wallpaper installation nainital',
    'false ceiling ramnagar',
    '3d wallpaper nainital',
    'gypsum tiles ramnagar',
    'grass matting nainital',
  ],
})

const allFaqs = SERVICES.flatMap((s) => s.faqs)

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.shreeshahhomedecor.com' },
              { name: 'Services', url: 'https://www.shreeshahhomedecor.com/services' },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqSchema(allFaqs)),
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
                  Services
                </li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Premium home decor solutions with expert installation across
              Ramnagar, Nainital & Uttarakhand.
            </p>
          </div>
        </header>

        {/* Services Detail */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl space-y-20">
            {SERVICES.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                id={service.slug}
              >
                <article
                  className="grid gap-10 rounded-3xl border border-black/6 bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-center"
                >
                  <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className="relative h-56 overflow-hidden rounded-2xl md:h-72">
                      <Image
                        src={service.image}
                        alt={`${service.name} installation`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                    <span className="mb-3 inline-block rounded-full bg-[oklch(0.96_0.04_162)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[oklch(0.44_0.12_162)]">
                      Service
                    </span>
                    <h2 className="mb-3 font-serif text-2xl text-[oklch(0.14_0.01_260)] md:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-[oklch(0.45_0.01_260)]">
                      {service.fullDesc}
                    </p>

                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[oklch(0.25_0.01_260)]">
                      Features & Benefits
                    </h3>
                    <ul className="mb-6 grid grid-cols-2 gap-y-2 gap-x-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-[oklch(0.35_0.01_260)]"
                        >
                          <CheckCircle2
                            className="h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)]"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="rounded-full bg-[oklch(0.62_0.14_162)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.54_0.14_162)]"
                      >
                        Request a Quote
                      </Link>
                      <a
                        href={`tel:${SITE.phone}`}
                        className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.62_0.14_162)] px-6 py-2.5 text-sm font-semibold text-[oklch(0.62_0.14_162)] transition-colors hover:bg-[oklch(0.96_0.04_162)]"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Call Now
                      </a>
                      {service.id === 'pvc-panels' && (
                        <Link
                          href="/services/pvc-panels"
                          className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.62_0.14_162)] hover:underline"
                        >
                          View full details
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="section-pad"
          style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}
          aria-labelledby="faq-heading"
        >
          <div className="container-xl">
            <SectionHeading
              tag="FAQ"
              title="Frequently asked questions"
              subtitle="Got questions about our services? We have answers."
              align="center"
              id="faq-heading"
            />

            <div className="mx-auto max-w-3xl space-y-4">
              {allFaqs.map((faq, i) => (
                <AnimatedSection key={i} animation="fadeUp" delay={i * 0.04}>
                  <details className="group rounded-2xl border border-black/6 bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[oklch(0.14_0.01_260)] marker:hidden list-none">
                      <span>{faq.q}</span>
                      <ChevronRight
                        className="h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)] transition-transform duration-200 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[oklch(0.45_0.01_260)]">
                      {faq.a}
                    </p>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="container-xl">
            <h2 className="mb-4 font-serif text-3xl text-[oklch(0.14_0.01_260)]">
              Ready to get started?
            </h2>
            <p className="mb-8 text-[oklch(0.45_0.01_260)]">
              Contact us for a free site visit and personalised quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.14_162)] px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-[oklch(0.54_0.14_162)]"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
