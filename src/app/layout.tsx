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
  title: {
    default: 'upReon - Premium Digital Agency',
    template: '%s | upReon'
  },
  description: 'upReon delivers cutting-edge digital solutions, web development, mobile apps, and UI/UX design. Transform your digital presence with our expert team.',
  keywords: [
    'digital agency',
    'web development',
    'mobile app development',
    'UI/UX design',
    'React',
    'Next.js',
    'TypeScript',
    'upReon'
  ],
  authors: [{ name: 'upReon Team' }],
  creator: 'upReon',
  publisher: 'upReon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://upreon.com',
    title: 'upReon - Premium Digital Agency',
    description: 'Transform your digital presence with cutting-edge web development, mobile apps, and design solutions.',
    siteName: 'upReon',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'upReon - Premium Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'upReon - Premium Digital Agency',
    description: 'Transform your digital presence with cutting-edge solutions.',
    images: ['/og-image.png'],
    creator: '@upreon',
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
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Viewport meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        
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
