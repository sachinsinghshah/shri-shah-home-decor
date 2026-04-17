import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { getLocalBusinessSchema, getWebsiteSchema } from '@/lib/structured-data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shreeshahhomedecor.com'),
  title: {
    default:
      'Shri Shah Home Decor Ramnagar | PVC Panels & Wallpaper',
    template: '%s | Shri Shah Home Decor',
  },
  description:
    'Best home decor shop in Ramnagar, Nainital. PVC panels, 3D wallpaper, false ceiling, gypsum tiles & grass matting. Expert installation. Call 9548506887.',
  keywords: [
    'wallpaper shop ramnagar',
    'pvc panel nainital',
    'false ceiling ramnagar',
    '3d wallpaper nainital uttarakhand',
    'home decor shop ramnagar nainital',
    'grass matting ramnagar',
    'gypsum tiles nainital',
    'wall sticker ramnagar',
    'shah home decor',
    'interior design ramnagar',
    'home decor haldwani',
    'false ceiling corbett area',
    'wallpaper shop uttarakhand',
    'interior decor nainital district',
    'pvc wall panel uttarakhand',
  ],
  authors: [{ name: 'Shri Shah Home Decor' }],
  creator: 'Shri Shah Home Decor',
  publisher: 'Shri Shah Home Decor',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.shreeshahhomedecor.com',
    siteName: 'Shri Shah Home Decor',
    title:
      'Shri Shah Home Decor – Premium Wall & Ceiling Solutions in Ramnagar',
    description:
      'PVC panels, 3D wallpaper, false ceiling & more in Ramnagar, Nainital. Call: 9548506887.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shri Shah Home Decor – Ramnagar, Nainital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Shah Home Decor – Ramnagar, Nainital',
    description:
      'Premium PVC panels, wallpaper, 3D wallpaper, false ceiling – Ramnagar, Nainital',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: 'https://www.shreeshahhomedecor.com' },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? 'ADD_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE',
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/icon.png', type: 'image/png', sizes: '180x180' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        style={{ backgroundColor: 'oklch(0.99 0.003 85)', color: 'oklch(0.14 0.01 260)' }}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
