import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  apkLink,
  image,
  video,
  linkedin,
  tags,
  preview,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-700/50 bg-neutral-800/40 px-10 py-10 shadow-md transition hover:shadow-xl hover:bg-neutral-800/70"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Left Side - Title & Tags */}
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side - Preview + Button */}
        <div className="flex items-center gap-4">
          {/* Animated Preview Image */}
          {preview === image && (
            <div className="w-[120px] aspect-[3/2] rounded-lg shadow-lg">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-contain"
  />
</div>

          )}

          <button
            onClick={() => setIsHidden(true)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center gap-2 hover:from-indigo-500 hover:to-purple-500 transition"
          >
            Read More
            <img src="assets/arrow-right.svg" className="w-4" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-600/50 to-transparent mt-4" />

      {/* Modal / Details */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          video={video}
          linkedin={linkedin}
          tags={tags}
          href={href}
          apkLink={apkLink}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
