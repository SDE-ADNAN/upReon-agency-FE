import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Calendar, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - upReon Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container-custom py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge variant="secondary" className="mb-4 bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              {project.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-400">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Completed {project.completionDate}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Users className="mr-2 h-4 w-4" />
                <span>Client: {project.client}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <Button asChild className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:shadow-lg hover:shadow-neon-blue/25">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-neon-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">{result.value}</div>
                  <div className="text-gray-400 text-sm">{result.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-300 px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Highlights */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Key Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Challenges Faced</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solutions */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Our Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:shadow-lg hover:shadow-neon-blue/25">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Link href="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 