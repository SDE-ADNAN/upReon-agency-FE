'use client';

import React, { useState, useRef } from 'react';
import { useSectionAnimation } from '@/components/providers/gsap-provider';
import { SectionDivider, AnimatedLine, CircuitBackground } from '@/components/animations/animated-lines';

interface TeamMember {
  role: string;
  level: 'junior' | 'mid' | 'senior' | 'lead';
  monthlyCost: number;
  skills: string[];
  avatar: string;
}

interface ProjectRequirement {
  id: string;
  name: string;
  description: string;
  requiredRoles: string[];
  estimatedDuration: number; // in months
}

const availableRoles = [
  {
    role: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'CSS', 'HTML'],
    costs: { junior: 4000, mid: 6000, senior: 8500, lead: 12000 }
  },
  {
    role: 'Backend Developer', 
    skills: ['Node.js', 'Python', 'Database', 'APIs'],
    costs: { junior: 4500, mid: 6500, senior: 9000, lead: 13000 }
  },
  {
    role: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'Database', 'DevOps'],
    costs: { junior: 5000, mid: 7500, senior: 10000, lead: 14000 }
  },
  {
    role: 'UI/UX Designer',
    skills: ['Figma', 'Adobe Creative', 'User Research', 'Prototyping'],
    costs: { junior: 3500, mid: 5500, senior: 7500, lead: 10000 }
  },
  {
    role: 'DevOps Engineer',
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    costs: { junior: 5500, mid: 8000, senior: 11000, lead: 15000 }
  },
  {
    role: 'Product Manager',
    skills: ['Strategy', 'Analytics', 'Roadmapping', 'Stakeholder Management'],
    costs: { junior: 6000, mid: 9000, senior: 12000, lead: 16000 }
  },
  {
    role: 'QA Engineer',
    skills: ['Testing', 'Automation', 'Bug Tracking', 'Quality Assurance'],
    costs: { junior: 3000, mid: 4500, senior: 6500, lead: 9000 }
  }
];

const projectTemplates: ProjectRequirement[] = [
  {
    id: 'web-app',
    name: 'Web Application',
    description: 'Modern web application with user authentication, dashboard, and admin panel',
    requiredRoles: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'],
    estimatedDuration: 4
  },
  {
    id: 'mobile-app',
    name: 'Mobile Application',
    description: 'Cross-platform mobile app with real-time features and push notifications',
    requiredRoles: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'QA Engineer'],
    estimatedDuration: 6
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    description: 'Full-featured online store with payment processing and inventory management',
    requiredRoles: ['Full Stack Developer', 'UI/UX Designer', 'DevOps Engineer', 'QA Engineer'],
    estimatedDuration: 8
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solution',
    description: 'Large-scale enterprise application with complex workflows and integrations',
    requiredRoles: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Product Manager', 'QA Engineer'],
    estimatedDuration: 12
  }
];

