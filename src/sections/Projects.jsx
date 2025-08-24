import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion } from "motion/react";
import ModelViewer from "../components/ModelViewer";

const Projects = () => {
  // Remove mouse tracking logic
  const [preview, setPreview] = useState(false);

  return (
    <section
      id="work"
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* Animate only one rabbit from the top edge when preview is true */}
      {preview && (
        <motion.div
          initial={{ y: -150, x: window.innerWidth / 2 - 128, opacity: 0 }}
          animate={{ y: window.innerHeight / 2 - 128, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="fixed z-50 pointer-events-none"
          style={{ left: window.innerWidth / 2 - 128 }}
        >
          <ModelViewer glbPath="/assets/projects/Project3dmodel/rabbit1.glb" />
        </motion.div>
      )}
    </section>
  );
};

export default Projects;