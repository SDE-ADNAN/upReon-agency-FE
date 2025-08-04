"use client"

import { useRef } from 'react'
import { useSectionAnimation } from '@/components/providers/gsap-provider'
import { SectionDivider, AnimatedLine } from '@/components/animations/animated-lines'

interface StaffingService {
  icon: string
  title: string
  description: string
}

interface Industry {
  icon: string
  name: string
}

interface Position {
  name: string
  category: string
}

export function StaffingDetailsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useSectionAnimation(sectionRef)

  const staffingServices: StaffingService[] = [
    {
      icon: '👥',
      title: 'Permanent Staffing',
      description: 'Hire full-time professionals with long-term alignment and strong culture fit.'
    },
    {
      icon: '🌍',
      title: 'Remote & Virtual Teams',
      description: 'Global reach, local results — we help you hire top remote professionals worldwide.'
    },
    {
      icon: '💻',
      title: 'Tech Hiring (IT)',
      description: 'We specialize in hiring for Java, Python, DevOps, Cloud, Cybersecurity, and more.'
    },
    {
      icon: '🏢',
      title: 'Non-Tech Roles',
      description: 'HR, Finance, Sales, Support, and Operations — we cover it all.'
    },
    {
      icon: '👑',
      title: 'Leadership & Executive Search',
      description: 'Strategic hires at CXO and Director levels with discreet, high-quality headhunting.'
    },
    {
      icon: '🚀',
      title: 'Startup Hiring Support',
      description: 'Cost-effective, founder-friendly recruitment solutions to scale your core team.'
    },
    {
      icon: '🔄',
      title: 'RPO (Recruitment Process Outsourcing)',
      description: 'Let us handle the end-to-end hiring process while you focus on growth.'
    }
  ]

  const industries: Industry[] = [
    { icon: '💻', name: 'IT & Software' },
    { icon: '🛒', name: 'E-commerce & D2C' },
    { icon: '💰', name: 'Fintech & EdTech' },
    { icon: '🏥', name: 'Pharma & Healthcare' },
    { icon: '⚙️', name: 'Engineering & Manufacturing' },
    { icon: '📞', name: 'BPO / KPO' },
    { icon: '🚚', name: 'Logistics & Supply Chain' }
  ]

  const positions: Position[] = [
    { name: 'Cloud (AWS, Azure, GCP)', category: 'Infrastructure' },
    { name: 'Full-Stack', category: 'Development' },
    { name: 'DevOps', category: 'Infrastructure' },
    { name: 'Machine Learning/Deep Learning', category: 'AI/ML' },
    { name: 'Data Engineering/Datalake, Snowflake', category: 'Data' },
    { name: 'Infrastructure', category: 'Infrastructure' },
    { name: 'Business Analyst', category: 'Business' },
    { name: 'Product Owners', category: 'Product' },
    { name: 'Big Data/ Analytics', category: 'Data' }
  ]

  const benefits = [
    'Curated Talent Pool',
    'Fast Turnaround Time',
    'Personalized Client Support',
    'Cost-Effective & Scalable Models',
    'Tech-Enabled Recruitment Tools',
    'India & Global Reach'
  ]

  return (
    <>
      {/* Section Divider */}
      <SectionDivider variant="simple" />
      
      <section 
        ref={sectionRef}
        id="staffing-details" 
        className="section-padding bg-black relative"
      >
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-header text-center mb-20">
            <div className="flex justify-center mb-6">
              <AnimatedLine 
                direction="horizontal" 
                length="medium" 
                color="neon-green" 
                thickness="thin"
              />
            </div>
            
            <h2 className="text-responsive-lg font-display font-bold mb-6">
              Staffing Services <span className="text-gradient">We Offer</span>
            </h2>
            
            <p className="section-content text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive recruitment solutions designed to connect businesses with talented professionals 
              who drive performance, innovation, and long-term success.
            </p>
          </div>

          {/* Staffing Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {staffingServices.map((service, index) => (
              <div
                key={index}
                className="animate-card p-6 rounded-xl border border-neon-green/20 bg-neon-green/5 
                         hover:border-neon-green/50 hover:bg-neon-green/10 transition-all duration-500"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Upreon */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Why Choose <span className="text-gradient">Upreon</span> for Staffing?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg border border-neon-blue/20 bg-neon-blue/5"
                >
                  <div className="text-neon-green mr-4 text-xl">✔️</div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries and Positions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Industries */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Industries We <span className="text-gradient">Work With</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg border border-gray-700 hover:border-neon-pink/50 
                             hover:bg-neon-pink/5 transition-all duration-300"
                  >
                    <span className="text-xl mr-3">{industry.icon}</span>
                    <span className="text-gray-300">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Positions */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Frequently Sourced <span className="text-gradient">Positions</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-gray-700 hover:border-neon-green/50 
                             hover:bg-neon-green/5 transition-all duration-300"
                  >
                    <div className="text-white font-medium text-sm">{position.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{position.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <AnimatedLine 
                direction="horizontal" 
                length="long" 
                color="neon-green" 
                thickness="thin"
              />
            </div>
            
            <h3 className="text-3xl font-bold mb-6 text-white">
              Our <span className="text-gradient">Commitment</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                At Upreon, we don't just fill roles — we build relationships. Every candidate we recommend is
                carefully evaluated not just for skills, but for long-term compatibility and culture fit.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Our goal is simple: deliver talent that contributes from Day One and stays for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 