'use client';

import React, { useState, useRef } from 'react';
import { useSectionAnimation } from '@/components/providers/gsap-provider';
import { CircuitBackground } from '@/components/animations/animated-lines';
import { ProjectCard } from '@/components/ui/project-card';
import { projects, getProjectsByCategory } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'ecommerce', name: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
  { id: 'security', name: 'Security', count: projects.filter(p => p.category === 'security').length },
  { id: 'research', name: 'Research', count: projects.filter(p => p.category === 'research').length },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const sectionRef = useRef<HTMLElement>(null);

  useSectionAnimation(sectionRef);

  const filteredProjects = getProjectsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <CircuitBackground />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover how we&apos;ve helped businesses transform their digital presence with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-neon-blue text-white border-neon-blue'
                      : 'bg-transparent border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} className="py-20">
        <div className="container-custom">
          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-neon-blue text-white' : 'text-gray-400 hover:text-white'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-neon-blue text-white' : 'text-gray-400 hover:text-white'}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                variant={viewMode === 'list' ? 'default' : 'featured'}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-lg mb-4">
                No projects found in this category.
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory('all')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your <span className="text-gradient">Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:shadow-lg hover:shadow-neon-blue/25">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 