import { TESTIMONIALS } from './constants'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://www.shreeshahhomedecor.com/#business',
    name: 'Shri Shah Home Decor',
    alternateName: 'Shah Home Decor',
    description:
      'Premium home decor shop in Ramnagar offering PVC panels, wallpaper, 3D wallpaper, false ceiling, gypsum tiles, wall stickers, and grass matting.',
    url: 'https://www.shreeshahhomedecor.com',
    telephone: '+91-9548506887',
    priceRange: '₹₹',
    image: 'https://www.shreeshahhomedecor.com/logo.png',
    logo: 'https://www.shreeshahhomedecor.com/logo.png',
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
    areaServed: [
      { '@type': 'City', name: 'Ramnagar', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Nainital', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Haldwani', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Kashipur', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Rudrapur', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Peerumadara', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Bhimtal', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Corbett', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Almora', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'AdministrativeArea', name: 'Uttarakhand' },
    ],
    sameAs: ['https://wa.me/919548506887'],
    aggregateRating: (() => {
      const avgRating = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
      return {
        '@type': 'AggregateRating',
        ratingValue: avgRating.toFixed(1),
        reviewCount: String(TESTIMONIALS.length),
        bestRating: '5',
        worstRating: '1',
      }
    })(),
    review: TESTIMONIALS.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5' },
      reviewBody: t.text,
    })),
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.shreeshahhomedecor.com/#website',
    url: 'https://www.shreeshahhomedecor.com',
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

export function getPVCPanelServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.shreeshahhomedecor.com/services/pvc-panels#service',
    name: 'PVC Panel Installation',
    description:
      'Professional PVC panel installation for walls and ceilings. Waterproof, termite-proof, 100+ designs. Serving Ramnagar, Nainital, Haldwani, and all of Uttarakhand.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.shreeshahhomedecor.com/#business',
    },
    areaServed: [
      { '@type': 'City', name: 'Ramnagar', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Nainital', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Haldwani', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Kashipur', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Rudrapur', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Peerumadara', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Bhimtal', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Corbett', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Almora', containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'AdministrativeArea', name: 'Uttarakhand' },
    ],
    serviceType: 'PVC Panel Installation',
    offers: {
      '@type': 'Offer',
      description: 'Free site visit and transparent quote for PVC panel installation across Uttarakhand',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'PVC Panel Types',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plain & Solid Colour PVC Wall Panels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marble Finish PVC Panels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wood Texture PVC Panels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Textured PVC Panels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceiling PVC Panels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foam-Core Insulation PVC Panels' } },
      ],
    },
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

