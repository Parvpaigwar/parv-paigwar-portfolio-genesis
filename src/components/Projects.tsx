
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isInDevelopment?: boolean;
  categories: string[];
}

const Projects: React.FC = () => {
  const categories = ["All", "Web", "AI", "Full-Stack", "ML"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects: Project[] = [
    {
      title: "NullNix",
      description: "Backend-driven web app to simplify data preprocessing and EDA with features like log transformation, scaling, outlier detection, and visual analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Django REST Framework", "JWT", "PostgreSQL", "React"],
      isInDevelopment: true,
      categories: ["AI", "Full-Stack", "ML"]
    },
    {
      title: "Haki E-Commerce Website",
      description: "Full-stack responsive e-commerce platform with product galleries, real-time pricing, and a clean UI/UX design.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      liveUrl: "https://hakistore.netlify.app/",
      categories: ["Web", "Full-Stack"]
    },
    {
      title: "Spotify Clone",
      description: "Replicated core Spotify functionalities including play, skip, shuffle, repeat, playlist creation, and localStorage support.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://parvspotify.netlify.app/",
      categories: ["Web"]
    },
    {
      title: "Grocery Store Management System",
      description: "Complete system with inventory tracking, order management, and sales analytics built with Flask and MySQL.",
      image: "/lovable-uploads/ddde631d-8267-450e-9935-64c3833d2567.png",
      technologies: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Parvpaigwar/Grocesory-Management-System",
      categories: ["Web", "Full-Stack"]
    },
    {
      title: "House Price Prediction Model",
      description: "Linear regression model for real estate price forecasting with feature engineering, EDA, and model tuning.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      technologies: ["Linear Regression", "Python", "Scikit-learn", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/Parvpaigwar/House-Price-Prediction",
      categories: ["ML"]
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));
    
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my recent work and ongoing projects"
          className="animate-fade-in-up"
        />
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'bg-transparent text-soft-purple hover:bg-soft-purple/10'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              isInDevelopment={project.isInDevelopment}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
