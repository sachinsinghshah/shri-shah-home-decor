import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import GalleryContent from './GalleryContent'

export const metadata: Metadata = buildMetadata({
  title: 'Gallery – Decor Projects in Ramnagar',
  description:
    'Browse completed home decor projects in Ramnagar & Nainital – PVC panels, 3D wallpaper, false ceilings, gypsum tiles. Real before & after transformations.',
  path: '/gallery',
  keywords: [
    'home decor gallery ramnagar',
    'wallpaper installation photos nainital',
    'false ceiling designs ramnagar',
    'pvc panel installation photos',
    'interior decor portfolio uttarakhand',
  ],
})

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://www.shreeshahhomedecor.com' },
              { name: 'Gallery', url: 'https://www.shreeshahhomedecor.com/gallery' },
            ]),
          ),
        }}
      />
      <GalleryContent />
    </>
  )
}