export default function BuildDreamTeamPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedTeam, setSelectedTeam] = useState<TeamMember[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectRequirement | null>(null);
  const [currentStep, setCurrentStep] = useState<'project' | 'team' | 'summary'>('project');

  useSectionAnimation(pageRef);

  const addTeamMember = (role: string, level: 'junior' | 'mid' | 'senior' | 'lead') => {
    const roleData = availableRoles.find(r => r.role === role);
    if (roleData) {
      const newMember: TeamMember = {
        role,
        level,
        monthlyCost: roleData.costs[level],
        skills: roleData.skills,
        avatar: `👨‍💻` // Simple emoji avatar for now
      };
      setSelectedTeam([...selectedTeam, newMember]);
    }
  };

  const removeTeamMember = (index: number) => {
    setSelectedTeam(selectedTeam.filter((_, i) => i !== index));
  };

  const calculateTotalCost = () => {
    const monthlyCost = selectedTeam.reduce((total, member) => total + member.monthlyCost, 0);
    const projectCost = selectedProject ? monthlyCost * selectedProject.estimatedDuration : 0;
    return { monthlyCost, projectCost };
  };

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
            Build Your <span className="text-gradient">Dream Team</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create the perfect development team tailored to your project needs. 
            Get instant cost estimates and team recommendations.
          </p>
        </div>
      </section>

      <SectionDivider variant="complex" />

      {/* Team Builder Wizard */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8">
              {['project', 'team', 'summary'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold
                    ${currentStep === step ? 'bg-neon-green text-black' : 
                      ['project', 'team', 'summary'].indexOf(currentStep) > index ? 
                      'bg-neon-green/50 text-white' : 'bg-gray-700 text-gray-400'}
                  `}>
                    {index + 1}
                  </div>
                  <span className="ml-3 text-gray-300 capitalize">{step}</span>
                  {index < 2 && (
                    <div className="w-16 h-px bg-gray-600 ml-8" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Project Selection */}
          {currentStep === 'project' && (
            <div className="section-content">
              <h2 className="text-3xl font-bold text-center mb-12">
                What type of project are you building?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projectTemplates.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`
                      animate-card p-8 rounded-xl border-2 cursor-pointer transition-all duration-300
                      ${selectedProject?.id === project.id 
                        ? 'border-neon-green bg-neon-green/10' 
                        : 'border-gray-700 hover:border-gray-600 bg-gray-900/50'
                      }
                    `}
                  >
                    <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Required roles:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.requiredRoles.map((role) => (
                          <span key={role} className="text-xs px-2 py-1 bg-gray-800 rounded">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      Estimated duration: {project.estimatedDuration} months
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedProject && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setCurrentStep('team')}
                    className="btn-primary px-8 py-4"
                  >
                    Continue to Team Selection
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Team Selection */}
          {currentStep === 'team' && (
            <div className="section-content">
              <h2 className="text-3xl font-bold text-center mb-12">
                Build your team
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Available Roles */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Available Roles</h3>
                  
                  <div className="space-y-4">
                    {availableRoles.map((roleData) => (
                      <div key={roleData.role} className="bg-gray-900 p-6 rounded-lg">
                        <h4 className="font-semibold mb-2">{roleData.role}</h4>
                        <div className="text-sm text-gray-400 mb-4">
                          Skills: {roleData.skills.join(', ')}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(roleData.costs).map(([level, cost]) => (
                            <button
                              key={level}
                              onClick={() => addTeamMember(roleData.role, level as any)}
                              className="text-xs p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                            >
                              {level}: ${cost.toLocaleString()}/mo
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Selected Team */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Your Team ({selectedTeam.length})</h3>
                  
                  {selectedTeam.length === 0 ? (
                    <div className="bg-gray-900 p-8 rounded-lg text-center text-gray-400">
                      Select team members from the left to build your dream team
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedTeam.map((member, index) => (
                        <div key={index} className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
                          <div>
                            <div className="font-semibold">{member.role}</div>
                            <div className="text-sm text-gray-400">
                              {member.level} • ${member.monthlyCost.toLocaleString()}/month
                            </div>
                          </div>
                          <button
                            onClick={() => removeTeamMember(index)}
                            className="text-red-400 hover:text-red-300 text-xl"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      
                      <div className="bg-neon-green/10 border border-neon-green/30 p-4 rounded-lg">
                        <div className="font-bold">
                          Monthly Cost: ${calculateTotalCost().monthlyCost.toLocaleString()}
                        </div>
                        {selectedProject && (
                          <div className="text-sm text-gray-300">
                            Project Cost: ${calculateTotalCost().projectCost.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {selectedTeam.length > 0 && (
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setCurrentStep('project')}
                        className="btn-secondary px-6 py-3"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setCurrentStep('summary')}
                        className="btn-primary px-6 py-3"
                      >
                        Review Summary
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {currentStep === 'summary' && (
            <div className="section-content max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Your Dream Team Summary
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>
                  {selectedProject && (
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">{selectedProject.name}</h4>
                      <p className="text-gray-400 mb-4">{selectedProject.description}</p>
                      <div className="text-sm">
                        <strong>Duration:</strong> {selectedProject.estimatedDuration} months
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-6 mt-8">Cost Breakdown</h3>
                  <div className="bg-neon-green/10 border border-neon-green/30 p-6 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Team Cost:</span>
                        <span className="font-bold">${calculateTotalCost().monthlyCost.toLocaleString()}</span>
                      </div>
                      {selectedProject && (
                        <div className="flex justify-between text-lg font-bold border-t border-neon-green/30 pt-2">
                          <span>Total Project Cost:</span>
                          <span>${calculateTotalCost().projectCost.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-6">Team Members</h3>
                  <div className="space-y-4">
                    {selectedTeam.map((member, index) => (
                      <div key={index} className="bg-gray-900 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{member.avatar}</div>
                          <div>
                            <div className="font-semibold">{member.role}</div>
                            <div className="text-sm text-gray-400">
                              {member.level} level • ${member.monthlyCost.toLocaleString()}/month
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {member.skills.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12 space-y-6">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setCurrentStep('team')}
                    className="btn-secondary px-8 py-4"
                  >
                    Modify Team
                  </button>
                  <a
                    href="#contact"
                    className="btn-primary px-8 py-4"
                  >
                    Get Started with This Team
                  </a>
                </div>
                
                <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                  Ready to bring your vision to life? Contact us to discuss your project 
                  requirements and get your dream team assembled.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 