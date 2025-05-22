
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedSphereScene } from './AnimatedSphereScene';

const HolographicOrb: React.FC = () => {
  // Create a ref for the container
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 2.5], fov: 50 }}
      >
        <AnimatedSphereScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HolographicOrb;
