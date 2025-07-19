'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, Settings, Briefcase, MessageCircle, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { Dock, DockIcon } from './magicui/dock'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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

      {/* Magic UI Dock Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed bottom-8 left-0 right-0 z-40 hidden md:block"
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
    </>
  )
}

export default Header
