
import React from 'react';
import SectionTitle from './SectionTitle';
import { 
  Code, Database, Server, Globe, GitBranch, Terminal, 
  MonitorSmartphone, ChartPie, BrainCircuit
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Web Frameworks",
      icon: <Globe size={24} />,
      skills: ["Django", "Flask", "Django REST Framework", "JWT"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "PostGIS"]
    },
    {
      title: "Tools",
      icon: <Terminal size={24} />,
      skills: ["Git", "GitHub", "Postman", "Jupyter", "VS Code", "Power BI", "Tableau"]
    },
    {
      title: "Data Science & ML",
      icon: <BrainCircuit size={24} />,
      skills: [
        "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", 
        "Linear Regression", "Feature Engineering", "EDA", 
        "Model Evaluation Metrics", "Overfitting & Underfitting", 
        "Regularization", "Gradient Descent"
      ]
    },
    {
      title: "Platforms",
      icon: <Server size={24} />,
      skills: ["AWS", "Netlify", "Google Colab", "NCP servers"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 relative bg-dark-bg">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      
      <div className="container mx-auto">
        <SectionTitle 
          title="Skills & Technologies" 
          align="center"
          subtitle="My technical toolkit for building powerful applications"
          className="animate-fade-in-up"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((category, catIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 animate-fade-in transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-md bg-neon-cyan/10 flex items-center justify-center mr-3">
                  <span className="text-neon-cyan">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-deep-blue/80 text-soft-purple text-sm rounded-full border border-neon-cyan/20 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated skill cloud (simplified version) */}
        <div className="mt-16 p-8 glass-card rounded-xl relative overflow-hidden">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-white">Technologies I'm currently exploring</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "LangChain", "LlamaIndex", "PyTorch", "TensorFlow", 
              "Kubernetes", "Docker", "FastAPI", "GraphQL",
              "Next.js", "React", "TypeScript", "Tailwind CSS"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-deep-blue/50 text-neon-cyan rounded-lg animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0.7 + Math.random() * 0.3
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
