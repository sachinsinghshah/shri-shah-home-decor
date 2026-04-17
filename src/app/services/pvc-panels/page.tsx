import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, CheckCircle2, Phone, Star, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnimatedSection from '@/components/AnimatedSection'
import SectionHeading from '@/components/SectionHeading'
import { buildMetadata } from '@/lib/seo'
import { SITE, SERVICES } from '@/lib/constants'
import { getBreadcrumbSchema, getFaqSchema, getPVCPanelServiceSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  title: 'Best PVC Panel Installation Uttarakhand | Ramnagar',
  description:
    'Top-rated PVC panel installation across Uttarakhand – Ramnagar, Nainital, Haldwani, Corbett & more. 100+ designs, waterproof, ISI-certified. Free site visit. Call +91 9548506887.',
  path: '/services/pvc-panels',
  keywords: [
    'best pvc panel uttarakhand',
    'top pvc panel ramnagar',
    'pvc panel installation nainital',
    'pvc wall panel haldwani',
    'pvc panel price uttarakhand',
    'waterproof pvc panel ramnagar',
    'pvc panel shop uttarakhand',
    'best pvc wall panel nainital',
    'pvc panel installer corbett',
    'pvc panel near me uttarakhand',
  ],
})

const pvcService = SERVICES.find((s) => s.id === 'pvc-panels')!

const PVC_TYPES = [
  {
    name: 'Plain & Solid Colour',
    desc: 'Clean, minimalist finish perfect for modern interiors, offices, and commercial spaces.',
  },
  {
    name: 'Marble & Stone Texture',
    desc: 'Luxurious marble-look panels at a fraction of the cost of real marble or stone.',
  },
  {
    name: 'Wood & Bamboo Finish',
    desc: 'Warm, natural wood aesthetic — with zero termite or moisture worries.',
  },
  {
    name: '3D Textured Panels',
    desc: 'Geometric and sculpted panels that add dramatic depth and dimension to any wall.',
  },
  {
    name: 'Ceiling PVC Panels',
    desc: 'Lightweight, waterproof panels purpose-built for false ceiling and soffit use.',
  },
  {
    name: 'Foam-Core Panels',
    desc: 'Thick foam-backed panels for superior thermal insulation and sound dampening.',
  },
]

const SERVICE_AREAS = [
  'Ramnagar', 'Nainital', 'Haldwani', 'Jim Corbett',
  'Rudrapur', 'Kashipur', 'Almora', 'Bhimtal',
  'Kotabagh', 'Kaladhungi', 'Lalkuan', 'Mukteshwar',
]

const COMPARISON_ROWS = [
  ['Waterproof', '100%', '100%', '✗'],
  ['Termite Proof', '✓', '✓', '✗'],
  ['Installation Time', '1 day', '3–5 days', '2 days'],
  ['Maintenance', 'Very Low', 'Low', 'Medium'],
  ['Design Variety', '100+ designs', 'Many', 'Limited'],
  ['Relative Cost', 'Affordable', 'Higher', 'Lowest'],
  ['Lifespan', '10–15 years', '20+ years', '3–5 years'],
]

