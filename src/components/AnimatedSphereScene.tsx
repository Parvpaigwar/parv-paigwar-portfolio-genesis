
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const AnimatedSphereScene: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Gentle floating animation
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      
      // Slow rotation
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef}>
      <MeshDistortMaterial 
        color="#64ffda"
        attach="material" 
        distort={0.4}
        speed={2} 
        roughness={0.2}
        metalness={0.8}
        emissive="#0a192f"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
};
