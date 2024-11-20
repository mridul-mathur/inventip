"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";

interface ButtonsProps {
  children: string;
  color: string;
}

const Buttons: React.FC<ButtonsProps> = ({ children, color }) => {
  const iconVariant = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { duration: 0.25, ease: "easeOut" } },
  };
  const text1var = {
    initial: { y: 0 },
    hover: { y: -25, transition: { duration: 0.25, ease: "easeOut" } },
  };
  const text2var = {
    initial: { y: 25 },
    hover: { y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="customButton w-fit flex justify-center items-center gap-3 h-fit overflow-hidden border-none bg-none relative py-1 cursor-pointer"
    >
      <motion.div className="flex-col h-full w-full flex">
        <motion.span style={{ color: color }} variants={text1var}>
          {children}
        </motion.span>
        <motion.span
          style={{ color: color }}
          className="absolute"
          variants={text2var}
        >
          {children}
        </motion.span>
      </motion.div>

      <motion.div variants={iconVariant}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
            fill={color}
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default Buttons;
