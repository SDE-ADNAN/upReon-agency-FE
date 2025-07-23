import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TeamSection } from '@/components/sections/team-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingElements } from '@/components/animations/floating-elements'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const metadata: Metadata = {
  title: 'upReon - Premium Digital Agency | Web Development & Design',
  description: 'Transform your digital presence with upReon\'s cutting-edge web development, mobile apps, and UI/UX design services. Premium quality, innovative solutions.',
  openGraph: {
    title: 'upReon - Premium Digital Agency | Web Development & Design',
    description: 'Transform your digital presence with cutting-edge digital solutions.',
    url: 'https://upreon.com',
    siteName: 'upReon',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'upReon - Premium Digital Agency Homepage',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'upReon - Premium Digital Agency',
    description: 'Transform your digital presence with cutting-edge solutions.',
    images: ['/og-home.png'],
  },
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" />
      <div className="fixed inset-0 bg-dots opacity-20" />
      
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Process Section */}
        <ProcessSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Global Loading Indicator */}
      <div
        id="global-loader"
        className="fixed inset-0 z-50 bg-black flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500"
      >
        <div className="spinner" />
      </div>
    </div>
  )
}
