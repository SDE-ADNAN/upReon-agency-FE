"use client"

import { useRef } from 'react'
import { useSectionAnimation } from '@/components/providers/gsap-provider'
import { SectionDivider, ConnectingLines, AnimatedLine } from '@/components/animations/animated-lines'

interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  color: 'neon-green' | 'neon-blue' | 'neon-pink'
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useSectionAnimation(sectionRef)

  const services: Service[] = [
    {
      id: 'web-dev',
      icon: '⚡',
      title: 'Web Development',
      description: 'Cutting-edge web applications built with modern technologies for optimal performance and scalability.',
      features: ['React & Next.js', 'TypeScript', 'API Integration', 'Performance Optimization'],
      color: 'neon-green'
    },
    {
      id: 'mobile-apps',
      icon: '📱',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences across all devices.',
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications'],
      color: 'neon-blue'
    },
    {
      id: 'ui-ux',
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create memorable digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'neon-pink'
    },
    {
      id: 'devops',
      icon: '🚀',
      title: 'DevOps & Cloud',
      description: 'Scalable infrastructure and deployment solutions that ensure your applications run smoothly at any scale.',
      features: ['CI/CD Pipelines', 'Cloud Architecture', 'Monitoring', 'Security'],
      color: 'neon-green'
    },
    {
      id: 'consulting',
      icon: '💡',
      title: 'Digital Strategy',
      description: 'Strategic guidance to help your business leverage technology for growth and competitive advantage.',
      features: ['Technology Audit', 'Roadmap Planning', 'Digital Transformation', 'Team Training'],
      color: 'neon-blue'
    },
    {
      id: 'ecommerce',
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
      features: ['Custom Storefronts', 'Payment Integration', 'Inventory Management', 'Analytics'],
      color: 'neon-pink'
    }
  ]

  return (
    <>
      {/* Section Divider */}
      <SectionDivider variant="complex" />
      
      <section 
        ref={sectionRef}
        id="services" 
        className="section-padding bg-gray-950 relative"
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
              What We <span className="text-gradient">Deliver</span>
            </h2>
            
            <p className="section-content text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to transform your business and 
              accelerate your growth through innovative technology and expert craftsmanship.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="relative">
            <ConnectingLines cards={3} className="hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="section-content text-center mt-20">
            <div className="flex justify-center mb-8">
              <AnimatedLine 
                direction="horizontal" 
                length="long" 
                color="neon-blue" 
                thickness="thin"
              />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ready to transform your digital presence?
            </h3>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your goals and 
              create something extraordinary together.
            </p>
            
            <a 
              href="#contact" 
              className="btn-primary group inline-flex items-center px-8 py-4"
            >
              Get Started Today
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const getColorClasses = (color: Service['color']) => {
    switch (color) {
      case 'neon-green':
        return 'border-neon-green/20 hover:border-neon-green/50 bg-neon-green/5'
      case 'neon-blue':
        return 'border-neon-blue/20 hover:border-neon-blue/50 bg-neon-blue/5'
      case 'neon-pink':
        return 'border-neon-pink/20 hover:border-neon-pink/50 bg-neon-pink/5'
      default:
        return 'border-gray-700 hover:border-gray-600'
    }
  }

  return (
    <div
      ref={cardRef}
      className={`
        animate-card group relative p-8 rounded-xl border-2 transition-all duration-500
        bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70
        ${getColorClasses(service.color)}
        hover:-translate-y-2 hover:shadow-2xl
      `}
    >
      {/* Icon */}
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      
      {/* Title */}
      <h3 className="hover-lift text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="hover-lift text-gray-400 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, featureIndex) => (
          <li 
            key={featureIndex}
            className="hover-lift flex items-center text-sm text-gray-300"
          >
            <div className={`w-1.5 h-1.5 rounded-full mr-3 bg-${service.color}`} />
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Learn More Link */}
      <a 
        href={`#services-${service.id}`}
        className="hover-lift inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
      >
        Learn More
        <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
      </a>
      
      {/* Decorative Corner Lines */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`w-8 h-px bg-${service.color}`} />
        <div className={`w-px h-8 bg-${service.color} mt-1`} />
      </div>
    </div>
  )
} 