import { ProjectCard } from "@/components/ui/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function PortfolioSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-display font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest projects and innovations that drive business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              variant="featured"
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/portfolio" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
          >
            View All Projects
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 