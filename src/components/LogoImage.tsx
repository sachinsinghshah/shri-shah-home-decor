'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoImageProps {
  variant?: 'light' | 'dark'
  height?: number
  className?: string
}

export default function LogoImage({
  variant = 'light',
  height = 48,
  className,
}: LogoImageProps) {
  return (
    <Image
      src="/logo.png"
      alt="Shri Shah Home Decor – Ramnagar, Nainital"
      width={Math.round(height * 2.5)}
      height={height}
      priority
      className={cn(
        'object-contain',
        variant === 'light' && 'logo-light-shadow',
        className,
      )}
    />
  )
}
