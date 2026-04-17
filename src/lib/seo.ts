import type { Metadata } from 'next'

const BASE_URL = 'https://shahhomedecor.in'

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title,
    description,
    keywords: [
      ...keywords,
      'home decor ramnagar',
      'interior shop nainital',
      'shah home decor',
    ],
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: 'Shri Shah Home Decor',
      title: `${title} | Shri Shah Home Decor`,
      description,
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Shri Shah Home Decor – Ramnagar, Nainital',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Shri Shah Home Decor`,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
  }
}
