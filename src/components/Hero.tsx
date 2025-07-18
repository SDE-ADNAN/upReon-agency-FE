'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3"></div>
        
        {/* Enhanced Floating Elements with Glassmorphic Effect */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full backdrop-blur-3xl bg-gradient-to-br from-blue-500/8 to-purple-500/8 border border-white/5"
          animate={{
            x: mousePosition.x * 25,
            y: mousePosition.y * 25,
            rotate: mousePosition.x * 5,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 40 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full backdrop-blur-3xl bg-gradient-to-br from-purple-500/8 to-blue-500/8 border border-white/5"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            rotate: mousePosition.x * -3,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 40 }}
        />
        
        {/* Additional subtle elements */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full backdrop-blur-2xl bg-white/3 border border-white/10"
          animate={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 50 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          data-scroll
          data-scroll-speed="-1"
        >
          {/* Enhanced Badge with Glassmorphic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-12 shadow-2xl shadow-blue-500/10"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50"></span>
            Available for new projects
          </motion.div>

          {/* Main Heading with Enhanced Text Effects */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            data-scroll
            data-scroll-speed="2"
          >
            Have a project in mind?
            <br />
            <span className="text-gradient-accent drop-shadow-2xl">
              Let's build something great together.
            </span>
          </motion.h1>

          {/* Enhanced Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            data-scroll
            data-scroll-speed="1"
          >
            We partner with forward-thinking companies to create exceptional digital experiences
            that drive growth and inspire users worldwide.
          </motion.p>

          {/* Enhanced CTA Button with Glassmorphic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 text-white text-lg px-12 py-4 rounded-full font-semibold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Start a conversation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-3 backdrop-blur-sm bg-white/5 px-4 py-6 rounded-full border border-white/10">
              <span className="text-white/60 text-xs uppercase tracking-wider font-medium">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Hero
