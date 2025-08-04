"use client"

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { heroAnimations } from '@/lib/gsap-utils'
import { CircuitBackground, AnimatedLine } from '@/components/animations/animated-lines'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      heroAnimations.init()
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Circuit Background */}
      <CircuitBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-neon-green/20 rounded-full" />
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-neon-blue/20 rounded-full" />
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-neon-pink/20 rounded-full" />
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-neon-green/20 rounded-full" />
        <div className="floating-element absolute top-1/3 left-1/4 w-2 h-2 bg-neon-blue/30 rounded-full" />
        <div className="floating-element absolute bottom-1/3 right-1/4 w-3 h-3 bg-neon-pink/25 rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Decorative Lines */}
          <div className="flex justify-center mb-8">
            <AnimatedLine 
              direction="horizontal" 
              length="medium" 
              color="neon-green" 
              thickness="thin"
              delay={0.2}
            />
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="block text-gradient">
              The Right Fit,
            </span>
            <span className="block text-white mt-2">
              Every Time
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering growth through smart hiring and digital excellence. We connect businesses with 
            talented professionals who drive performance, innovation, and long-term success.
          </p>

          {/* Taglines */}
          <div className="mb-8">
            <p className="text-lg text-neon-green font-medium mb-2">
              Building Teams That Build Your Business
            </p>
            <p className="text-sm text-gray-400">
              Where Hiring Meets Precision • Hustle Meets Hire • Borderless Hiring, Boundless Potential
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="#contact" 
              className="btn-primary group px-8 py-4 text-lg"
            >
              Start Your Project
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            
            <Link 
              href="#portfolio" 
              className="btn-secondary group px-8 py-4 text-lg border border-gray-600 hover:border-neon-green/50 transition-all duration-300"
            >
              View Our Work
              <span className="ml-2 transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
          
          {/* Bottom Decorative Lines */}
          <div className="flex justify-center space-x-8">
            <AnimatedLine 
              direction="horizontal" 
              length="short" 
              color="neon-blue" 
              thickness="thin"
              delay={1.5}
            />
            <AnimatedLine 
              direction="horizontal" 
              length="short" 
              color="neon-pink" 
              thickness="thin"
              delay={1.7}
            />
            <AnimatedLine 
              direction="horizontal" 
              length="short" 
              color="neon-green" 
              thickness="thin"
              delay={1.9}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-4">
          <AnimatedLine 
            direction="vertical" 
            length="short" 
            color="neon-green" 
            thickness="thin"
            delay={2.2}
          />
          <div className="w-2 h-2 bg-neon-green/40 rounded-full" />
          <AnimatedLine 
            direction="vertical" 
            length="short" 
            color="neon-blue" 
            thickness="thin"
            delay={2.4}
          />
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-4">
          <AnimatedLine 
            direction="vertical" 
            length="short" 
            color="neon-pink" 
            thickness="thin"
            delay={2.6}
          />
          <div className="w-2 h-2 bg-neon-pink/40 rounded-full" />
          <AnimatedLine 
            direction="vertical" 
            length="short" 
            color="neon-green" 
            thickness="thin"
            delay={2.8}
          />
        </div>
      </div>
    </section>
  )
} 