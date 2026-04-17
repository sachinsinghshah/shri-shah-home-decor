'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'

type AnimationType = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'none'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  once?: boolean
  id?: string
}

const variants = {
  fadeUp:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  fadeLeft:  { hidden: { opacity: 0, x: -50 },  visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 50 },   visible: { opacity: 1, x: 0 } },
  scale:     { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  none:      { hidden: { opacity: 1 },           visible: { opacity: 1 } },
}

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  className,
  once = true,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[animation]}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
