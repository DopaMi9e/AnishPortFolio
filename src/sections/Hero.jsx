import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { FaFolderOpen } from "react-icons/fa";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
        {/* <Button */}

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ zIndex: 10 }}
        >
          <button
            className="nav-link flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full shadow-md hover:scale-105 transition-transform"
            onClick={() => handleScroll("work")}
          >
            <FaFolderOpen className="text-lg" />
            View Portfolio
          </button>
        </div>

      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
