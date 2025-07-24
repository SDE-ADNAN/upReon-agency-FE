'use client';

import React, { useRef } from 'react';
import { useSectionAnimation } from '@/components/providers/gsap-provider';
import { AnimatedLine } from '@/components/animations/animated-lines';

export default function PrivacyPolicyPage() {
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
                color="neon-green" 
                thickness="thin"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information.
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
              
              {/* Information We Collect */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-green">
                  1. Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Personal Information</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                      <li>Fill out our contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a quote or consultation</li>
                      <li>Create an account on our platform</li>
                      <li>Communicate with us via email or phone</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Automatically Collected Information</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We automatically collect certain information when you visit our website, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                      <li>IP addresses and device identifiers</li>
                      <li>Browser type and version</li>
                      <li>Operating system information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring websites and search terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                  2. How We Use Your Information
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you technical notices and security alerts</li>
                    <li>Communicate about products, services, and promotional offers</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Detect, prevent, and address technical issues</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-pink">
                  3. Information Sharing and Disclosure
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-400 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Service Providers</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We may share information with trusted third-party service providers who assist us in 
                      operating our website, conducting business, or serving our users.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Legal Requirements</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We may disclose information when required by law or to protect our rights, property, 
                      or safety, or that of our users or others.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-green">
                  4. Data Security
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-neon-green">Our Security Measures Include:</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Regular software updates and patches</li>
                      <li>Employee training on data protection practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                  5. Your Rights and Choices
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-400 leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/30 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-200">Access & Portability</h3>
                      <p className="text-gray-400 text-sm">
                        Request access to your personal data and receive a copy in a portable format.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/30 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-200">Correction</h3>
                      <p className="text-gray-400 text-sm">
                        Request correction of inaccurate or incomplete personal information.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/30 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-200">Deletion</h3>
                      <p className="text-gray-400 text-sm">
                        Request deletion of your personal information, subject to legal requirements.
                      </p>
                    </div>
                    
                    <div className="bg-gray-900/30 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-200">Opt-out</h3>
                      <p className="text-gray-400 text-sm">
                        Opt-out of marketing communications and certain data processing activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-pink">
                  6. Cookies and Tracking Technologies
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    We use cookies and similar technologies to enhance your browsing experience, 
                    analyze site traffic, and personalize content. For detailed information about 
                    our use of cookies, please see our{' '}
                    <a href="/cookie-policy" className="text-neon-green hover:text-neon-green/80 transition-colors">
                      Cookie Policy
                    </a>.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-green">
                  7. Contact Us
                </h2>
                
                <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
                  <p className="text-gray-400 leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-green">📧</span>
                      <span>privacy@upreon.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-green">📍</span>
                      <span>upReon Agency, 123 Innovation Drive, Tech City, TC 12345</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-green">📞</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="animate-card">
                <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                  8. Policy Updates
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our 
                    practices or applicable laws. We will notify you of any material changes by 
                    posting the updated policy on our website and updating the "Last updated" date.
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    We encourage you to review this Privacy Policy periodically to stay informed 
                    about how we collect, use, and protect your information.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 