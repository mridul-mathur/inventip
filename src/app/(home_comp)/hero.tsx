// "use client";

// import React, { useRef } from "react";
// import { color, motion, useScroll, useTransform } from "framer-motion";

// const Hero = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const s = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
//   const sy = useTransform(scrollYProgress, [0, 0.02], [1.07, 1]);
//   return (
//     <main
//       ref={ref}
//       className="z-[-1] h-[250vh] w-screen relative overflow-hidden"
//     >
//       <motion.div
//         style={{ scale: s, scaleY: sy }}
//         className="bg-black h-[100vh] w-[100vw] fixed top-0 left-0 rounded-[2rem] text-white mix-blend-difference overflow-visible "
//       >
//         <div className="flex justify-center items-center h-screen ">
//           <div className="flex ">
//             <h1 className="text-max">these are hero </h1>
//             <h1 className="text-max">line for investiP</h1>
//           </div>
//         </div>
//       </motion.div>
//     </main>
//   );
// };

// export default Hero;

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform for scaling the background
  const s = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const sy = useTransform(scrollYProgress, [0, 0.02], [1.07, 1]);

  // Transform for moving the first and second <h1> elements in opposite directions
  const xFirstText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xSecondText = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main
      ref={ref}
      className="z-[-1] h-[250vh] w-screen relative overflow-hidden"
    >
      <motion.div
        style={{ scale: s, scaleY: sy }}
        className="bg-black h-[100vh] w-[100vw] fixed top-0 left-0 rounded-[2rem] text-white mix-blend-difference overflow-visible"
      >
        <div className="flex justify-center items-center h-screen border">
          <div className="flex  justify-center items-center gap-2 border h-[50%] w-[80%] ">
            <div className="flex">
              <motion.h1
                style={{ x: xFirstText }}
                className="text-[clamp(500rem, 100vw, 100rem)]"
              >
                These are hero
              </motion.h1>
              <motion.h1
                style={{ x: xSecondText }}
                className="text-[clamp(500rem, 100vw, 100rem)]"
              >
                Line for investiP
              </motion.h1>
            </div>

          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
