
import React from 'react';

const HolographicOrb: React.FC = () => {
  return (
    <div className="holographic-orb-container w-full h-full flex items-center justify-center">
      <div className="holographic-orb relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-neon-cyan/30 animate-pulse"></div>
        <div className="absolute inset-2 rounded-full bg-deep-blue"></div>
        <div className="absolute inset-4 rounded-full bg-neon-cyan/10 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/20 to-deep-blue/70"></div>
        <div className="absolute inset-0 rounded-full animate-spin-slow">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent"></div>
          <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-neon-cyan/70 to-transparent"></div>
        </div>
        <div className="absolute inset-0 rounded-full animate-spin-slow-reverse">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
        </div>
        <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm"></div>
        <div className="absolute w-full h-full rounded-full animate-glow">
          <div className="absolute top-8 right-8 w-6 h-6 rounded-full bg-neon-cyan/50 blur-md"></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-neon-cyan/50 blur-md"></div>
        </div>
      </div>
    </div>
  );
};

export default HolographicOrb;
