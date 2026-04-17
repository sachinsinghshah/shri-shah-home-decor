import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  id?: string
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {tag && (
        <span
          className={cn(
            'mb-3 inline-block rounded-full px-4 py-1 text-sm font-medium tracking-wide uppercase',
            light
              ? 'bg-white/15 text-white'
              : 'bg-[oklch(0.96_0.04_162)] text-[oklch(0.44_0.12_162)]',
          )}
        >
          {tag}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          'font-serif text-3xl leading-tight md:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-[oklch(0.14_0.01_260)]',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mx-auto mt-4 max-w-2xl text-base md:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-white/80' : 'text-[oklch(0.45_0.01_260)]',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
