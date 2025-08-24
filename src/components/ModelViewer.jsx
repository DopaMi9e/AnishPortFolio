import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ glbPath }) {
  const { scene } = useGLTF(glbPath);

  return (
    <primitive object={scene} scale={1.5} />
  );
}

const ModelViewer = ({ glbPath }) => {
  return (
    <div className="w-64 h-64 bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
  <ambientLight intensity={2} />
  <directionalLight position={[5, 5, 5]} intensity={2} />
  <directionalLight position={[-5, 5, 5]} intensity={1.5} />
  <pointLight position={[0, 5, 0]} intensity={1.5} />
        <Model glbPath={glbPath} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;