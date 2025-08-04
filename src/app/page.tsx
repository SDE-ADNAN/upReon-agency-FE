import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { StaffingDetailsSection } from '@/components/sections/staffing-details-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TeamSection } from '@/components/sections/team-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FloatingElements } from '@/components/animations/floating-elements'

export const metadata: Metadata = {
  title: 'upReon - Smart Hiring & Digital Excellence | Staffing & Web Development',
  description: 'Empowering growth through smart hiring and digital excellence. Connect with talented professionals and transform your digital presence with upReon\'s comprehensive staffing and development services.',
  openGraph: {
    title: 'upReon - Smart Hiring & Digital Excellence | Staffing & Web Development',
    description: 'Empowering growth through smart hiring and digital excellence. The right fit, every time.',
    url: 'https://upreon.com',
    siteName: 'upReon',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'upReon - Smart Hiring & Digital Excellence',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'upReon - Smart Hiring & Digital Excellence',
    description: 'Empowering growth through smart hiring and digital excellence.',
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
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Staffing Details Section */}
        <StaffingDetailsSection />
        
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
