import { motion } from "motion/react";
import { FiGithub, FiDownload } from "react-icons/fi"; // react-icons
import { TbExternalLink } from "react-icons/tb";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  video,
  tags,
  href,
  apkLink,
  closeModal,
}) => {
  console.log("Video prop in ProjectDetails:", video);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-4xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 text-white"
        >
          ✕
        </button>

        {/* Flex container for video + content */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
          {/* Video/Image Left */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-3">
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="rounded-xl object-contain max-h-[350px] max-w-[350px]"
              />
            ) : (
              <img
                src={image}
                alt={title}
                className="rounded-xl object-contain max-h-[300px] max-w-[250px]"
              />
            )}
          </div>


          {/* Text/Details Right */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
              <p className="mb-3 font-normal text-neutral-300">{description}</p>
              {subDescription.map((subDesc, index) => (
                <p key={index} className="mb-2 font-normal text-neutral-400">
                  {subDesc}
                </p>
              ))}
            </div>

            {/* Tags + Buttons */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <span key={tag.id} className="flex items-center gap-2">
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className={`w-10 h-10 ${tag.name === "AR Foundation" ||tag.name === "Oculus"   ? "filter invert brightness-0" : ""
                        }`}
                    />
                  </span>
                ))}

              </div>

              <div className="flex items-center gap-4">
                {/* Source Code */}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center cursor-pointer text-white"
                >
                  <FiGithub size={22} />
                  <span className="absolute bottom-full mb-2 hidden rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
                    Source Code
                  </span>
                </a>

                <a
                  href={apkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center cursor-pointer text-white"
                >
                  <TbExternalLink size={22} />
                  <span className="absolute bottom-full mb-2 hidden rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
                    Itch Link
                  </span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
