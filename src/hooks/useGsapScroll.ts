'use client'

import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export function useFadeUpOnScroll(
  ref: RefObject<HTMLElement | null>,
  options?: { y?: number; stagger?: number; delay?: number },
) {
  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return

    const el = ref.current
    const targets = el.querySelectorAll<HTMLElement>('[data-animate]')
    const animTargets = targets.length > 0 ? targets : [el]

    const ctx = gsap.context(() => {
      gsap.fromTo(
        animTargets,
        { y: options?.y ?? 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: options?.stagger ?? 0.12,
          delay: options?.delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [ref, options?.y, options?.stagger, options?.delay])
}

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  endValue: number,
  duration = 2,
) {
  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const obj = { val: 0 }

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: endValue,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
        onUpdate() {
          if (el) el.textContent = String(Math.round(obj.val))
        },
      })
    }, el)

    return () => ctx.revert()
  }, [ref, endValue, duration])
}

export function useHorizontalScroll(
  containerRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return

    const container = containerRef.current
    const inner = container.querySelector<HTMLElement>('[data-horizontal]')
    if (!inner) return

    const ctx = gsap.context(() => {
      const totalWidth = inner.scrollWidth - container.clientWidth
      gsap.to(inner, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [containerRef])
}
