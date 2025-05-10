
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-soft-purple text-sm">
            © 2025 Parv Paigwar. Built with 💻, ⚙️, and a lot of ☕.
          </p>
          <p className="text-soft-purple/60 text-xs mt-1">
            Built with React + Tailwind + TypeScript
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <a 
            href="#home" 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-deep-blue/80 text-soft-purple hover:text-neon-cyan hover:bg-deep-blue transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
