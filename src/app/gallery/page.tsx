import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import GalleryContent from './GalleryContent'

export const metadata: Metadata = buildMetadata({
  title: 'Project Gallery – Wallpaper, PVC Panels & False Ceiling Photos',
  description:
    'Browse our gallery of completed home decor projects in Ramnagar and Nainital – PVC panels, 3D wallpaper, false ceilings, gypsum tiles, and more. See real transformations.',
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
              { name: 'Home', url: 'https://shahhomedecor.in/' },
              { name: 'Gallery', url: 'https://shahhomedecor.in/gallery' },
            ]),
          ),
        }}
      />
      <GalleryContent />
    </>
  )
}
