'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Layers, ImageIcon, Home, Grid3X3, Sparkles, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICONS: Record<string, React.ElementType> = {
  Layers,
  ImageIcon,
  Home,
  Grid3X3,
  Sparkles,
  Leaf,
}

interface ServiceCardProps {
  id: string
  slug: string
  name: string
  shortDesc: string
  icon: string
  color: string
  index?: number
}

export default function ServiceCard({
  id,
  slug,
  name,
  shortDesc,
  icon,
  color,
  index = 0,
}: ServiceCardProps) {
  const Icon = ICONS[icon] ?? Layers

  return (
    <motion.article
      data-animate
      initial={{ opacity: 0, y: 40 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-black/6 bg-white p-6 shadow-sm',
        'transition-shadow duration-300 hover:border-[oklch(0.82_0.09_162)] hover:shadow-md',
      )}
      id={id}
    >
      {/* Icon */}
      <div
        className={cn(
          'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl',
          color,
        )}
      >
        <Icon className="h-5 w-5 text-[oklch(0.44_0.12_162)]" aria-hidden="true" />
      </div>

      <h3 className="mb-2 font-serif text-xl font-semibold text-[oklch(0.14_0.01_260)]">
        {name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-[oklch(0.45_0.01_260)]">
        {shortDesc}
      </p>

      <Link
        href={`/services#${slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.62_0.14_162)] transition-gap group-hover:gap-2.5"
        aria-label={`Learn more about ${name}`}
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>

      {/* Hover accent border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-[oklch(0.62_0.14_162)] transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.article>
  )
}
