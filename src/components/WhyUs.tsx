'use client'

import { Shield, Clock, IndianRupee, Wrench, Star, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { WHY_US_FEATURES, TESTIMONIALS } from '@/lib/constants'

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Clock,
  IndianRupee,
  Wrench,
}

export default function WhyUs() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'oklch(0.97 0.005 162)' }}
      aria-labelledby="whyus-heading"
    >
      <div className="container-xl">
        <SectionHeading
          tag="Why Choose Us"
          title="Quality you can trust, results you'll love"
          subtitle="We've been transforming homes in Ramnagar and Nainital for over 10 years."
          align="center"
          id="whyus-heading"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Features */}
          <AnimatedSection animation="fadeLeft">
            <div className="grid gap-6 sm:grid-cols-2">
              {WHY_US_FEATURES.map((feature) => {
                const Icon = ICON_MAP[feature.icon] ?? Shield
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-black/6 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.96_0.04_162)]">
                      <Icon
                        className="h-5 w-5 text-[oklch(0.44_0.12_162)]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mb-1.5 font-semibold text-[oklch(0.14_0.01_260)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[oklch(0.45_0.01_260)]">
                      {feature.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Right: Reviews + Metric tiles */}
          <AnimatedSection animation="fadeRight" delay={0.15}>
            <div className="space-y-5">
              {/* Metric tiles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[oklch(0.62_0.14_162)] p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="h-5 w-5 opacity-80" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-white/80">Happy Clients</p>
                </div>
                <div
                  className="rounded-2xl p-5 text-white"
                  style={{ backgroundColor: 'oklch(0.65 0.15 65)' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Star
                      className="h-5 w-5 fill-white opacity-80"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-3xl font-bold">4.9★</p>
                  <p className="text-sm text-white/80">Average Rating</p>
                </div>
              </div>

              {/* Testimonials */}
              {TESTIMONIALS.slice(0, 2).map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-black/6 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[oklch(0.77_0.14_70)] text-[oklch(0.77_0.14_70)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-[oklch(0.35_0.01_260)]">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.14_0.01_260)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[oklch(0.55_0.01_260)]">
                        {t.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-[oklch(0.96_0.04_162)] px-3 py-1 text-xs font-medium text-[oklch(0.44_0.12_162)]">
                      {t.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
