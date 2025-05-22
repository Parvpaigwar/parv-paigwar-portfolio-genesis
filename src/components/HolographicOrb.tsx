
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { AnimatedSphereScene } from './AnimatedSphereScene';

const HolographicOrb: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#64ffda" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0a192f" />
        <pointLight position={[0, 0, 2]} intensity={0.8} color="#64ffda" />
        <AnimatedSphereScene />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HolographicOrb;