export default function PVCPanelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.shreeshahhomedecor.com' },
              { name: 'Services', url: 'https://www.shreeshahhomedecor.com/services' },
              { name: 'PVC Panels', url: 'https://www.shreeshahhomedecor.com/services/pvc-panels' },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(pvcService.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPVCPanelServiceSchema()) }}
      />

      <Navbar />
      <main id="main-content">
        {/* Hero */}
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
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
                <li className="text-white font-medium" aria-current="page">PVC Panels</li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
              Best PVC Panel Installation<br className="hidden md:block" /> in Uttarakhand
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/80 text-lg">
              Ramnagar · Nainital · Haldwani · Corbett · Rudrapur &amp; all of Uttarakhand
            </p>
            <p className="mx-auto mt-3 max-w-xl text-white/70 text-sm">
              10+ years · 500+ homes · ISI-certified materials · Free site visit
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[oklch(0.44_0.12_162)] hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call for Free Quote
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </header>

        {/* Trust bar */}
        <section className="border-b border-black/6 bg-white py-6">
          <div className="container-xl">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-center">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Homes Done' },
                { value: '100+', label: 'Designs Available' },
                { value: '5★', label: 'Customer Rating' },
                { value: 'Free', label: 'Site Visit' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[oklch(0.44_0.12_162)]">{stat.value}</p>
                  <p className="text-xs text-[oklch(0.55_0.01_260)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why PVC panels */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimatedSection animation="fadeLeft">
                <SectionHeading
                  tag="Top Choice in Uttarakhand"
                  title="Why PVC panels are the #1 wall solution"
                  subtitle="More homeowners in Ramnagar, Nainital, and across Uttarakhand are choosing PVC panels over tiles and paint — and for good reason."
                />
                <div className="space-y-4 text-sm leading-relaxed text-[oklch(0.35_0.01_260)]">
                  <p>
                    PVC panels offer a superior combination of durability, aesthetics, and value. Unlike tiles,
                    they can be installed in a <strong>single day</strong> — no soaking, no cement mess, no
                    days of waiting. For families across Uttarakhand who want a quick, beautiful transformation,
                    PVC panels are the smart choice.
                  </p>
                  <p>
                    In Uttarakhand&apos;s humid monsoon climate — from the foothills of Ramnagar and Nainital
                    to the Tarai belt around Haldwani and Rudrapur — waterproof PVC panels resist moisture,
                    mould, and termites that can ruin painted walls or wooden panels within a few seasons.
                  </p>
                  <p>
                    At <strong>Shri Shah Home Decor</strong>, we have been the top-rated PVC panel installer
                    in the Kumaon region for over 10 years. We carry 100+ designs from ISI-certified brands
                    and offer a full quality guarantee on every project — from Ramnagar to anywhere in
                    Uttarakhand.
                  </p>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {pvcService.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.01_260)]">
                      <CheckCircle2
                        className="h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight" delay={0.1}>
                <div className="relative h-80 overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src="/images/services/pvc.jpg"
                    alt="Best PVC panel installation in Uttarakhand by Shri Shah Home Decor, Ramnagar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}>
          <div className="container-xl">
            <SectionHeading
              tag="Our Range"
              title="Types of PVC panels we offer"
              subtitle="100+ designs across 6 panel categories — for every room, every budget, every taste."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PVC_TYPES.map((type, i) => (
                <AnimatedSection key={type.name} animation="fadeUp" delay={i * 0.07}>
                  <div className="rounded-2xl border border-black/6 bg-white p-6 shadow-sm h-full">
                    <h3 className="mb-2 font-semibold text-[oklch(0.14_0.01_260)]">{type.name}</h3>
                    <p className="text-sm text-[oklch(0.45_0.01_260)]">{type.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <SectionHeading
              tag="Why Switch"
              title="PVC panels vs tiles vs paint"
              subtitle="See why more homeowners across Uttarakhand are switching to PVC panels."
              align="center"
            />
            <AnimatedSection animation="fadeUp">
              <div className="mx-auto max-w-3xl overflow-x-auto rounded-2xl border border-black/6 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      className="border-b border-black/6"
                      style={{ backgroundColor: 'oklch(0.44 0.12 162)' }}
                    >
                      <th className="px-5 py-4 text-left font-semibold text-white">Feature</th>
                      <th className="px-5 py-4 text-center font-semibold text-white">
                        PVC Panels ✓
                      </th>
                      <th className="px-5 py-4 text-center font-semibold text-white/80">Tiles</th>
                      <th className="px-5 py-4 text-center font-semibold text-white/80">Paint</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/6 bg-white">
                    {COMPARISON_ROWS.map(([feature, pvc, tiles, paint]) => (
                      <tr key={feature}>
                        <td className="px-5 py-3.5 font-medium text-[oklch(0.14_0.01_260)]">
                          {feature}
                        </td>
                        <td className="px-5 py-3.5 text-center font-semibold text-[oklch(0.44_0.12_162)]">
                          {pvc}
                        </td>
                        <td className="px-5 py-3.5 text-center text-[oklch(0.45_0.01_260)]">
                          {tiles}
                        </td>
                        <td className="px-5 py-3.5 text-center text-[oklch(0.45_0.01_260)]">
                          {paint}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Service areas */}
        <section className="section-pad" style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}>
          <div className="container-xl">
            <SectionHeading
              tag="Where We Work"
              title="PVC panel installation across Uttarakhand"
              subtitle="We travel to all major cities and towns. One call gets you a free site visit."
              align="center"
            />
            <AnimatedSection animation="fadeUp">
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-center text-sm leading-relaxed text-[oklch(0.35_0.01_260)]">
                  Based in <strong>Ramnagar, Nainital district</strong>, we provide PVC panel installation
                  across the Kumaon region of Uttarakhand. Whether you&apos;re in Haldwani, Nainital,
                  Corbett, Rudrapur, or any town in the region — we come to you, assess your walls,
                  and give you a transparent, no-obligation quote.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {SERVICE_AREAS.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 rounded-xl border border-black/6 bg-white px-4 py-3 text-sm shadow-sm"
                    >
                      <MapPin
                        className="h-3.5 w-3.5 flex-shrink-0 text-[oklch(0.62_0.14_162)]"
                        aria-hidden="true"
                      />
                      <span className="text-[oklch(0.35_0.01_260)]">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <SectionHeading
              tag="Customer Review"
              title="What our clients say about our PVC panel work"
              align="center"
            />
            <AnimatedSection animation="fadeUp">
              <div className="mx-auto max-w-xl rounded-3xl border border-black/6 bg-white p-8 shadow-sm text-center">
                <div className="mb-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-4 text-base leading-relaxed text-[oklch(0.35_0.01_260)]">
                  &ldquo;Shah Home Decor transformed our bathroom completely with PVC panels. Very affordable
                  pricing and great quality. Will definitely use again for other rooms.&rdquo;
                </blockquote>
                <p className="font-semibold text-[oklch(0.14_0.01_260)]">Priya Singh</p>
                <p className="text-sm text-[oklch(0.55_0.01_260)]">Nainital · PVC Panel Installation</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section-pad"
          style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}
          aria-labelledby="faq-heading"
        >
          <div className="container-xl">
            <SectionHeading
              tag="FAQ"
              title="PVC panel questions answered"
              subtitle="Everything you need to know about PVC panels in Uttarakhand."
              align="center"
              id="faq-heading"
            />
            <div className="mx-auto max-w-3xl space-y-4">
              {pvcService.faqs.map((faq, i) => (
                <AnimatedSection key={i} animation="fadeUp" delay={i * 0.04}>
                  <details className="group rounded-2xl border border-black/6 bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[oklch(0.14_0.01_260)] marker:hidden list-none">
                      <span>{faq.q}</span>
                      <ChevronRight
                        className="h-4 w-4 flex-shrink-0 text-[oklch(0.62_0.14_162)] transition-transform duration-200 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[oklch(0.45_0.01_260)]">{faq.a}</p>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 text-center"
          style={{ backgroundColor: 'oklch(0.44 0.12 162)' }}
        >
          <div className="container-xl">
            <h2 className="mb-4 font-serif text-3xl text-white md:text-4xl">
              Ready for the best PVC panels in Uttarakhand?
            </h2>
            <p className="mb-8 mx-auto max-w-lg text-white/80">
              Free site visit. Transparent pricing. Expert installation. Serving Ramnagar, Nainital,
              Haldwani &amp; all of Uttarakhand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-10 py-4 text-base font-semibold text-[oklch(0.44_0.12_162)] hover:bg-white/90 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
