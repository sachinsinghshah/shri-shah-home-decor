import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shri Shah Home Decor',
    short_name: 'Shah Decor',
    description:
      'Premium PVC panels, wallpaper, false ceiling & home decor in Ramnagar, Nainital',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF8',
    theme_color: '#1D9E75',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['lifestyle', 'shopping', 'business'],
  }
}
