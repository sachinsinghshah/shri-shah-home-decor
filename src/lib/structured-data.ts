import { TESTIMONIALS } from './constants'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://shahhomedecor.in/#business',
    name: 'Shri Shah Home Decor',
    alternateName: 'Shah Home Decor',
    description:
      'Premium home decor shop in Ramnagar offering PVC panels, wallpaper, 3D wallpaper, false ceiling, gypsum tiles, wall stickers, and grass matting.',
    url: 'https://shahhomedecor.in',
    telephone: '+91-9548506887',
    priceRange: '₹₹',
    image: 'https://shahhomedecor.in/logo.png',
    logo: 'https://shahhomedecor.in/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Sai Mandir, Behind Guru Kirpa Hardware',
      addressLocality: 'Ramnagar',
      addressRegion: 'Uttarakhand',
      postalCode: '244715',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.3951',
      longitude: '79.1312',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Decor Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'PVC Panel Installation' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Wallpaper Installation' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: '3D Wallpaper' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'False Ceiling Installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Gypsum Tiles' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Grass Matting' },
        },
      ],
    },
    areaServed: ['Ramnagar', 'Nainital', 'Haldwani', 'Corbett', 'Uttarakhand'],
    sameAs: ['https://wa.me/919548506887'],
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://shahhomedecor.in/#website',
    url: 'https://shahhomedecor.in',
    name: 'Shri Shah Home Decor',
    description:
      'Premium home decor shop in Ramnagar, Nainital – PVC panels, wallpaper, false ceiling and more.',
    inLanguage: 'en-IN',
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function getAggregateRatingSchema() {
  const avgRating = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://shahhomedecor.in/#business',
    name: 'Shri Shah Home Decor',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toFixed(1),
      reviewCount: String(TESTIMONIALS.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: TESTIMONIALS.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5' },
      reviewBody: t.text,
      name: t.service,
    })),
  }
}
