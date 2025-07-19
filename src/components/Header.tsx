'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, Settings, Briefcase, MessageCircle, Home, Grid3X3, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dock, DockIcon } from './magicui/dock'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolledFar, setIsScrolledFar] = useState(false)
  const [isDockOverlayOpen, setIsDockOverlayOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
      setIsScrolledFar(scrollPosition > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About us', href: '/about', icon: User },
    { name: 'Process', href: '/process', icon: Settings },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ]

  const handleDockItemClick = (href: string) => {
    setIsDockOverlayOpen(false)
    // Navigate after a short delay to allow animation
    setTimeout(() => {
      window.location.href = href
    }, 300)
  }

  return (
    <>
      {/* Simplified Header with just logo and mobile menu */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#container"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">A</span>
              </motion.div>
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Agency
              </span>
            </Link>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  href="/contact" 
                  className="btn-primary glow-hover"
                >
                  Start a conversation
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Advanced Dock System */}
      <div className="hidden md:block">
        {/* Expanded Dock - Visible at top */}
        <AnimatePresence>
          {!isScrolledFar && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-8 left-0 right-0 z-40"
            >
              <div className="flex justify-center">
                <Dock
                  className="bg-black/20 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/50"
                  iconSize={48}
                  iconMagnification={64}
                  iconDistance={120}
                >
                  {navigation.map((item) => (
                    <DockIcon key={item.name} className="bg-white/10 hover:bg-white/20 transition-colors duration-300">
                      <Link 
                        href={item.href}
                        className="flex items-center justify-center w-full h-full group"
                        title={item.name}
                      >
                        <item.icon className="h-6 w-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                      </Link>
                    </DockIcon>
                  ))}
                </Dock>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsed Circular Dock - Visible when scrolled */}
        <AnimatePresence>
          {isScrolledFar && (
            <motion.button
              initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, x: 100, y: 100 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                duration: 0.6 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDockOverlayOpen(true)}
              className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl shadow-black/50 group hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300"
            >
              <div className="relative">
                <Grid3X3 className="h-7 w-7 text-white group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Full-Screen Dock Overlay */}
      <AnimatePresence>
        {isDockOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Blurred Background */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(20px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsDockOverlayOpen(false)}
            />
            
            {/* Vertical Dock Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                delay: 0.1 
              }}
              className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setIsDockOverlayOpen(false)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronUp className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Vertical Navigation */}
              <div className="space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => handleDockItemClick(item.href)}
                    className="w-full flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 group border border-white/10 hover:border-white/20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
