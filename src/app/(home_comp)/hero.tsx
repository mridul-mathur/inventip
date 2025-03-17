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
  const cornerRadius = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0rem", "1rem"]
  );
  const backgroundScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.75]);
  const textXFirst = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textXSecond = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <main ref={ref} className="relative h-[300vh] w-screen">
      <section className="w-screen h-screen sticky top-0 flex justify-center items-center bg-transparent">
        <motion.div className="relative w-full h-screen">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              scale: backgroundScale,
            }}
          >
            <motion.img
              src="/images/img.png"
              alt="Background"
              className="w-full h-full object-cover"
              style={{ borderRadius: cornerRadius }}
            />
          </motion.div>
          <motion.div className="z-[1] absolute w-screen inset-0 flex flex-col justify-center items-center text-center gap-6">
            <motion.div className="flex gap-4 text-max font-bold">
              <motion.h1
                style={{ x: textXFirst }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="mix-blend-difference"
              >
                These are Hero
              </motion.h1>
              <motion.h1
                style={{ x: textXSecond }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="mix-blend-difference"
              >
                Lines for InventIP
              </motion.h1>
            </motion.div>
            <motion.div className="flex gap-6 justify-center items-center">
              <Buttons
                color="dark"
                arrow={true}
                underline={true}
                onClick={() => (window.location.href = "/#expertise")}
              >
                Our Expertise
              </Buttons>
              <Buttons
                color="dark"
                arrow={true}
                underline={true}
                onClick={() => (window.location.href = "/insights")}
              >
                More Insights
              </Buttons>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
