import { ScrollProgressTest } from '@/components/ui/scroll-progress-test'

export default function TestScrollPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Scroll Progress Test</h1>
      
      {/* Add lots of content to test scrolling */}
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="mb-16 p-8 bg-gray-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
          <p className="text-gray-300 mb-4">
            This is test content to ensure there&apos;s enough scrolling to test the scroll progress bar.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-300">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur.
          </p>
        </div>
      ))}
      
      <div className="h-32 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
        <p className="text-black font-bold text-xl">End of Test Content</p>
      </div>
      
      {/* Debug component */}
      <ScrollProgressTest />
    </div>
  )
} 