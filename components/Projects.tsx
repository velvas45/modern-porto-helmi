import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <div
              key={idx}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt=""
                className="h-[150px] md:h-[250px]"
              />
              <div className="space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {idx + 1} of {projects.length}
                  </span>{" "}
                  {project?.title}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      className="h-5 w-5"
                      key={technology._id}
                      src={urlFor(technology?.image).url()}
                      alt=""
                    />
                  ))}
                </div>

                <p className="text-[10px] md:text-[15px] text-center">
                  {project?.summary}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl text-gray-500 mx-auto">
            {" "}
            No Project Yet...
          </p>
        )}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
