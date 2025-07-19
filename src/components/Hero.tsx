'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3"></div>
        
        {/* Enhanced 3D Orbs with Advanced Parallax */}
        
        {/* Layer 1 - Furthest Back (Slowest movement) */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full border border-white/5"
          style={{
            background: `radial-gradient(circle at 20% 20%, 
              rgba(255, 255, 255, 0.15), 
              rgba(147, 197, 253, 0.1) 25%, 
              rgba(59, 130, 246, 0.08) 50%, 
              rgba(29, 78, 216, 0.03) 100%)`,
            boxShadow: `
              0 0 80px rgba(59, 130, 246, 0.2),
              0 0 160px rgba(147, 197, 253, 0.1),
              inset 0 0 50px rgba(255, 255, 255, 0.05),
              inset -25px -25px 100px rgba(59, 130, 246, 0.08)
            `,
            backdropFilter: 'blur(50px)',
            transform: `perspective(1200px) rotateX(8deg) rotateY(-8deg)`,
          }}
          animate={{
            x: mousePosition.x * 8,
            y: mousePosition.y * 6,
            rotateX: 8 + mousePosition.y * 2,
            rotateY: -8 + mousePosition.x * 2,
            scale: 1 + Math.abs(mousePosition.x + mousePosition.y) * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 40 }}
        />

        {/* Layer 2 - Main Large Orb (Medium movement) */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full border border-white/10"
          style={{
            background: `radial-gradient(circle at 25% 25%, 
              rgba(255, 255, 255, 0.25), 
              rgba(147, 197, 253, 0.2) 30%, 
              rgba(59, 130, 246, 0.15) 60%, 
              rgba(29, 78, 216, 0.08) 100%)`,
            boxShadow: `
              0 0 70px rgba(59, 130, 246, 0.4),
              0 0 140px rgba(147, 197, 253, 0.2),
              inset 0 0 40px rgba(255, 255, 255, 0.15),
              inset -20px -20px 80px rgba(59, 130, 246, 0.12)
            `,
            backdropFilter: 'blur(40px)',
            transform: `perspective(1000px) rotateX(10deg) rotateY(-10deg)`,
          }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 15,
            rotateX: 10 + mousePosition.y * 8,
            rotateY: -10 + mousePosition.x * 8,
            scale: 1 + Math.abs(mousePosition.x) * 0.05,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 35 }}
        />

        {/* Layer 3 - Purple Orb (Different direction movement) */}
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full border border-white/10"
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, 0.3), 
              rgba(168, 85, 247, 0.25) 30%, 
              rgba(147, 51, 234, 0.2) 60%, 
              rgba(88, 28, 135, 0.1) 100%)`,
            boxShadow: `
              0 0 60px rgba(147, 51, 234, 0.5),
              0 0 120px rgba(168, 85, 247, 0.25),
              inset 0 0 35px rgba(255, 255, 255, 0.2),
              inset -18px -18px 70px rgba(147, 51, 234, 0.15)
            `,
            backdropFilter: 'blur(35px)',
            transform: `perspective(1000px) rotateX(-8deg) rotateY(12deg)`,
          }}
          animate={{
            x: mousePosition.x * -18,
            y: mousePosition.y * -12,
            rotateX: -8 + mousePosition.y * -6,
            rotateY: 12 + mousePosition.x * -7,
            scale: 1 + Math.abs(mousePosition.y) * 0.04,
          }}
          transition={{ type: "spring", stiffness: 90, damping: 38 }}
        />
        
        {/* Layer 4 - Small Indigo Orb (Fastest movement) */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-white/15"
          style={{
            background: `radial-gradient(circle at 35% 25%, 
              rgba(255, 255, 255, 0.45), 
              rgba(99, 102, 241, 0.35) 25%, 
              rgba(67, 56, 202, 0.25) 50%, 
              rgba(49, 46, 129, 0.15) 100%)`,
            boxShadow: `
              0 0 40px rgba(99, 102, 241, 0.6),
              0 0 80px rgba(129, 140, 248, 0.3),
              inset 0 0 25px rgba(255, 255, 255, 0.25),
              inset -12px -12px 50px rgba(99, 102, 241, 0.2)
            `,
            backdropFilter: 'blur(25px)',
            transform: `perspective(800px) rotateX(5deg) rotateY(8deg)`,
          }}
          animate={{
            x: mousePosition.x * 35,
            y: mousePosition.y * 40,
            rotateX: 5 + mousePosition.y * 12,
            rotateY: 8 + mousePosition.x * 15,
            scale: 1 + Math.abs(mousePosition.x + mousePosition.y) * 0.08,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 45 }}
        />

        {/* Layer 5 - Additional Floating Orbs for Depth */}
        <motion.div
          className="absolute top-3/4 left-1/4 w-24 h-24 rounded-full border border-white/8"
          style={{
            background: `radial-gradient(circle at 40% 30%, 
              rgba(255, 255, 255, 0.3), 
              rgba(34, 197, 94, 0.2) 30%, 
              rgba(22, 163, 74, 0.15) 60%, 
              rgba(21, 128, 61, 0.08) 100%)`,
            boxShadow: `
              0 0 30px rgba(34, 197, 94, 0.4),
              0 0 60px rgba(34, 197, 94, 0.2),
              inset 0 0 15px rgba(255, 255, 255, 0.2)
            `,
            backdropFilter: 'blur(20px)',
          }}
          animate={{
            x: mousePosition.x * -25,
            y: mousePosition.y * 30,
            rotateX: mousePosition.y * 10,
            rotateY: mousePosition.x * -8,
            scale: 1 + Math.abs(mousePosition.y) * 0.06,
          }}
          transition={{ type: "spring", stiffness: 110, damping: 42 }}
        />

        <motion.div
          className="absolute top-1/6 right-1/4 w-20 h-20 rounded-full border border-white/6"
          style={{
            background: `radial-gradient(circle at 45% 35%, 
              rgba(255, 255, 255, 0.25), 
              rgba(251, 146, 60, 0.18) 30%, 
              rgba(249, 115, 22, 0.12) 60%, 
              rgba(234, 88, 12, 0.06) 100%)`,
            boxShadow: `
              0 0 25px rgba(251, 146, 60, 0.35),
              0 0 50px rgba(251, 146, 60, 0.18),
              inset 0 0 12px rgba(255, 255, 255, 0.18)
            `,
            backdropFilter: 'blur(18px)',
          }}
          animate={{
            x: mousePosition.x * 45,
            y: mousePosition.y * -20,
            rotateX: mousePosition.y * -5,
            rotateY: mousePosition.x * 12,
            scale: 1 + Math.abs(mousePosition.x) * 0.07,
          }}
          transition={{ type: "spring", stiffness: 130, damping: 48 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center hero-no-select">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          data-scroll
          data-scroll-speed="-1"
          className="select-none"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-12 shadow-2xl shadow-blue-500/10 select-none user-select-none"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50"></span>
            Available for new projects
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-tight select-none user-select-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-scroll
            data-scroll-speed="2"
          >
            Have a project in mind?
            <br />
            <span className="text-gradient-accent drop-shadow-2xl">
              Let's build something great together.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg select-none user-select-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-scroll
            data-scroll-speed="1"
          >
            We partner with forward-thinking companies to create exceptional digital experiences that drive growth and inspire users worldwide.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 text-white text-lg px-12 py-4 rounded-full font-semibold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 select-none user-select-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Start a conversation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center space-y-3 backdrop-blur-sm bg-white/5 px-4 py-6 rounded-full border border-white/10 select-none user-select-none">
              <span className="text-white/60 text-xs uppercase tracking-wider font-medium">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Hero
