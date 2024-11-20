"use client";

import React, { useRef } from "react";
import { color, motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const s = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const sy = useTransform(scrollYProgress, [0, 0.02], [1.07, 1]);
  return (
    <main
      ref={ref}
      className="z-[-1] h-[250vh] w-screen relative overflow-hidden"
    > 
      <motion.div
        style={{ scale: s, scaleY: sy }}
        className="bg-black h-[100vh] w-[100vw] fixed top-0 left-0 rounded-[2rem]"
      ></motion.div>
    </main>
  );
};

export default Hero;
