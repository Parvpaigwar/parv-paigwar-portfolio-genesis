
import React from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle2, CalendarDays, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  icon: React.ReactNode;
  company: string;
  period: string;
  location?: string;
  description: string[];
  badges?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Python Backend Developer",
      icon: <span className="text-xl">💼</span>,
      company: "Engineer Philosophy Web Services Pvt. Ltd.",
      period: "May 2025 – Present",
      location: "📍",
      description: [
        "Leading backend development for a real-world web application, contributing significantly to architecture, security, and performance.",
        "Refactored a poorly written legacy codebase and rebuilt it cleanly from scratch, resulting in a drastic improvement in server stability and efficiency.",
        "Reduced server load and resolved frontend integration issues by restructuring the backend logic with optimized API flows.",
        "Introduced new features and functionality, increasing user satisfaction and improving product performance, which directly impacted sales.",
        "Integrated scalable database models using PostgreSQL + PostGIS and deployed services using AWS.",
        "Collaborated with frontend teams to deliver seamless API communication and user experience.",
        "Integrated LLM tools including LLaMA, Gemini, and OpenAI for AI-powered capabilities."
      ],
      badges: ["Full Time", "Current"]
    },
    {
      title: "Python Backend Developer Intern",
      icon: <span className="text-xl">🧪</span>,
      company: "Engineer Philosophy Web Services Pvt. Ltd.",
      period: "Feb 2025 – Apr 2025",
      location: "📍",
      description: [
        "Independently developed a backend system from scratch under senior mentorship.",
        "Cleaned up messy and confusing code, building a fresh, maintainable structure that improved server-side performance.",
        "Handled complex PostgreSQL + PostGIS integration, API design, and testing.",
        "Developed JWT Auth flows, custom model serializers, and modular codebases for maintainability.",
        "Built foundational backend features that enabled frontend teams to integrate without errors or bottlenecks."
      ],
      badges: ["Internship"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-deep-blue/30 to-dark-bg">
      <div className="container mx-auto">
        <SectionTitle 
          title="🧑‍💻 Experience" 
          subtitle="My professional journey so far"
          className="animate-fade-in-up"
        />
        
        <div className="relative ml-4">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-cyan/50 to-neon-cyan/5"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 animate-fade-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full border-2 border-neon-cyan bg-dark-bg"></div>
              
              <div className="glass-card p-6 md:p-8 transition-all duration-300 hover:border-neon-cyan/30">
                <div className="flex flex-wrap gap-2 justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {exp.icon} {exp.title}
                  </h3>
                  <div className="flex gap-2">
                    {exp.badges?.map((badge) => (
                      <span 
                        key={badge}
                        className={`px-3 py-1 text-xs rounded-full ${
                          badge === 'Current' 
                            ? 'bg-neon-cyan/20 text-neon-cyan' 
                            : 'bg-soft-purple/20 text-soft-purple'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 items-center text-soft-purple mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="text-neon-cyan mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
