import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DotPattern from '../components/DotPattern'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agency - Build Great Products with Global Tech Teams',
  description: 'We help companies build exceptional digital products with our global network of talented developers, designers, and product experts.',
  keywords: 'agency, development, design, tech teams, digital products, web development, mobile apps',
  authors: [{ name: 'Agency Team' }],
  creator: 'Agency',
  publisher: 'Agency',
  openGraph: {
    title: 'Agency - Build Great Products with Global Tech Teams',
    description: 'We help companies build exceptional digital products with our global network of talented developers, designers, and product experts.',
    url: 'https://agency.com',
    siteName: 'Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agency - Build Great Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency - Build Great Products with Global Tech Teams',
    description: 'We help companies build exceptional digital products with our global network of talented developers, designers, and product experts.',
    images: ['/og-image.jpg'],
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
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Magic UI DotPattern with Glow Effect */}
          <DotPattern
            glow={true}
            width={20}
            height={20}
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "opacity-50"
            )}
          />
          
          <div data-scroll-container className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
