import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-[320px] md:w-[500px] snap-center bg-[#292929] px-5 py-2 md:px-10 md:py-4 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-x-auto ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage)?.url()}
      />
      <div className="flex flex-col gap-x-8 gap-y-1 md:gap-y-4 px-4 md:px-0">
        <h4 className="text-xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <span className="font-bold text:lg lg:text-2xl mt-1">
          {experience?.company}
        </span>
        <div className="flex items-center gap-4 flex-wrap max-w-md md:max-w-xl">
          {experience?.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-8 w-8 rounded-full place-items-center"
              src={urlFor(tech?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase mt-2 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll h-24 md:h-32 lg:h-50 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience?.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
