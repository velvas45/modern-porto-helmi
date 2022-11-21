import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "100%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333] rounded-full md:h-[200px] h-[100px] w-[100px] md:w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333] rounded-full md:h-[300px] md:w-[300px] h-[200px] w-[200px] mt-52" />
      <div className="absolute border border-[#333] rounded-full h-[400px] w-[400px] md:h-[500px] md:w-[500px]  mt-52" />
      <div className="rounded-full border border-[#f7ab0a] opacity-20 h-[500px] w-[500px] md:h-[650px] md:w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333] opacity-20 h-[700px] md:h-[800px] w-[700px] md:w-[800px] absolute mt-52 " />
    </motion.div>
  );
}

export default BackgroundCircles;
