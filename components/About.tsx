import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import AboutPic from "../assets/images/profile-about.jpeg";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="flex-shrink-0 mt-24"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className="-mb-20 md:mb-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          src={urlFor(pageInfo?.profilePic).url()}
          width={500}
          height={600}
          alt="image about"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 mt-12 md:mt-0">
        <h4 className="text-xl md:text-4xl font-semibold mb-4">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <span className="text-md md:text-base text-justify">
          {pageInfo?.backgroundInformation}
        </span>
      </div>
    </motion.div>
  );
}

export default About;
