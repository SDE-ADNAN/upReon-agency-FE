import { Metadata } from 'next'
import Link from 'next/link'
import { FloatingElements } from '@/components/animations/floating-elements'

export const metadata: Metadata = {
  title: 'About Us - upReon | Premium Digital Agency',
  description: 'Discover upReon\'s journey from concept to code. We specialize in custom web development, startup solutions, and end-to-end digital partnerships that drive growth.',
  openGraph: {
    title: 'About Us - upReon | Premium Digital Agency',
    description: 'From concept to code, we deliver custom web solutions that empower businesses to thrive in the digital world.',
    url: 'https://upreon.com/about',
    siteName: 'upReon',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About upReon - Premium Digital Agency',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - upReon | Premium Digital Agency',
    description: 'From concept to code, we deliver custom web solutions that empower businesses to thrive.',
    images: ['/og-about.png'],
  },
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" />
      <div className="fixed inset-0 bg-dots opacity-20" />
      
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-responsive-xl font-display font-bold mb-6">
                <span className="text-gradient">About</span> upReon
              </h1>
              <p className="text-responsive-md text-gray-300 mb-8 leading-relaxed">
                From Concept to Code — We&apos;ve Got You Covered.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-4 text-neon-green">Your Vision, Our Code.</h2>
                  <p className="text-gray-300 leading-relaxed">
                    At upReon, we transform your digital dreams into reality. Every line of code we write, 
                    every pixel we design, and every solution we build is crafted with your success in mind.
                  </p>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Built to Rise. Designed to Last.</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We don&apos;t just build websites — we create digital foundations that grow with your business, 
                    scale with your ambitions, and evolve with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section-padding bg-gray-900/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-responsive-lg font-display font-bold mb-6">
                    <span className="text-gradient">Uplift Today.</span> Thrive for Eons.
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Founded in India and serving clients across the globe, we are passionate about building 
                    modern, scalable, and high-performing websites that empower businesses to grow and thrive 
                    in the digital world.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Whether you&apos;re launching your first website or rebuilding your digital presence, 
                    we deliver tailored solutions that reflect your brand and support your goals.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="card-neon">
                    <h3 className="text-xl font-semibold mb-3 text-neon-green">Our Mission</h3>
                    <p className="text-gray-300">
                      To empower businesses with cutting-edge digital solutions that drive growth, 
                      enhance user experiences, and create lasting impact in the digital landscape.
                    </p>
                  </div>
                  <div className="card-neon">
                    <h3 className="text-xl font-semibold mb-3 text-neon-blue">Our Vision</h3>
                    <p className="text-gray-300">
                      We believe that long-term client satisfaction starts with a customer-first mindset. 
                      Our vision is to become a trusted technology partner — not just for a project, 
                      but for the journey ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-responsive-lg font-display font-bold mb-6">
                  What Sets Us <span className="text-gradient">Apart</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  We focus on building relationships, not just websites. Here&apos;s what makes us different.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Customer-Centric Approach</h3>
                      <p className="text-gray-300">
                        We listen, understand, and deliver what your business truly needs. 
                        Your success is our success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Startup-Focused Solutions</h3>
                      <p className="text-gray-300">
                        We understand the lean, fast-paced environment of startups and 
                        provide agile solutions to match.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">End-to-End Partnership</h3>
                      <p className="text-gray-300">
                        From idea to deployment and beyond — we walk with you at every step 
                        of your digital journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Tech with Purpose</h3>
                      <p className="text-gray-300">
                        We combine clean code, user-first design, and performance to build 
                        products that work beautifully.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💡</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Innovation + Simplicity</h3>
                      <p className="text-gray-300">
                        We simplify the complex and bring creative, scalable ideas to life 
                        with elegant solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                      <p className="text-gray-300">
                        Based in India, serving worldwide. We bring diverse perspectives 
                        and global best practices to every project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gray-900/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-responsive-lg font-display font-bold mb-6">
                  Our <span className="text-gradient">Values</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center text-neon-green text-xl font-bold">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Excellence in Execution</h3>
                      <p className="text-gray-300">
                        We don&apos;t settle for good enough. Every project is an opportunity 
                        to push boundaries and deliver exceptional results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center text-neon-blue text-xl font-bold">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
                      <p className="text-gray-300">
                        Clear, honest, and regular communication ensures you&apos;re always 
                        in the loop and confident in our progress.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center text-neon-pink text-xl font-bold">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                      <p className="text-gray-300">
                        We stay ahead of the curve, embracing new technologies and methodologies 
                        to deliver cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center text-neon-green text-xl font-bold">
                      04
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Long-term Partnership</h3>
                      <p className="text-gray-300">
                        We&apos;re not just vendors — we&apos;re partners in your success, 
                        committed to your growth and evolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-responsive-lg font-display font-bold mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can bring your vision to life with custom web solutions 
                that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary group">
                  Start Your Project
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link href="/portfolio" className="btn-secondary group">
                  View Our Work
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 