
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Github, Linkedin, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-dark-bg to-deep-blue/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-soft-purple/5 rounded-full blur-[80px] -z-10" />
      
      <div className="container mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Feel free to reach out!"
          align="center"
          className="animate-fade-in-up"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
            <p className="text-soft-purple">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex items-center gap-3 text-soft-purple">
              <Mail size={20} className="text-neon-cyan" />
              <a 
                href="mailto:parvpaigwar@gmail.com" 
                className="hover:text-neon-cyan transition-colors duration-300"
              >
                parvpaigwar@gmail.com
              </a>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/Parvpaigwar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-deep-blue/80 flex items-center justify-center text-soft-purple hover:text-neon-cyan hover:border-neon-cyan border border-transparent transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/parv-paigwar-0a68ab255" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-deep-blue/80 flex items-center justify-center text-soft-purple hover:text-neon-cyan hover:border-neon-cyan border border-transparent transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="glass-card p-6 mt-8">
              <h4 className="text-lg font-semibold text-white mb-3">Certifications</h4>
              <ul className="space-y-2 text-soft-purple">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>C++ with DSA (Physics Wallah – Decode Batch)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Machine Learning Course (Internshala)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Solved questions consistently to strive for perfection on LeetCode</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in-left">
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-soft-purple">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-deep-blue/30 border-soft-purple/20 focus:border-neon-cyan focus-visible:ring-neon-cyan/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-soft-purple">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-deep-blue/30 border-soft-purple/20 focus:border-neon-cyan focus-visible:ring-neon-cyan/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-soft-purple">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="min-h-[120px] bg-deep-blue/30 border-soft-purple/20 focus:border-neon-cyan focus-visible:ring-neon-cyan/20"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-deep-blue font-medium transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
