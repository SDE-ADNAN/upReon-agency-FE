import { Metadata } from 'next'
import Link from 'next/link'
import { FloatingElements } from '@/components/animations/floating-elements'

export const metadata: Metadata = {
  title: 'About Us - upReon | Smart Hiring & Digital Excellence',
  description: 'Discover upReon\'s journey in empowering growth through smart hiring and digital excellence. We specialize in staffing solutions, custom web development, and end-to-end partnerships that drive success.',
  openGraph: {
    title: 'About Us - upReon | Smart Hiring & Digital Excellence',
    description: 'Empowering growth through smart hiring and digital excellence. The right fit, every time.',
    url: 'https://upreon.com/about',
    siteName: 'upReon',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About upReon - Smart Hiring & Digital Excellence',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - upReon | Smart Hiring & Digital Excellence',
    description: 'Empowering growth through smart hiring and digital excellence.',
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
                Empowering Growth Through Smart Hiring & Digital Excellence
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-4 text-neon-green">The Right Fit, Every Time.</h2>
                  <p className="text-gray-300 leading-relaxed">
                    At upReon, we believe that great teams build great companies. Our staffing services 
                    connect businesses with talented professionals who drive performance, innovation, and long-term success.
                  </p>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Digital Excellence Redefined.</h2>
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
                    <span className="text-gradient">Building Teams</span> That Build Your Business
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Whether you&apos;re a growing startup, a scaling enterprise, or an overseas company looking to build
                    remote teams — we&apos;re here to power your vision with the right talent, at the right time.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We don&apos;t just fill roles — we build relationships. Every candidate we recommend is
                    carefully evaluated not just for skills, but for long-term compatibility and culture fit.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="card-neon">
                    <h3 className="text-xl font-semibold mb-3 text-neon-green">Our Mission</h3>
                    <p className="text-gray-300">
                      To empower businesses with smart hiring solutions and cutting-edge digital services 
                      that drive growth, enhance user experiences, and create lasting impact.
                    </p>
                  </div>
                  <div className="card-neon">
                    <h3 className="text-xl font-semibold mb-3 text-neon-blue">Our Vision</h3>
                    <p className="text-gray-300">
                      We believe that long-term success starts with the right people and the right technology. 
                      Our vision is to become a trusted partner for both talent acquisition and digital transformation.
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
                  We focus on building relationships and delivering results. Here&apos;s what makes us different.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">👥</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Curated Talent Pool</h3>
                      <p className="text-gray-300">
                        We maintain a carefully curated network of professionals 
                        across tech and non-tech domains.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Fast Turnaround Time</h3>
                      <p className="text-gray-300">
                        Quick, efficient processes that get you the right candidates 
                        when you need them most.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Personalized Support</h3>
                      <p className="text-gray-300">
                        Dedicated client support that understands your unique needs 
                        and culture requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💻</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Digital Excellence</h3>
                      <p className="text-gray-300">
                        We combine clean code, user-first design, and performance to build 
                        products that work beautifully.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                      <p className="text-gray-300">
                        India & global reach with borderless hiring solutions 
                        for boundless potential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-gradient hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
                      <p className="text-gray-300">
                        Cost-effective, scalable models that grow with your business 
                        from startup to enterprise.
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
                  Our <span className="text-gradient">Commitment</span>
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
                      <h3 className="text-xl font-semibold mb-2">Relationship Building</h3>
                      <p className="text-gray-300">
                        We don&apos;t just fill roles — we build lasting relationships with both 
                        clients and candidates for long-term success.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center text-neon-blue text-xl font-bold">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Culture Fit Focus</h3>
                      <p className="text-gray-300">
                        Every candidate is evaluated for skills, long-term compatibility, 
                        and culture fit to ensure Day One contribution.
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
                      <h3 className="text-xl font-semibold mb-2">Digital Innovation</h3>
                      <p className="text-gray-300">
                        We stay ahead of the curve, embracing new technologies and methodologies 
                        to deliver cutting-edge digital solutions.
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
                Ready to <span className="text-gradient">Build</span> Your Dream Team?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you find the right talent and transform your digital presence 
                with solutions that drive real results.
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