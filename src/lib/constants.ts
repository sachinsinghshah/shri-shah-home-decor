export const SITE = {
  name: 'Shri Shah Home Decor',
  nameHindi: 'श्री Shah Home Decor',
  tagline: 'Premium Wall & Ceiling Solutions',
  description:
    'Best home decor shop in Ramnagar, Nainital. Premium PVC panels, 3D wallpaper, false ceiling, gypsum tiles, wall stickers & grass matting.',
  phone: '9548506887',
  phoneDisplay: '+91 9548506887',
  phoneFormatted: '+91-9548506887',
  whatsapp: 'https://wa.me/919548506887?text=Hi%2C+I+want+to+know+more+about+your+home+decor+services',
  address: {
    street: 'Near Sai Mandir, Behind Guru Kirpa Hardware',
    city: 'Ramnagar',
    district: 'Nainital',
    state: 'Uttarakhand',
    pin: '244715',
    country: 'India',
    full: 'Near Sai Mandir, Behind Guru Kirpa Hardware, Ramnagar, Nainital, Uttarakhand – 244715',
  },
  hours: {
    weekdays: 'Mon–Sat: 9:00 AM – 8:00 PM',
    weekend: 'Sunday: 10:00 AM – 6:00 PM',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.123456789!2d79.1312!3d29.3951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzQyLjQiTiA3OcKwMDcnNTIuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  url: 'https://www.shreeshahhomedecor.com',
  stats: [
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 6, suffix: '', label: 'Services Offered' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Quality Assured' },
  ],
} as const

export const SERVICES = [
  {
    id: 'pvc-panels',
    slug: 'pvc-panels',
    name: 'PVC Panels',
    image: '/images/services/pvc.jpg',
    shortDesc: 'Durable, waterproof wall cladding for every room',
    fullDesc:
      'Premium PVC panels that transform your walls with a sleek, modern finish. Waterproof, termite-resistant, and easy to maintain – perfect for bathrooms, kitchens, and living spaces.',
    icon: 'Layers',
    color: 'bg-teal-50',
    features: [
      'Waterproof & moisture resistant',
      '100% termite proof',
      'Easy installation',
      'Low maintenance',
      'Wide variety of designs',
      'Cost-effective alternative to tiles',
    ],
    faqs: [
      {
        q: 'How long do PVC panels last?',
        a: 'With proper installation, PVC panels can last 10–15 years with minimal maintenance.',
      },
      {
        q: 'Are PVC panels suitable for bathrooms?',
        a: 'Yes! PVC panels are 100% waterproof, making them ideal for bathrooms, kitchens, and wet areas.',
      },
      {
        q: 'What are the installation charges?',
        a: 'Installation charges vary by area size. Contact us at 9548506887 for a free site visit and quote.',
      },
    ],
  },
  {
    id: 'wallpaper',
    slug: 'wallpaper',
    name: 'Wallpaper & 3D Wallpaper',
    image: '/images/services/wallpaper.jpg',
    shortDesc: 'Stunning textures and 3D designs for statement walls',
    fullDesc:
      'From subtle textures to breathtaking 3D murals, our wallpaper collection covers every taste and budget. Transform any wall into a focal point with our premium imported and domestic wallpapers.',
    icon: 'ImageIcon',
    color: 'bg-amber-50',
    features: [
      'Imported & domestic brands',
      '3D & HD photo murals',
      'Washable & scratch-resistant',
      'Eco-friendly options',
      'Custom prints available',
      'Professional installation',
    ],
    faqs: [
      {
        q: 'How long does wallpaper installation take?',
        a: 'A standard bedroom (150 sq ft) typically takes 4–6 hours. We work efficiently to minimise disruption.',
      },
      {
        q: 'Is 3D wallpaper durable?',
        a: 'Yes, our 3D wallpapers are printed on heavy-duty vinyl and are fade-resistant for 5+ years.',
      },
      {
        q: 'Can I see samples before ordering?',
        a: 'Absolutely! Visit our shop in Ramnagar to browse hundreds of physical samples.',
      },
    ],
  },
  {
    id: 'false-ceiling',
    slug: 'false-ceiling',
    name: 'False Ceiling',
    image: '/images/services/ceiling.jpg',
    shortDesc: 'Elegant ceilings – gypsum, POP, grid, and metal types',
    fullDesc:
      'Expert false ceiling installation in all types: POP, gypsum board, grid ceiling, metal ceilings, and coffeered designs. Improve insulation, acoustics, and aesthetics simultaneously.',
    icon: 'Home',
    color: 'bg-blue-50',
    features: [
      'All types: POP, Gypsum, Grid, Metal',
      'LED lighting integration',
      'Thermal & acoustic insulation',
      'Fire-resistant materials',
      'Custom designs & patterns',
      'Rapid installation',
    ],
    faqs: [
      {
        q: 'What types of false ceilings do you offer?',
        a: 'We offer POP ceilings, gypsum board ceilings, grid ceilings (T-bar), metal ceilings, and custom coffeered designs.',
      },
      {
        q: 'Can you integrate LED lights in the false ceiling?',
        a: 'Yes! We specialise in integrated LED lighting, cove lighting, and recessed panel lights.',
      },
    ],
  },
  {
    id: 'gypsum-tiles',
    slug: 'gypsum-tiles',
    name: 'Gypsum Tiles',
    image: '/images/services/gypsum.jpg',
    shortDesc: 'Premium gypsum tiles for ceilings and accent walls',
    fullDesc:
      'High-quality gypsum tiles for decorative ceilings and feature walls. Lightweight, fire-resistant, and available in dozens of classic and contemporary patterns.',
    icon: 'Grid3X3',
    color: 'bg-purple-50',
    features: [
      'Lightweight & easy to handle',
      'Fire & moisture resistant',
      'Excellent sound absorption',
      'Wide range of patterns',
      'Paintable surface',
      'Quick & clean installation',
    ],
    faqs: [
      {
        q: 'Are gypsum tiles suitable for humid areas?',
        a: 'Moisture-resistant variants are available specifically for kitchens and bathrooms.',
      },
      {
        q: 'Can gypsum tiles be painted?',
        a: 'Yes, all our gypsum tiles accept regular wall paint for colour customisation.',
      },
    ],
  },
  {
    id: 'wall-stickers',
    slug: 'wall-stickers',
    name: 'Wall Stickers',
    image: '/images/services/stickers.jpg',
    shortDesc: 'Instant room makeovers with premium vinyl decals',
    fullDesc:
      'High-quality vinyl wall stickers and decals for instant room transformation. From florals to abstract art, quotes to landscapes – removable and reusable designs for every space.',
    icon: 'Sparkles',
    color: 'bg-pink-50',
    features: [
      'Removable & repositionable',
      'No wall damage',
      'Hundreds of designs',
      'Custom text/logo printing',
      'Children\'s room themes',
      'Office & commercial designs',
    ],
    faqs: [
      {
        q: 'Will wall stickers damage my paint?',
        a: 'Our premium vinyl stickers are designed to be removable without damaging walls or paint.',
      },
      {
        q: 'Can I get custom stickers printed?',
        a: 'Yes! We offer custom vinyl printing for personalised quotes, family names, and business logos.',
      },
    ],
  },
  {
    id: 'grass-matting',
    slug: 'grass-matting',
    name: 'Grass Matting',
    image: '/images/services/grass.webp',
    shortDesc: 'Artificial turf and grass matting for floors & walls',
    fullDesc:
      'Premium artificial grass and natural grass matting for indoor and outdoor applications. Create lush green walls, balcony floors, garden paths, and decorative panels.',
    icon: 'Leaf',
    color: 'bg-green-50',
    features: [
      'UV-resistant artificial grass',
      'Natural grass mat options',
      'Indoor & outdoor use',
      'Easy to clean',
      'Soft underfoot feel',
      'Balcony & terrace flooring',
    ],
    faqs: [
      {
        q: 'Is artificial grass suitable for balconies?',
        a: 'Yes! Our UV-resistant artificial grass is perfect for balconies, terraces, and rooftops.',
      },
      {
        q: 'How do I maintain grass matting?',
        a: 'Simply vacuum or hose down regularly. Artificial grass requires minimal maintenance.',
      },
    ],
  },
]

export const GALLERY_ITEMS = [
  { id: 1, category: 'wallpaper',     label: 'Floral 3D Wallpaper',        src: '/images/gallery/wallpaper-1.webp',    aspect: 'tall' },
  { id: 2, category: 'pvc-panels',    label: 'Modern PVC Wall Panel',       src: '/images/gallery/pvc-1.jpg',           aspect: 'wide' },
  { id: 3, category: 'false-ceiling', label: 'LED Cove False Ceiling',       src: '/images/gallery/ceiling-1.jpg',       aspect: 'normal' },
  { id: 4, category: 'wallpaper',     label: 'Abstract 3D Mural',           src: '/images/gallery/wallpaper-abstract-2.webp', aspect: 'normal' },
  { id: 5, category: 'grass-matting', label: 'Balcony Grass Flooring',       src: '/images/gallery/grass-floor-1.webp', aspect: 'tall' },
  { id: 6, category: 'wall-stickers', label: 'Decorative Wall Decals',       src: '/images/gallery/sticker-1.jpg',       aspect: 'wide' },
  { id: 7, category: 'gypsum-tiles',  label: 'Geometric Gypsum Tiles',       src: '/images/gallery/gypsum-1.jpg',        aspect: 'normal' },
  { id: 8, category: 'false-ceiling', label: 'Grid Ceiling with Spotlights', src: '/images/gallery/ceiling-2.jpg',       aspect: 'wide' },
  { id: 9, category: 'pvc-panels',    label: 'Bathroom PVC Cladding',        src: '/images/gallery/pvc-2.jpg',           aspect: 'tall' },
  { id: 10, category: 'wallpaper',    label: 'Tropical Leaf Wallpaper',      src: '/images/gallery/wallpaper-3.jpg',     aspect: 'normal' },
  { id: 11, category: 'wall-stickers', label: 'Quote Wall Sticker',          src: '/images/gallery/sticker-2.jpg',       aspect: 'normal' },
  { id: 12, category: 'grass-matting', label: 'Green Wall Installation',     src: '/images/gallery/grass-2.webp',        aspect: 'wide' },
]

export const GALLERY_CATEGORIES = [
  { id: 'all',          label: 'All Projects' },
  { id: 'wallpaper',    label: 'Wallpaper' },
  { id: 'pvc-panels',   label: 'PVC Panels' },
  { id: 'false-ceiling', label: 'False Ceiling' },
  { id: 'wall-stickers', label: 'Wall Stickers' },
  { id: 'grass-matting', label: 'Grass Matting' },
  { id: 'gypsum-tiles',  label: 'Gypsum Tiles' },
]

export const TESTIMONIALS = [
  {
    name: 'Ramesh Verma',
    location: 'Ramnagar',
    rating: 5,
    text: 'Excellent work! Got my entire living room wallpapered and false ceiling done. The team was professional, clean, and finished on time. Highly recommend!',
    service: 'Wallpaper + False Ceiling',
  },
  {
    name: 'Priya Singh',
    location: 'Nainital',
    rating: 5,
    text: 'Shah Home Decor transformed our bathroom completely with PVC panels. Very affordable pricing and great quality. Will definitely use again for other rooms.',
    service: 'PVC Panel Installation',
  },
  {
    name: 'Mohan Bisht',
    location: 'Haldwani',
    rating: 5,
    text: 'Got 3D wallpaper for my children\'s room. The result is stunning and the kids love it! Very patient team who helped us choose the right design.',
    service: '3D Wallpaper',
  },
]

export const WHY_US_FEATURES = [
  {
    icon: 'Shield',
    title: 'Quality Guaranteed',
    desc: 'We use only premium, ISI-certified materials from trusted brands for lasting results.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Delivery',
    desc: 'We respect your time. Projects are completed within the agreed timeline, every time.',
  },
  {
    icon: 'IndianRupee',
    title: 'Best Prices',
    desc: 'Transparent pricing with no hidden charges. Get the most value for your budget.',
  },
  {
    icon: 'Wrench',
    title: 'Expert Installation',
    desc: '10+ years of experience. Our skilled team handles complex installations with precision.',
  },
]

export const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/gallery',   label: 'Gallery' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
]
