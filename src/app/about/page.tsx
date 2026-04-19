import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Award, IndianRupee, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import { buildMetadata } from '@/lib/seo'
import { SITE, SERVICES } from '@/lib/constants'
import { getBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = buildMetadata({
  title: 'About Us – Best Interior & Home Decor Shop, Ramnagar',
  description:
    'Shri Shah Home Decor – 10+ years transforming homes in Ramnagar, Kashipur, Nainital, Peerumadara & across Uttarakhand. Premium PVC panels, wallpaper, false ceilings. Trusted by 500+ families.',
  path: '/about',
  keywords: [
    'best interior shop ramnagar',
    'best interior shop kashipur',
    'best interior shop nainital',
    'home decor ramnagar nainital kashipur',
    'interior contractor ramnagar',
    'shri shah home decor uttarakhand',
    'home decor installer ramnagar nainital',
    'interior shop peerumadara',
    'trusted home decor uttarakhand',
  ],
})

const VALUES = [
  { icon: Shield, title: 'Quality First', desc: 'Only premium, certified materials. Zero compromise.' },
  { icon: Award, title: 'Expert Craftsmanship', desc: '10+ years of hands-on installation experience.' },
  { icon: IndianRupee, title: 'Fair Pricing', desc: 'Transparent quotes. No hidden charges. Ever.' },
  { icon: Heart, title: 'Customer Trust', desc: '500+ satisfied families across Nainital district.' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.shreeshahhomedecor.com' },
              { name: 'About', url: 'https://www.shreeshahhomedecor.com/about' },
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
                  About
                </li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl text-white md:text-5xl">
              About Us
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Ramnagar&apos;s most trusted home decor shop since over a decade.
            </p>
          </div>
        </header>

        {/* Brand Story */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]">
          <div className="container-xl">
            <div className="mx-auto max-w-3xl">
              <AnimatedSection animation="fadeUp">
                <SectionHeading
                  tag="Our Story"
                  title="Born in Ramnagar, built on trust"
                  align="center"
                />
                <div className="space-y-5 text-base leading-relaxed text-[oklch(0.35_0.01_260)]">
                  <p>
                    <strong className="text-[oklch(0.14_0.01_260)]">
                      Shri Shah Home Decor
                    </strong>{' '}
                    was founded with a simple mission: to bring premium home
                    decoration solutions to the families of Ramnagar and Nainital
                    at honest prices, with expert craftsmanship.
                  </p>
                  <p>
                    Located{' '}
                    <strong>near Sai Mandir, behind Guru Kirpa Hardware</strong>{' '}
                    in Ramnagar, we have been transforming homes across
                    Uttarakhand for over 10 years. What started as a small shop
                    has grown into one of the most trusted names in home decor in
                    the Nainital district.
                  </p>
                  <p>
                    We specialise in PVC panels, wallpaper & 3D wallpaper, false
                    ceiling (all types), gypsum tiles, wall stickers, and grass
                    matting — offering end-to-end service from selection to
                    professional installation.
                  </p>
                  <p>
                    Our team of skilled craftsmen brings your vision to life with
                    precision and care. We believe every home deserves to look
                    beautiful, and we work with every budget to make that
                    possible.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services at a Glance */}
        <section
          className="section-pad"
          style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}
          aria-labelledby="services-glance-heading"
        >
          <div className="container-xl">
            <SectionHeading
              tag="What We Do"
              title="Our services at a glance"
              align="center"
              id="services-glance-heading"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <AnimatedSection key={service.id} animation="fadeUp" delay={i * 0.07}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-black/6 bg-white p-5 shadow-sm transition-all hover:border-[oklch(0.82_0.09_162)] hover:shadow-md"
                  >
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${service.color}`}>
                      <span className="text-lg" aria-hidden="true">
                        {i === 0 ? '🏠' : i === 1 ? '🖼️' : i === 2 ? '✨' : i === 3 ? '🧱' : i === 4 ? '⭐' : '🌿'}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[oklch(0.14_0.01_260)] group-hover:text-[oklch(0.62_0.14_162)] transition-colors">
                        {service.name}
                      </p>
                      <p className="text-xs text-[oklch(0.55_0.01_260)]">{service.shortDesc}</p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-pad bg-[oklch(0.99_0.003_85)]" aria-labelledby="values-heading">
          <div className="container-xl">
            <SectionHeading
              tag="Our Values"
              title="What we stand for"
              align="center"
              id="values-heading"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((val, i) => {
                const Icon = val.icon
                return (
                  <AnimatedSection key={val.title} animation="fadeUp" delay={i * 0.1}>
                    <div className="rounded-2xl border border-black/6 bg-white p-6 text-center shadow-sm">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.96_0.04_162)]">
                        <Icon className="h-5 w-5 text-[oklch(0.44_0.12_162)]" aria-hidden="true" />
                      </div>
                      <h3 className="mb-2 font-semibold text-[oklch(0.14_0.01_260)]">{val.title}</h3>
                      <p className="text-sm text-[oklch(0.45_0.01_260)]">{val.desc}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Location + Map */}
        <section
          className="section-pad"
          style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}
          aria-labelledby="location-heading"
        >
          <div className="container-xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimatedSection animation="fadeLeft">
                <h2
                  id="location-heading"
                  className="mb-6 font-serif text-3xl text-[oklch(0.14_0.01_260)] md:text-4xl"
                >
                  Visit Our Shop
                </h2>
                <div className="space-y-4 text-sm text-[oklch(0.35_0.01_260)]">
                  <div>
                    <p className="font-semibold text-[oklch(0.14_0.01_260)]">Address</p>
                    <address className="not-italic mt-1 leading-relaxed">
                      Near Sai Mandir, Behind Guru Kirpa Hardware<br />
                      Ramnagar, Nainital<br />
                      Uttarakhand – 244715
                    </address>
                  </div>
                  <div>
                    <p className="font-semibold text-[oklch(0.14_0.01_260)]">Store Hours</p>
                    <p className="mt-1">{SITE.hours.weekdays}</p>
                    <p>{SITE.hours.weekend}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[oklch(0.14_0.01_260)]">Phone</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="mt-1 block text-[oklch(0.62_0.14_162)] hover:underline"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-[oklch(0.62_0.14_162)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.54_0.14_162)]"
                >
                  Get Directions
                </Link>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight" delay={0.15}>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    title="Shri Shah Home Decor location map – Near Sai Mandir, Ramnagar"
                    src={SITE.mapEmbed}
                    width="100%"
                    height="380"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Map showing location of Shri Shah Home Decor in Ramnagar, Nainital"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
