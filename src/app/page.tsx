import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import WhyUs from '@/components/WhyUs'
import GalleryPreview from '@/components/GalleryPreview'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = buildMetadata({
  title: 'Home Decor & Interior Shop Ramnagar | PVC Panels & Wallpaper',
  description:
    'Shri Shah Home Decor – best interior & home decor shop in Ramnagar, Kashipur, Nainital, Peerumadara. PVC panels, 3D wallpaper, false ceiling, gypsum tiles. Expert installation. Call 9548506887.',
  path: '/',
  keywords: [
    'home decor shop ramnagar',
    'interior shop ramnagar',
    'interior ramnagar',
    'interior kashipur',
    'interior nainital',
    'interior peerumadara',
    'pvc panel ramnagar',
    'pvc panel kashipur',
    'wallpaper shop nainital',
    'wallpaper kashipur',
    'wallpaper ramnagar',
    'false ceiling ramnagar',
    'false ceiling kashipur',
    'false ceiling nainital',
    '3d wallpaper uttarakhand',
    'home decor kashipur',
    'home decor peerumadara',
    'home decor nainital',
  ],
})

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesGrid />
        <WhyUs />
        <GalleryPreview />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
