
import * as THREE from 'three';
import '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    ambientLight: JSX.IntrinsicElements['ambientLight'];
    directionalLight: JSX.IntrinsicElements['directionalLight'];
    pointLight: JSX.IntrinsicElements['pointLight'];
    mesh: JSX.IntrinsicElements['mesh'];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: React.PropsWithChildren<{
        intensity?: number;
        color?: THREE.ColorRepresentation;
      }>;
      directionalLight: React.PropsWithChildren<{
        position?: [number, number, number];
        intensity?: number;
        color?: THREE.ColorRepresentation;
      }>;
      pointLight: React.PropsWithChildren<{
        position?: [number, number, number];
        intensity?: number;
        color?: THREE.ColorRepresentation;
      }>;
      mesh: React.PropsWithChildren<{
        position?: [number, number, number];
        rotation?: [number, number, number];
      }>;
    }
  }
}
