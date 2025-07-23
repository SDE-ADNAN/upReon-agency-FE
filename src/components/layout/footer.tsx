import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'upReon',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/#contact' },
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'UI/UX Design', href: '/services/design' },
        { name: 'DevOps', href: '/services/devops' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <div className="text-2xl font-display font-bold">
                  <span className="text-gradient">up</span>
                  <span className="text-white">Reon</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming digital visions into exceptional realities. 
                Premium development, cutting-edge design, unparalleled results.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/upreon" 
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  𝕏
                </a>
                <a 
                  href="https://linkedin.com/company/upreon" 
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  in
                </a>
                <a 
                  href="https://github.com/upreon" 
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  ⚡
                </a>
              </div>
            </div>

            {/* Footer sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} upReon. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link 
                href="/cookie-policy" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookies
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 