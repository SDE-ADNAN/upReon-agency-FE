import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { GSAPProvider } from '@/components/providers/gsap-provider'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@/components/analytics'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollProgress } from '@/components/ui/scroll-progress'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://upreon.com'),
  title: {
    default: 'upReon - Digital Excellence Redefined | Premium Digital Agency',
    template: '%s | upReon'
  },
  description: 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation. Web development, mobile apps, UI/UX design.',
  keywords: [
    'digital agency',
    'web development',
    'mobile app development',
    'UI/UX design',
    'React',
    'Next.js',
    'TypeScript',
    'upReon',
    'digital excellence',
    'premium digital experiences',
    'cutting-edge technology',
    'design innovation'
  ],
  authors: [{ name: 'upReon Team' }],
  creator: 'upReon',
  publisher: 'upReon',
  
  // Open Graph tags for Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://upreon.com',
    title: 'upReon - Digital Excellence Redefined',
    description: 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.',
    siteName: 'upReon',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'upReon - Digital Excellence Redefined - Premium Digital Agency',
        type: 'image/svg+xml',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'upReon - Digital Excellence Redefined - Premium Digital Agency',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: 'upReon - Digital Excellence Redefined',
    description: 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.',
    images: ['/og-image.svg'],
    creator: '@upreon',
    site: '@upreon',
  },
  
  // Additional social media tags
  other: {
    // WhatsApp specific
    'whatsapp:title': 'upReon - Digital Excellence Redefined',
    'whatsapp:description': 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.',
    'whatsapp:image': 'https://upreon.com/og-image.svg',
    
    // LinkedIn specific
    'linkedin:title': 'upReon - Digital Excellence Redefined',
    'linkedin:description': 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.',
    'linkedin:image': 'https://upreon.com/og-image.svg',
    
    // Instagram (uses Open Graph)
    'instagram:title': 'upReon - Digital Excellence Redefined',
    'instagram:description': 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.',
    'instagram:image': 'https://upreon.com/og-image.svg',
    
    // YouTube (uses Open Graph)
    'youtube:title': 'upReon - Digital Excellence Redefined',
    'youtube:description': 'We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.',
    'youtube:image': 'https://upreon.com/og-image.svg',
    
    // Additional meta tags for better SEO and social sharing
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-title': 'upReon',
    'application-name': 'upReon',
    
    // Structured data for rich snippets
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "upReon",
      "url": "https://upreon.com",
      "logo": "https://upreon.com/logo.png",
      "description": "We craft premium digital experiences that transform businesses and captivate audiences through cutting-edge technology and design innovation.",
      "sameAs": [
        "https://twitter.com/upreon",
        "https://linkedin.com/company/upreon",
        "https://instagram.com/upreon"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://upreon.com/contact"
      }
    })
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Viewport meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Apple specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="upReon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Additional social media meta tags for better compatibility */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:alt" content="upReon - Digital Excellence Redefined - Premium Digital Agency" />
        
        {/* WhatsApp specific */}
        <meta property="og:image" content="https://upreon.com/og-image.svg" />
        <meta property="og:image:secure_url" content="https://upreon.com/og-image.svg" />
        
        {/* LinkedIn specific */}
        <meta property="og:image" content="https://upreon.com/og-image.svg" />
        
        {/* Twitter specific */}
        <meta name="twitter:image:alt" content="upReon - Digital Excellence Redefined - Premium Digital Agency" />
        
        {/* Additional SEO meta tags */}
        <meta name="application-name" content="upReon" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://upreon.com" />
      </head>
      
      <body className="font-sans antialiased min-h-screen bg-black text-white overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GSAPProvider>
            {/* Scroll Progress Indicator */}
            <ScrollProgress />
            
            {/* Header */}
            <Header />
            
            {/* Main content */}
            <div className="relative flex min-h-screen flex-col">
              <main className="flex-1">
                {children}
              </main>
            </div>
            
            {/* Footer */}
            <Footer />
            
            {/* Toast notifications */}
            <Toaster />
            
            {/* Analytics */}
            <Analytics />
            
            {/* GSAP ScrollTrigger refresh on route change */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  if (typeof window !== 'undefined' && window.ScrollTrigger) {
                    window.ScrollTrigger.refresh();
                  }
                `,
              }}
            />
          </GSAPProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
