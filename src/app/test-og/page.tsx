import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test OG Tags',
  description: 'Testing Open Graph tags for social media previews',
  openGraph: {
    title: 'Test OG Tags - upReon',
    description: 'Testing Open Graph tags for social media previews',
    images: ['/og-image.svg'],
  },
}

export default function TestOGPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Open Graph Tags Test</h1>
        <p className="text-lg mb-8">This page is for testing social media previews</p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Test Links:</h2>
          <div className="space-y-2">
            <a 
              href="https://developers.facebook.com/tools/debug/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300"
            >
              Facebook Debugger
            </a>
            <a 
              href="https://cards-dev.twitter.com/validator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300"
            >
              Twitter Card Validator
            </a>
            <a 
              href="https://www.linkedin.com/post-inspector/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300"
            >
              LinkedIn Post Inspector
            </a>
            <a 
              href="https://developers.google.com/search/docs/appearance/structured-data/testing-tool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300"
            >
              Google Rich Results Test
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 