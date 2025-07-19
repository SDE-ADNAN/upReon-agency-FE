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
        
        {/* 3D Orbs instead of flat gradient circles */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full border border-white/10"
          style={{
            background: `radial-gradient(circle at 25% 25%, 
              rgba(255, 255, 255, 0.2), 
              rgba(147, 197, 253, 0.15) 30%, 
              rgba(59, 130, 246, 0.1) 60%, 
              rgba(29, 78, 216, 0.05) 100%)`,
            boxShadow: `
              0 0 60px rgba(59, 130, 246, 0.3),
              0 0 120px rgba(147, 197, 253, 0.15),
              inset 0 0 40px rgba(255, 255, 255, 0.1),
              inset -20px -20px 80px rgba(59, 130, 246, 0.1)
            `,
            backdropFilter: 'blur(40px)',
            transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)',
          }}
          animate={{
            x: mousePosition.x * 25,
            y: mousePosition.y * 25,
            rotateX: 10 + mousePosition.y * 5,
            rotateY: -10 + mousePosition.x * 5,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 40 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full border border-white/10"
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, 0.25), 
              rgba(168, 85, 247, 0.2) 30%, 
              rgba(147, 51, 234, 0.15) 60%, 
              rgba(88, 28, 135, 0.08) 100%)`,
            boxShadow: `
              0 0 50px rgba(147, 51, 234, 0.4),
              0 0 100px rgba(168, 85, 247, 0.2),
              inset 0 0 30px rgba(255, 255, 255, 0.15),
              inset -15px -15px 60px rgba(147, 51, 234, 0.12)
            `,
            backdropFilter: 'blur(35px)',
            transform: 'perspective(1000px) rotateX(-8deg) rotateY(12deg)',
          }}
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            rotateX: -8 + mousePosition.y * -3,
            rotateY: 12 + mousePosition.x * -4,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 40 }}
        />
        
        {/* Smaller 3D orb */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-white/15"
          style={{
            background: `radial-gradient(circle at 35% 25%, 
              rgba(255, 255, 255, 0.4), 
              rgba(99, 102, 241, 0.3) 25%, 
              rgba(67, 56, 202, 0.2) 50%, 
              rgba(49, 46, 129, 0.1) 100%)`,
            boxShadow: `
              0 0 30px rgba(99, 102, 241, 0.5),
              0 0 60px rgba(129, 140, 248, 0.25),
              inset 0 0 20px rgba(255, 255, 255, 0.2),
              inset -10px -10px 40px rgba(99, 102, 241, 0.15)
            `,
            backdropFilter: 'blur(25px)',
            transform: 'perspective(800px) rotateX(5deg) rotateY(8deg)',
          }}
          animate={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 20,
            rotateX: 5 + mousePosition.y * 3,
            rotateY: 8 + mousePosition.x * 6,
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
        </motion.div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Hero
