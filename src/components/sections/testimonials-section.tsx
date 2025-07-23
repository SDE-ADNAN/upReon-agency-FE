export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400">What our clients say about us</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 text-center">
            <p className="text-lg text-gray-300 mb-6 italic">
              "upReon transformed our digital presence completely. Their expertise and attention to detail is unmatched."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full" />
              <div>
                <div className="font-semibold">Sarah Wilson</div>
                <div className="text-sm text-gray-400">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 