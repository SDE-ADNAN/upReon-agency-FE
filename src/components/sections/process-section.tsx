export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-gray-400">How we bring your vision to life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {['Discovery', 'Design', 'Development', 'Delivery'].map((step, index) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step}</h3>
              <p className="text-gray-400 text-sm">Process description</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 