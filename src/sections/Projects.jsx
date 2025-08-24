import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import ModelViewer from "../components/ModelViewer";

const Projects = () => {
  // Persistent rabbit preview state
  const [showRabbit, setShowRabbit] = useState(false);
  const [rabbitPos, setRabbitPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  return (
    <section
      id="work"
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          id={project.id}
          setPreview={(val) => {
            // Only trigger rabbit for project id 2
            if (project.id === 2 && val) {
              setShowRabbit(true);
            } else {
              setShowRabbit(false);
            }
          }}
          setRabbitPos={setRabbitPos}
        />
      ))}

      {/* Animate rabbits from edges only when showRabbit is true */}
      {/* Show rabbit only when hovering project 2, centered in the box, with auto-rotation */}
        {showRabbit && createPortal(
          <motion.div
            className="fixed z-[9999] pointer-events-none"
            initial={{ top: -200, left: rabbitPos.x, opacity: 0 }}
            animate={{ top: rabbitPos.y + 80, left: rabbitPos.x, opacity: 1 }}
            exit={{ top: rabbitPos.y + 80, opacity: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <ModelViewer glbPath="/assets/projects/Project3dmodel/rabbit1.glb" scale={3.5} initialRotation={Math.PI / 8} />
          </motion.div>,
          document.body
        )}
    </section>
  );
};

export default Projects;