'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoImageProps {
  variant?: 'light' | 'dark'
  height?: number
  heightClass?: string
  className?: string
}

export default function LogoImage({
  variant = 'light',
  height = 48,
  heightClass,
  className,
}: LogoImageProps) {
  return (
    <Image
      src="/logo.png"
      alt="Shri Shah Home Decor – Ramnagar, Nainital"
      width={888}
      height={281}
      priority
      style={heightClass ? { width: 'auto' } : { height: `${height}px`, width: 'auto' }}
      className={cn(
        'object-contain',
        heightClass,
        variant === 'light' && 'logo-light-shadow',
        variant === 'dark' && 'brightness-0 invert',
        className,
      )}
    />
  )
}
