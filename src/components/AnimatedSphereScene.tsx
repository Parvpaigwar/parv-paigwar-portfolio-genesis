
import React from 'react';
import { MeshDistortMaterial } from '@react-three/drei';

export const AnimatedSphereScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#64ffda" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0a192f" />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#64ffda" />
      
      <mesh rotation-x={0.2} rotation-y={0.3}>
        <sphereGeometry args={[1, 64, 64]} />
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
      </mesh>
    </>
  );
};
