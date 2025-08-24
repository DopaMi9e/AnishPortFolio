import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  return (
    <section id="work" className="relative section-spacing">
      <h2 className="text-3xl font-bold text-center text-white tracking-wide">
        My Selected Projects
      </h2>
      <div className="bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mt-6 h-[2px] w-full" />

      <div className="relative mt-10 space-y-10">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            {...project}
            preview={preview}
            setPreview={setPreview}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
