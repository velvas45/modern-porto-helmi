import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill?.image).url()}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 filter p-3 group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 h-24 w-24 md:w-32 md:h-32 xl:w-40 p-2 xl:h-40 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <span className="text-sm md:text-xl font-bold text-black opacity-100 text-center">
            {skill.title}
          </span>
          <span className="text-sm md:text-xl font-bold text-black opacity-100">
            {skill.progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
