
import React from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from './Typewriter';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-grid-pattern bg-[length:50px_50px]" />
      
      <div className="container mx-auto pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-neon-cyan font-mono">Hi, I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">
              Parv Paigwar <span className="inline-block animate-float">👋</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-soft-purple">
              Backend Developer | AI Explorer | Django + DRF Expert | LLM Tools Practitioner
            </h2>
            
            <div className="h-12 font-mono text-neon-cyan text-lg">
              <Typewriter 
                texts={[
                  "Clean Code", 
                  "Secure APIs", 
                  "Scalable Systems", 
                  "AI Integration"
                ]}
              />
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 pt-6">
              <a 
                href="https://drive.google.com/file/d/1XyQ_3xWqA8FUqQZR-0QrqCtt4mxKHjFr/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group"
              >
                <Button variant="outline" className="bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 group-hover:animate-glow flex gap-2">
                  <Download size={16} />
                  <span>Download Resume</span>
                </Button>
              </a>
              
              <a href="https://github.com/Parvpaigwar" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="bg-transparent border border-soft-purple text-soft-purple hover:bg-soft-purple/10 flex gap-2">
                  <Github size={16} />
                  <span>Visit GitHub</span>
                </Button>
              </a>
              
              <a href="https://www.linkedin.com/in/parv-paigwar-0a68ab255" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="bg-transparent border border-soft-purple text-soft-purple hover:bg-soft-purple/10 flex gap-2">
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </Button>
              </a>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
              <a href="#about" className="text-neon-cyan hover:text-white transition-colors">
                <ArrowDown />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-cyan/30 transition-all duration-300 hover:border-neon-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 to-neon-cyan/30 backdrop-blur-sm transition-all duration-300 hover:opacity-0"></div>
              <div className="w-full h-full bg-gradient-to-r from-deep-blue to-neon-cyan/20 bg-cover bg-center transition-transform duration-500 hover:scale-105"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
