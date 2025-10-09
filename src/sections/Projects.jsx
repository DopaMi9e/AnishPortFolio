import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../components/Project";
import { myProjects, ongoingProjects } from "../constants";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [showOngoing, setShowOngoing] = useState(false);

  const projectsToShow = showOngoing ? ongoingProjects : myProjects;

  return (
    <section id="work" className="relative section-spacing">
      <h2 className="text-3xl font-bold text-center text-white tracking-wide">
        {showOngoing ? "Ongoing Projects" : "My Selected Projects"}
      </h2>

      <div className="bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mt-6 h-[2px] w-full" />

      {/* Toggle Switch */}
      <div className="flex justify-center mt-8">
        <div className="relative bg-gray-800/60 rounded-full flex p-1 w-60 cursor-pointer">
          {/* Animated background */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`absolute top-1 bottom-1 left-1 right-1 rounded-full bg-indigo-600/70 ${
              showOngoing ? "translate-x-[115px]" : "translate-x-0"
            } w-[calc(50%-4px)]`}
          />
          <button
            className={`relative z-10 flex-1 text-sm font-medium text-white transition ${
              !showOngoing ? "opacity-100" : "opacity-70"
            }`}
            onClick={() => setShowOngoing(false)}
          >
            Selected
          </button>
          <button
            className={`relative z-10 flex-1 text-sm font-medium text-white transition ${
              showOngoing ? "opacity-100" : "opacity-70"
            }`}
            onClick={() => setShowOngoing(true)}
          >
            Ongoing
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="relative mt-10 space-y-10">
        <AnimatePresence mode="wait">
          {projectsToShow.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Project
                {...project}
                preview={preview}
                setPreview={setPreview}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
