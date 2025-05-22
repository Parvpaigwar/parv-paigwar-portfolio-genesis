
// This file makes TypeScript recognize react-three-fiber's augmentation of THREE
import * as THREE from 'three';
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}

// When extending the THREE namespace with custom types
declare module 'three' {
  // You can extend THREE here if needed
}
