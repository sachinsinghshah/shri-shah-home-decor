'use client'

import { useScroll, useTransform, MotionValue } from 'motion/react'
import { RefObject } from 'react'

export function useScrollProgress(ref?: RefObject<HTMLElement | null>): {
  scrollYProgress: MotionValue<number>
  opacity: MotionValue<number>
  y: MotionValue<number>
} {
  const { scrollYProgress } = useScroll(
    ref ? { target: ref, offset: ['start end', 'end start'] } : undefined,
  )

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return { scrollYProgress, opacity, y }
}
