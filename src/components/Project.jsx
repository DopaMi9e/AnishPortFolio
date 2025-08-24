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
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={(e) => {
          if (typeof setPreview === 'function' && typeof tags !== 'undefined') {
            if (typeof id !== 'undefined' ? id === 2 : title.includes('RabitHuntAR')) {
              setPreview(true);
              if (typeof setRabbitPos === 'function') {
                setRabbitPos({ x: e.clientX, y: e.clientY });
              }
            } else {
              setPreview(null);
            }
          }
        }}
        onMouseMove={(e) => {
          if (typeof setRabbitPos === 'function' && (typeof id !== 'undefined' ? id === 2 : title.includes('RabitHuntAR'))) {
            setRabbitPos({ x: e.clientX, y: e.clientY });
          }
        }}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          video={video}
          tags={tags}
          href={href}
          apkLink={apkLink}
          closeModal={() => setIsHidden(false)} // you didn’t define closeModal, so I fixed it
        />
      )
      }


    </>
  );
};

export default Project;
