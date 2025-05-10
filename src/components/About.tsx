
import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Database, Server, Cloud, Award, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-dark-bg to-deep-blue/30">
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my background and passions"
          className="animate-fade-in-up"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-gray-300">
              I'm a <span className="text-neon-cyan font-medium">passionate backend developer</span> with expertise 
              in Django REST Framework, PostgreSQL/PostGIS, JWT authentication, and AWS deployment.
            </p>
            
            <p className="text-lg text-gray-300">
              As an <span className="text-neon-cyan font-medium">AI enthusiast</span>, I enjoy building LLM-integrated tools 
              using OpenAI, Gemini, and Ollama with deployment knowledge on GPU and NCP servers.
            </p>
            
            <p className="text-lg text-gray-300">
              I'm currently developing <span className="text-neon-cyan font-medium">NullNix</span>, a one-click data preprocessing 
              tool for Exploratory Data Analysis (EDA) that simplifies the analytics workflow.
            </p>
            
            <p className="text-lg text-gray-300">
              Known for writing <span className="text-neon-cyan font-medium">clean, modular, and scalable code</span>, 
              I love solving backend architecture challenges and continuously learning about Large Language Models.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Server className="text-neon-cyan" size={24} />,
                title: "Backend Dev",
                description: "Django & DRF expert focusing on RESTful APIs and database optimization"
              },
              {
                icon: <Database className="text-neon-cyan" size={24} />,
                title: "Database Design",
                description: "Experience with PostgreSQL, PostGIS, MongoDB and complex data modeling"
              },
              {
                icon: <Brain className="text-neon-cyan" size={24} />,
                title: "AI Integration",
                description: "Building tools with OpenAI, Gemini, and custom LLM implementations"
              },
              {
                icon: <Cloud className="text-neon-cyan" size={24} />,
                title: "Cloud Deployment",
                description: "Deploying and scaling applications on AWS and NCP servers"
              },
              {
                icon: <Code className="text-neon-cyan" size={24} />,
                title: "Clean Code",
                description: "Writing modular, testable, and maintainable software"
              },
              {
                icon: <Award className="text-neon-cyan" size={24} />,
                title: "Problem Solver",
                description: "Strengthened DSA skills using LeetCode"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 transition-all duration-300 hover:border-neon-cyan/30 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-lg bg-deep-blue/50 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-soft-purple text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
