
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
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

const HolographicOrb: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#64ffda" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0a192f" />
        <pointLight position={[0, 0, 2]} intensity={0.8} color="#64ffda" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HolographicOrb;
