'use client';

import React, { useRef } from 'react';
import { useSectionAnimation } from '@/components/providers/gsap-provider';
import { AnimatedLine } from '@/components/animations/animated-lines';

export default function CookiePolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useSectionAnimation(pageRef);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-header mb-12">
              <AnimatedLine 
                direction="horizontal" 
                length="medium" 
                color="neon-blue" 
                thickness="thin"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Cookie <span className="text-gradient">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Learn about how we use cookies and similar technologies to enhance 
              your experience on our website.
            </p>
            
            <div className="text-sm text-gray-500">
              Last updated: January 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="section-content space-y-12">
              
              {/* What Are Cookies */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-green">
                  1. What Are Cookies?
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They are widely used to make websites work more efficiently and provide a better user experience.
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    Cookies contain information about your preferences and help us remember your settings, 
                    analyze how you use our site, and improve our services.
                  </p>
                </div>
              </div>

              {/* Types of Cookies */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                  2. Types of Cookies We Use
                </h2>
                
                <div className="space-y-8">
                  {/* Essential Cookies */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-green/30">
                    <h3 className="text-xl font-semibold mb-3 text-neon-green">Essential Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      These cookies are necessary for the website to function properly. They enable core functionality 
                      such as security, network management, and accessibility.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-gray-200">Purpose:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm mt-1">
                          <li>User authentication</li>
                          <li>Security and fraud prevention</li>
                          <li>Load balancing</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-gray-200">Duration:</strong>
                        <span className="text-gray-400 text-sm block mt-1">Session or up to 1 year</span>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-blue/30">
                    <h3 className="text-xl font-semibold mb-3 text-neon-blue">Analytics Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-gray-200">Purpose:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm mt-1">
                          <li>Website performance analysis</li>
                          <li>User behavior tracking</li>
                          <li>Content optimization</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-gray-200">Duration:</strong>
                        <span className="text-gray-400 text-sm block mt-1">Up to 2 years</span>
                      </div>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-pink/30">
                    <h3 className="text-xl font-semibold mb-3 text-neon-pink">Functional Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and choices.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-gray-200">Purpose:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm mt-1">
                          <li>Language preferences</li>
                          <li>Theme settings</li>
                          <li>Form data retention</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-gray-200">Duration:</strong>
                        <span className="text-gray-400 text-sm block mt-1">Up to 1 year</span>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-600/30">
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Marketing Cookies</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      These cookies are used to track visitors across websites and deliver more relevant 
                      advertising content.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-gray-200">Purpose:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm mt-1">
                          <li>Targeted advertising</li>
                          <li>Conversion tracking</li>
                          <li>Social media integration</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-gray-200">Duration:</strong>
                        <span className="text-gray-400 text-sm block mt-1">Up to 2 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-green">
                  3. Third-Party Cookies
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-400 leading-relaxed">
                    We may use third-party services that set cookies on our website. These services 
                    help us provide better functionality and analyze website performance.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900/30 p-6 rounded-lg text-center">
                      <div className="text-3xl mb-3">📊</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-200">Google Analytics</h3>
                      <p className="text-gray-400 text-sm">
                        Helps us understand website usage and improve user experience.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/30 p-6 rounded-lg text-center">
                      <div className="text-3xl mb-3">🎯</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-200">Google Ads</h3>
                      <p className="text-gray-400 text-sm">
                        Enables conversion tracking and remarketing for our advertising campaigns.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/30 p-6 rounded-lg text-center">
                      <div className="text-3xl mb-3">💬</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-200">Support Chat</h3>
                      <p className="text-gray-400 text-sm">
                        Provides customer support functionality and chat history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                  4. How to Manage Cookies
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-400 leading-relaxed">
                    You have several options for managing cookies on our website:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-200">Browser Settings</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Most browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies only</li>
                        <li>Delete existing cookies</li>
                        <li>Set up cookie notifications</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-300">⚠️ Important Note</h3>
                      <p className="text-gray-300 text-sm">
                        Disabling certain cookies may affect the functionality of our website and limit 
                        your ability to use some features.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Browser-Specific Instructions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-200">Chrome</h4>
                        <p className="text-gray-400 text-sm">
                          Settings → Privacy and security → Cookies and other site data
                        </p>
                      </div>
                      <div className="bg-gray-900/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-200">Firefox</h4>
                        <p className="text-gray-400 text-sm">
                          Preferences → Privacy & Security → Cookies and Site Data
                        </p>
                      </div>
                      <div className="bg-gray-900/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-200">Safari</h4>
                        <p className="text-gray-400 text-sm">
                          Preferences → Privacy → Manage Website Data
                        </p>
                      </div>
                      <div className="bg-gray-900/30 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-gray-200">Edge</h4>
                        <p className="text-gray-400 text-sm">
                          Settings → Site permissions → Cookies and site data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Consent */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-pink">
                  5. Your Consent
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    By using our website, you consent to our use of cookies as described in this policy. 
                    When you first visit our site, you'll see a cookie banner that allows you to:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Accept all cookies</li>
                    <li>Accept only essential cookies</li>
                    <li>Customize your cookie preferences</li>
                    <li>Learn more about our cookie practices</li>
                  </ul>
                  
                  <div className="bg-neon-green/10 border border-neon-green/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-neon-green">Withdrawing Consent</h3>
                    <p className="text-gray-400 text-sm">
                      You can withdraw your consent at any time by changing your browser settings or 
                      contacting us directly. Note that withdrawing consent may affect website functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-green">
                  6. Policy Updates
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our 
                    practices, technology, or legal requirements. Any changes will be posted on 
                    this page with an updated "Last updated" date.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                  7. Contact Information
                </h2>
                
                <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                  <p className="text-gray-400 leading-relaxed mb-6">
                    If you have any questions about our use of cookies or this Cookie Policy, 
                    please contact us:
                  </p>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-blue">📧</span>
                      <span>cookies@upreon.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-blue">📍</span>
                      <span>upReon Agency, 123 Innovation Drive, Tech City, TC 12345</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-blue">📞</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">
                      For more information about your privacy rights, please see our{' '}
                      <a href="/privacy" className="text-neon-green hover:text-neon-green/80 transition-colors">
                        Privacy Policy
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 