import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import WhyUs from '@/components/WhyUs'
import GalleryPreview from '@/components/GalleryPreview'
import CtaBanner from '@/components/CtaBanner'

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
