'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { DotPatternWithGlowEffect } from '@/components/DotPatternWithGlowEffect'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform that redefined online shopping with seamless checkout and personalized experiences.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Real-time food delivery app connecting restaurants with customers through intuitive mobile experience.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand transformation for a fintech startup, creating trust through thoughtful design.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard that transformed complex data into actionable insights for decision makers.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Social fitness platform that motivated users to achieve their health goals through community.',
      image: 'https://images.unsplash.com/photo-1571019613914-85e2b6fe5e7c',
      technologies: ['Flutter', 'Firebase', 'Health Kit', 'Google Fit'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'web',
      description: 'Modern corporate presence that elevated brand perception and drove business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['Next.js', 'Sanity CMS', 'Vercel', 'SEO'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen" data-scroll-container>
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20" data-scroll-section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our{' '}
              <span className="text-gradient-accent">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We've partnered with forward-thinking companies to create digital experiences 
              that drive growth and inspire users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-white/10" data-scroll-section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 backdrop-blur-[2px]" data-scroll-section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                data-scroll
                data-scroll-speed={index % 2 === 0 ? "0.5" : "1"}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex space-x-4 mb-4">
                          <motion.a
                            href={project.demoUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900" data-scroll-section>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to create something amazing?
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Let's discuss your project and explore how we can bring your vision to life 
              with our expertise and passion for excellence.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary text-lg px-12 py-4 glow-hover inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio
