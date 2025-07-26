'use client';

import React, { useState, useRef } from 'react';
import { useSectionAnimation } from '@/components/providers/gsap-provider';
import { SectionDivider, AnimatedLine, CircuitBackground } from '@/components/animations/animated-lines';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'enterprise' | 'design';
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
  client: string;
  results: {
    metric: string;
    value: string;
  }[];
}

const categories = [
  { id: 'all', name: 'All Projects', count: 12 },
  { id: 'web', name: 'Web Apps', count: 4 },
  { id: 'mobile', name: 'Mobile Apps', count: 3 },
  { id: 'ecommerce', name: 'E-Commerce', count: 2 },
  { id: 'enterprise', name: 'Enterprise', count: 2 },
  { id: 'design', name: 'UI/UX Design', count: 1 }
];

const projects: Project[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    description: 'Real-time financial analytics platform with advanced data visualization and reporting.',
    fullDescription: 'A comprehensive financial analytics platform built for a leading investment firm. Features real-time market data, advanced charting, portfolio analysis, and automated reporting. The platform processes over 1M transactions daily with sub-second response times.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'D3.js', 'WebSockets', 'PostgreSQL', 'Redis'],
    image: '/portfolio/fintech-dashboard.jpg',
    liveUrl: 'https://demo.upreon.com/fintech',
    featured: true,
    completionDate: '2024-01',
    client: 'InvestCorp Financial',
    results: [
      { metric: 'Performance Improvement', value: '85%' },
      { metric: 'User Engagement', value: '+120%' },
      { metric: 'Processing Speed', value: '< 100ms' }
    ]
  },
  {
    id: 'healthcare-mobile',
    title: 'Healthcare Mobile App',
    description: 'HIPAA-compliant mobile application for patient management and telemedicine.',
    fullDescription: 'A secure mobile healthcare platform enabling patients to manage appointments, access medical records, and conduct virtual consultations. Built with end-to-end encryption and full HIPAA compliance.',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    image: '/portfolio/healthcare-app.jpg',
    featured: true,
    completionDate: '2023-12',
    client: 'MedTech Solutions',
    results: [
      { metric: 'Patient Satisfaction', value: '4.8/5' },
      { metric: 'Consultation Efficiency', value: '+65%' },
      { metric: 'App Store Rating', value: '4.9' }
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'Multi-Vendor E-Commerce',
    description: 'Scalable e-commerce platform supporting multiple vendors and payment gateways.',
    fullDescription: 'A comprehensive multi-vendor marketplace with advanced inventory management, real-time analytics, automated vendor payouts, and support for multiple payment methods across different regions.',
    category: 'ecommerce',
    technologies: ['React', 'Python', 'Django', 'Stripe', 'AWS', 'Elasticsearch'],
    image: '/portfolio/ecommerce-platform.jpg',
    liveUrl: 'https://demo.upreon.com/marketplace',
    featured: true,
    completionDate: '2023-11',
    client: 'GlobalMart Inc.',
    results: [
      { metric: 'Revenue Increase', value: '+180%' },
      { metric: 'Vendor Adoption', value: '500+' },
      { metric: 'Transaction Volume', value: '$2M+/month' }
    ]
  },
  {
    id: 'ai-content-platform',
    title: 'AI Content Generation Platform',
    description: 'Advanced AI-powered platform for automated content creation and optimization.',
    fullDescription: 'An innovative platform leveraging GPT and custom ML models to generate, optimize, and manage content at scale. Features include automated SEO optimization, multi-language support, and brand voice training.',
    category: 'web',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'OpenAI API', 'PostgreSQL'],
    image: '/portfolio/ai-platform.jpg',
    featured: false,
    completionDate: '2023-10',
    client: 'ContentCorp',
    results: [
      { metric: 'Content Generation Speed', value: '10x faster' },
      { metric: 'SEO Performance', value: '+95%' },
      { metric: 'Cost Reduction', value: '70%' }
    ]
  },
  {
    id: 'logistics-tracking',
    title: 'Smart Logistics Tracking',
    description: 'IoT-enabled logistics and supply chain management system with real-time tracking.',
    fullDescription: 'A comprehensive logistics platform integrating IoT sensors, GPS tracking, and predictive analytics to optimize supply chain operations. Features automated route optimization and predictive maintenance.',
    category: 'enterprise',
    technologies: ['Vue.js', 'Node.js', 'IoT', 'Machine Learning', 'Docker'],
    image: '/portfolio/logistics-system.jpg',
    featured: false,
    completionDate: '2023-09',
    client: 'LogiFlow Systems',
    results: [
      { metric: 'Delivery Efficiency', value: '+45%' },
      { metric: 'Cost Savings', value: '$1.2M/year' },
      { metric: 'Customer Satisfaction', value: '4.7/5' }
    ]
  },
  {
    id: 'fitness-tracker',
    title: 'Personal Fitness Tracker',
    description: 'Comprehensive fitness tracking app with social features and AI-powered recommendations.',
    fullDescription: 'A social fitness platform with personalized workout plans, nutrition tracking, community challenges, and AI-powered recommendations based on user behavior and goals.',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Machine Learning', 'HealthKit'],
    image: '/portfolio/fitness-app.jpg',
    featured: false,
    completionDate: '2023-08',
    client: 'FitLife Technologies',
    results: [
      { metric: 'Daily Active Users', value: '50K+' },
      { metric: 'User Retention', value: '78%' },
      { metric: 'Workout Completion', value: '+125%' }
    ]
  }
];

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useSectionAnimation(pageRef);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CircuitBackground />
        
        <div className="container-custom relative z-10 text-center">
          <div className="section-header mb-12">
            <AnimatedLine 
              direction="horizontal" 
              length="medium" 
              color="neon-green" 
              thickness="thin"
            />
          </div>
          
          <h1 className="hero-title text-6xl md:text-7xl font-display font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform ideas into powerful digital solutions 
            that drive real business results.
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green">50+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue">30+</div>
              <div>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-pink">98%</div>
              <div>Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="complex" />

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing our most innovative and impactful work that demonstrates our expertise across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="simple" />

      {/* All Projects */}
      <section className="section-padding bg-gray-950">
        <div className="container-custom">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              All <span className="text-gradient">Projects</span>
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-full border transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-neon-green text-black border-neon-green'
                      : 'bg-transparent text-gray-300 border-gray-600 hover:border-gray-500'
                    }
                  `}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Next Project</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let&apos;s discuss how we can help you achieve your goals and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary px-8 py-4">
                Start Your Project
              </a>
              <a href="/build-dream-team" className="btn-secondary px-8 py-4">
                Build Your Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="animate-card group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative h-48 bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/10" />
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">
            🚀
          </div>
          <div className="absolute top-4 right-4">
            {project.featured && (
              <span className="bg-neon-green text-black text-xs px-2 py-1 rounded-full font-bold">
                Featured
              </span>
            )}
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold group-hover:text-neon-green transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-gray-500">{project.completionDate}</span>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-gray-800 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          {/* Client */}
          <div className="text-xs text-gray-500">
            Client: {project.client}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="animate-card group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-green/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
        {/* Project Image */}
        <div className="relative h-64 bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/10" />
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            💎
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-green transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Key Results */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {project.results.slice(0, 2).map((result, idx) => (
              <div key={idx} className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-lg font-bold text-neon-green">{result.value}</div>
                <div className="text-xs text-gray-400">{result.metric}</div>
              </div>
            ))}
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 bg-gray-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Client: {project.client}</span>
            <span>{project.completionDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-8 border-b border-gray-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
          
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-400">{project.client} • {project.completionDate}</p>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {/* Project Image */}
          <div className="relative h-64 bg-gray-800 rounded-lg mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/10" />
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
              🎯
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>
          
          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Key Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-neon-green mb-1">{result.value}</div>
                  <div className="text-sm text-gray-400">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3"
              >
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-3"
              >
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 