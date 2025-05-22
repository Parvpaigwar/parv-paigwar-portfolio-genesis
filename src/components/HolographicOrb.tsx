
import React, { useEffect, useRef } from 'react';

const HolographicOrb: React.FC = () => {
  const particleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create random particles
    if (particleRef.current) {
      const particleContainer = particleRef.current;
      particleContainer.innerHTML = '';
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        particle.className = 'absolute rounded-full bg-neon-cyan';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        particleContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="portal-container w-full h-full flex items-center justify-center">
      {/* Main portal ring */}
      <div className="portal relative w-64 h-64 md:w-80 md:h-80">
        {/* Outer ring - pulsating */}
        <div className="absolute inset-0 rounded-full border-8 border-neon-cyan/30 animate-pulse"></div>
        
        {/* Geometric hexagonal pattern over ring */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDAgTDIwIDEwIEwxMCAyMCBMMCAxMCBaIiBzdHJva2U9InJnYmEoMTAwLCAyNTUsIDIxOCwgMC4yKSIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        {/* Middle layers with gradient swirls */}
        <div className="absolute inset-8 rounded-full bg-deep-blue"></div>
        
        {/* Inner portal energy - swirling */}
        <div className="absolute inset-12 rounded-full bg-gradient-to-br from-neon-cyan/40 to-emerald-600/20 overflow-hidden">
          {/* Animated swirls */}
          <div className="absolute inset-0 rounded-full animate-spin-slow opacity-50">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            <div className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"></div>
          </div>
          <div className="absolute inset-0 rounded-full animate-spin-slower-reverse opacity-60">
            <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-300 to-transparent"></div>
          </div>
          
          {/* Digital circuit patterns */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMCBMNDAgMCBNMCAxMCBMMjAgMTAgTDIwIDMwIEw0MCAzMCBNMCAyMCBMNDAgMjAgTTAgMzAgTDEwIDMwIEwxMCA0MCBNMjAgMCBMMjAgMTAgTTQwIDEwIEw0MCA0MCBNMCA0MCBMNCA0MCIgc3Ryb2tlPSJyZ2JhKDEwMCwgMjU1LCAyMTgsIDAuMikiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-20 animate-pulse"></div>
        </div>

        {/* Center energy core */}
        <div className="absolute inset-[30%] rounded-full bg-neon-cyan/50 animate-pulse-slow backdrop-blur-md"></div>
        
        {/* Energy flares */}
        <div className="absolute inset-4 rounded-full">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-16 bg-teal-400/30 blur-lg animate-flicker"></div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-16 bg-emerald-400/30 blur-lg animate-flicker-delay"></div>
          <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-16 h-10 bg-neon-cyan/30 blur-lg animate-flicker-delay-2"></div>
          <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-16 h-10 bg-teal-400/30 blur-lg animate-flicker"></div>
        </div>
        
        {/* Energy bolts */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-neon-cyan/70 animate-energy-bolt"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-neon-cyan/70 animate-energy-bolt-delay"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-8 bg-neon-cyan/70 animate-energy-bolt-delay-2"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] w-8 bg-neon-cyan/70 animate-energy-bolt"></div>
        </div>
        
        {/* Floating particles */}
        <div ref={particleRef} className="absolute inset-0 overflow-hidden rounded-full"></div>
        
        {/* Overlay effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-deep-blue/10 via-transparent to-neon-cyan/10 backdrop-blur-[1px]"></div>
        
        {/* Glow effect */}
        <div className="absolute -inset-4 rounded-full bg-neon-cyan/5 blur-xl animate-glow"></div>
      </div>
    </div>
  );
};

export default HolographicOrb;
