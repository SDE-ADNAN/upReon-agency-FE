export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest projects and innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-gradient p-6">
            <div className="w-full h-48 bg-gray-800 rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">Project Name</h3>
            <p className="text-gray-400 text-sm">Project description</p>
          </div>
        </div>
      </div>
    </section>
  )
} 