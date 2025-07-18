'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Work',
      links: [
        { name: 'Web Development', href: '/services/web' },
        { name: 'Mobile Apps', href: '/services/mobile' },
        { name: 'UI/UX Design', href: '/services/design' },
        { name: 'Strategy', href: '/services/strategy' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '/about' },
        { name: 'Process', href: '/process' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Offices',
      content: [
        { name: 'San Francisco', address: '123 Market St, SF, CA 94105' },
        { name: 'New York', address: '456 Broadway, NY, NY 10013' },
        { name: 'London', address: '789 Oxford St, London, UK' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'hello@agency.com', href: 'mailto:hello@agency.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ]

  return (
    <footer className="bg-black border-t border-white/10" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold text-white">Agency</span>
              </Link>
              <p className="text-white/70 mb-8 leading-relaxed">
                We create exceptional digital experiences that drive growth and inspire users. 
                Let's build something great together.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-300" />
                      <span>{item.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Navigation Sections */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-12">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="text-white font-semibold text-lg mb-6">
                    {section.title}
                  </h3>
                  
                  {section.links && (
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: linkIndex * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors duration-300 relative group"
                          >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {section.content && (
                    <div className="space-y-6">
                      {section.content.map((office, officeIndex) => (
                        <motion.div
                          key={office.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: officeIndex * 0.05 }}
                          className="text-white/70"
                        >
                          <div className="font-medium text-white mb-1">{office.name}</div>
                          <div className="text-sm">{office.address}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <h3 className="text-white font-semibold text-lg mb-6">
                Stay Updated
              </h3>
              <p className="text-white/70 mb-6 text-sm">
                Get the latest updates on our projects and insights.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  type="submit"
                  className="w-full btn-primary glow-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-white/60 text-sm">
            © {currentYear} Agency. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
