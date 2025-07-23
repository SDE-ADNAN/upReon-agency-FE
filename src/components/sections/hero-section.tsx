"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl animate-float delay-2000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm">
              <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
              Premium Digital Solutions
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-responsive-xl font-display font-bold leading-tight">
                We{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">upHold</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-neon opacity-30 blur-sm" />
                </span>
                <br />
                Your Digital Vision
              </h1>
              
              <p className="text-responsive-md text-gray-300 max-w-2xl leading-relaxed">
                Crafting exceptional digital experiences through cutting-edge design and development. 
                Transform your ideas into powerful, scalable solutions that drive results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#contact" className="btn-primary group">
                Start Your Project
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              
              <Link href="/portfolio" className="btn-secondary group">
                View Our Work
                <span className="ml-2 transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative flex items-center justify-center">
            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Floating Cards */}
              <div className="absolute inset-0">
                {/* Card 1 - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-4 animate-float shadow-glow">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                    <div className="text-xs text-gray-400">Web Development</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-700 rounded w-3/4" />
                    <div className="h-2 bg-gray-700 rounded w-1/2" />
                  </div>
                </div>

                {/* Card 2 - Right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-44 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-4 animate-float delay-500 shadow-glow">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
                    <div className="text-xs text-gray-400">UI/UX Design</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-700 rounded w-2/3" />
                    <div className="h-2 bg-gray-700 rounded w-1/3" />
                  </div>
                </div>

                {/* Card 3 - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-4 animate-float delay-1000 shadow-glow">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse" />
                    <div className="text-xs text-gray-400">Mobile Apps</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-700 rounded w-4/5" />
                    <div className="h-2 bg-gray-700 rounded w-3/5" />
                    <div className="h-2 bg-gray-700 rounded w-2/5" />
                  </div>
                </div>

                {/* Card 4 - Left */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-4 animate-float delay-1500 shadow-glow">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                    <div className="text-xs text-gray-400">DevOps</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-700 rounded w-3/4" />
                  </div>
                </div>
              </div>

              {/* Central Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon animate-pulse">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-neon-green font-bold text-lg">uR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-neon-green to-transparent" />
        </div>
      </div>
    </section>
  )
} 