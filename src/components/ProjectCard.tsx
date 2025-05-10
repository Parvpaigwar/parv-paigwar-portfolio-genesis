
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isInDevelopment?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  isInDevelopment = false,
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group transition-all duration-500 hover:border-neon-cyan/30",
        className
      )}
      style={style}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg/90 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${image})` }}
          />
          
          {isInDevelopment && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-neon-cyan/20 backdrop-blur-sm text-neon-cyan text-xs font-medium rounded-full z-20">
              In Development
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-soft-purple mb-4 text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-deep-blue/80 text-soft-purple text-xs rounded-md border border-neon-cyan/10"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soft-purple hover:text-neon-cyan transition-colors duration-300 flex items-center gap-1 text-sm"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-soft-purple hover:text-neon-cyan transition-colors duration-300 flex items-center gap-1 text-sm"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
