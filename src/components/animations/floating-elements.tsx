export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-green/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-neon-blue/20 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-neon-pink/20 rounded-full animate-float delay-2000" />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-neon-green/20 rounded-full animate-float delay-500" />
    </div>
  )
} 