"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ButtonsProps {
  children: React.ReactNode;
  color: "dark" | "light";
  arrow?: boolean;
  underline?: boolean;
  textGrad?: boolean;
  onClick?: () => void;
}

const Buttons = ({
  children,
  color,
  arrow,
  underline,
  onClick,
  textGrad,
}: ButtonsProps) => {
  const [buttonColor, setButtonColor] = useState("#191919");

  useEffect(() => {
    setButtonColor(color === "dark" ? "#191919" : "#f7f7f7");
  }, [color]);

  const iconVariant = {
    initial: { rotate: 0, fill: buttonColor },
    hover: {
      rotate: 45,
      transition: { duration: 0.25 },
    },
  };

  const iconVariant2 = {
    initial: { rotate: 0, fill: buttonColor },
    hover: {
      fill: "url(#gradient)",
      transition: { duration: 0.25, delay: 0.3 },
    },
  };

  const slideVariants = {
    initial: { y: 0 },
    hover: { y: -30, transition: { duration: 0.5 } },
  };

  const slideVariants2 = {
    initial: { y: 30 },
    hover: { x: 0, y: 0, transition: { duration: 0.25 } },
  };

  const underlineVariant = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1, transition: { duration: 0.25, delay: 0.3 } },
  };

  return (
    <motion.button
      onClick={ onClick }
      initial="initial"
      whileHover="hover"
      className="relative flex items-center justify-center gap-1 py-1 px-1 overflow-hidden cursor-pointer bg-transparent border-none group"
    >
      <motion.div className="relative flex items-center justify-center flex-col">
        <motion.span
          className="block text-para"
          style={ { color: buttonColor } }
          variants={ slideVariants }
        >
          { children }
        </motion.span>
        <motion.span
          className="absolute top-0 left-0 text-para"
          style={ { color: buttonColor } }
          variants={ slideVariants2 }
        >
          { children }
        </motion.span>
      </motion.div>
      { underline && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-bottom-left bg-gradient-to-r from-[#2DCCD8] to-[#2965DD]"
          variants={ underlineVariant }
        />
      ) }
      { arrow && (
        <motion.svg
          variants={ iconVariant }
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2DCCD8" />
              <stop offset="100%" stopColor="#2965DD" />
            </linearGradient>
          </defs>
          <motion.path
            d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
            variants={ iconVariant2 }
          />
        </motion.svg>
      ) }
    </motion.button>
  );
};

export default Buttons;
