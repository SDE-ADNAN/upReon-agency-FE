'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Globe, Zap, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Beautiful, user-centered design that converts and inspires.',
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Native and cross-platform mobile applications that scale.',
    },
    {
      icon: Globe,
      title: 'Web Platforms',
      description: 'Scalable web applications built for performance and growth.',
    },
    {
      icon: Zap,
      title: 'Strategy',
      description: 'Product strategy and digital transformation consulting.',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Dedicated teams that integrate seamlessly with your workflow.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section 
      className="py-32 bg-black relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            data-scroll
            data-scroll-speed="1"
          >
            What we do
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-3xl mx-auto"
            data-scroll
            data-scroll-speed="0.5"
          >
            We combine strategy, design, and technology to build digital products 
            that drive business growth and create exceptional user experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
                data-scroll
                data-scroll-speed={index % 2 === 0 ? "0.5" : "1"}
              >
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 card-hover">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to get started?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise and passion for excellence.
          </p>
          <motion.a
            href="/contact"
            className="btn-primary text-lg px-12 py-4 glow-hover inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's work together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
