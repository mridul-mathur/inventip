"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Buttons from "../buttons";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform for scaling the black background box
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const backgroundScaleY = useTransform(scrollYProgress, [0, 0.02], [1.07, 1]);

  // Transform for moving and scaling the <h1> elements
  const xFirstText = useTransform(scrollYProgress, [0, 0.5], [0, -350]); // Slide left
  const xSecondText = useTransform(scrollYProgress, [0, 0.5], [0, 350]); // Slide right
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 2]); // Scale up

  return (
    <main
      ref={ref}
      className="z-[-1] h-[250vh] w-screen relative overflow-hidden"
    >
      {/* Animated background box */}
      <motion.div
        style={{ scale: backgroundScale, scaleY: backgroundScaleY }}
        className="bg-black h-[100vh] w-[100vw] fixed top-0 left-0 rounded-[2rem] text-red-400  overflow-visible "
      >
        <div className="flex justify-center items-center h-screen">
          {/* Content container */}
          <div className="flex flex-col justify-center items-center gap-4 h-[50%] w-full z-[3]">
            <div className="flex gap-3 text-red-500">
              {/* First heading */}
              <motion.h1
                style={{ x: xFirstText, scale: textScale }}
                className="text-[5rem] font-bold "
              >
                These are hero
              </motion.h1>
              {/* Second heading */}
              <motion.h1
                style={{ x: xSecondText, scale: textScale }}
                className="text-[5rem] font-bold "
              >
                Line for investiP
              </motion.h1>
            </div>
            <div className="flex gap-5">
              <Buttons color="white">Our Expertise</Buttons>
              <div className="bg-white px-3 py-1 rounded-md">
                <Buttons color="black" >More Insihts</Buttons>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
