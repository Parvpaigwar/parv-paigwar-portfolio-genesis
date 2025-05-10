
import React from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle2, CalendarDays, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  badges?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Backend Developer",
      company: "Engineer Philosophy Web Services Pvt. Ltd.",
      period: "Current",
      description: [
        "Contributing to production-level projects",
        "Gained exposure to AI systems and integration",
        "Optimizing database queries and API response times",
        "Implementing secure user authentication flows"
      ],
      badges: ["Full Time", "Current"]
    },
    {
      title: "Python Backend Developer Intern",
      company: "Engineer Philosophy Web Services Pvt. Ltd.",
      period: "3 months",
      description: [
        "Built scalable REST APIs using Django REST Framework",
        "Handled complex PostgreSQL + PostGIS databases",
        "Implemented JWT Auth, Custom Models/Views with Role-Based Access",
        "Deployed applications on AWS with error logging integration",
        "Collaborated with frontend teams for API integration",
        "Created comprehensive API documentation and test cases"
      ],
      badges: ["Internship"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-deep-blue/30 to-dark-bg">
      <div className="container mx-auto">
        <SectionTitle 
          title="Work Experience" 
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
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
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
