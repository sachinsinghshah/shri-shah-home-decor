'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from './ServiceCard'
import SectionHeading from './SectionHeading'
import { SERVICES } from '@/lib/constants'

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="services"
      className="section-pad bg-[oklch(0.99_0.003_85)]"
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        <SectionHeading
          tag="What We Offer"
          title="Complete home decor solutions"
          subtitle="From walls to ceilings, we transform every surface with premium materials and expert craftsmanship."
          align="center"
          id="services-heading"
        />

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.62_0.14_162)] px-8 py-3 text-sm font-semibold text-[oklch(0.62_0.14_162)] transition-colors hover:bg-[oklch(0.62_0.14_162)] hover:text-white"
          >
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
