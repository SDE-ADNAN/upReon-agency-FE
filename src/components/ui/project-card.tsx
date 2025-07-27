"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
    technologies: string[];
    category: string;
  };
  variant?: "default" | "featured";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl ${
      variant === "featured" 
        ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-neon-blue/50" 
        : "bg-gray-900/30 border-gray-700 hover:border-gray-600"
    }`}>
      <div className="relative overflow-hidden">
        <div className="aspect-video relative bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-black/50 text-white border-gray-600">
            {project.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs bg-gray-800/50 border-gray-600 text-gray-300">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs bg-gray-800/50 border-gray-600 text-gray-300">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
          >
            <Link href={`/portfolio/${project.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {project.liveUrl && (
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
} 