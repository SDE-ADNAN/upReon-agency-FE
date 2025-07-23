export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            What We <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service cards will be implemented */}
          <div className="card-neon p-8">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-400">Modern, scalable web applications</p>
          </div>
          <div className="card-neon p-8">
            <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
            <p className="text-gray-400">Native and cross-platform solutions</p>
          </div>
          <div className="card-neon p-8">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-400">Beautiful, intuitive user experiences</p>
          </div>
        </div>
      </div>
    </section>
  )
} 