
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Parvpaigwar', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/parvpaigwar', icon: Linkedin },
    { name: 'LeetCode', href: 'https://leetcode.com/Parvpaigwar/', icon: Code },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        scrolled ? 'glass bg-dark-bg/80 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-neon-cyan flex items-center justify-center text-neon-cyan font-bold text-xl">P</div>
          <span className="font-bold text-xl hidden sm:block text-gradient">Parv Paigwar</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:text-neon-cyan relative group ${scrolled ? 'text-gray-300' : 'text-white'}`}
            >
              <span className="opacity-70 group-hover:opacity-100">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          ))}
          <div className="ml-4 flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white hover:text-neon-cyan focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed top-0 right-0 h-screen w-full md:w-[300px] glass-card bg-dark-bg/90 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-neon-cyan focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-6 pt-6 pb-8 flex flex-col h-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-neon-cyan py-2 text-lg font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-6 flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
