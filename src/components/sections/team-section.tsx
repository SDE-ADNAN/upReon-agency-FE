export function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Meet the <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-xl text-gray-400">The experts behind upReon</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name) => (
            <div key={name} className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-1">{name}</h3>
              <p className="text-gray-400 text-sm">Senior Developer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 