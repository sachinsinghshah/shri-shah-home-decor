import type { Metadata } from 'next'

const BASE_URL = 'https://www.shreeshahhomedecor.com'

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
      'interior shop ramnagar',
      'interior work ramnagar',
      'interior shop kashipur',
      'interior shop nainital',
      'interior shop peerumadara',
      'home decor kashipur',
      'home decor peerumadara',
      'shah home decor',
      'shri shah home decor',
    ],
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: 'Shri Shah Home Decor',
      title: `${title} | Shri Shah Home Decor`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Shri Shah Home Decor`,
      description,
    },
  }
}
