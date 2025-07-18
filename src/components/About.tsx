'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Globe } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '100+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' },
  ]

  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code, every design element is crafted with precision.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering results that exceed expectations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as true partners, ensuring alignment and shared success.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our diverse team brings global perspectives to create solutions that work worldwide.',
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900" data-scroll-section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="0.5"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Building the future,{' '}
              <span className="text-gradient-accent">one project at a time</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              We're a global team of designers, developers, and strategists passionate about 
              creating digital experiences that make a difference. Our approach combines 
              cutting-edge technology with human-centered design.
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Founded with the vision of bridging the gap between innovative ideas and 
              exceptional execution, we've grown into a trusted partner for companies 
              looking to transform their digital presence.
            </p>
            <motion.a
              href="/about"
              className="btn-primary glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more about us
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
            data-scroll
            data-scroll-speed="1"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Values
          </h3>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
                data-scroll
                data-scroll-speed={index % 2 === 0 ? "0.5" : "1"}
              >
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 card-hover h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {value.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

