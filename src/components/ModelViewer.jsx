
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ glbPath, scale = 7 }) {
  const { scene } = useGLTF(glbPath);
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // smooth auto-rotate
    }
  });
  return (
    <primitive object={scene} scale={scale} ref={ref} />
  );
}

const ModelViewer = ({ glbPath, scale }) => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={1.5} />
      <pointLight position={[0, 5, 0]} intensity={1.5} />
      <Model glbPath={glbPath || "/assets/projects/Project3dmodel/rabbit1.glb"} scale={scale} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelViewer;