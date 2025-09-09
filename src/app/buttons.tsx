'use client';

import { motion } from 'motion/react';
import React from 'react';

interface ButtonsProps {
  children: React.ReactNode;
  color: 'dark' | 'light';
  arrow?: boolean;
  underline?: boolean;
  onClick?: () => void;
}

export default function Buttons({
  children,
  color,
  arrow,
  underline,
  onClick,
}: ButtonsProps) {
  const base = color === 'dark' ? '#191919' : '#f7f7f7';

  /* ─── shared variants ─── */
  const variants = {
    rest: { rotate: 0, fill: base },
    hover: {
      rotate: 45 / 2,
      fill: 'url(#gradient)',
      transition: { rotate: { duration: 0.25 }, fill: { delay: 0.25 } },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      animate="rest"
      whileHover="hover" /* one gesture, on the button */
      className="relative flex cursor-pointer items-center justify-center gap-1 overflow-hidden bg-transparent px-1 py-1"
    >
      {/* text keeps its own slide-up animation, unchanged */}
      <motion.div className="relative flex flex-col items-center justify-center">
        <motion.span
          className="block text-para"
          style={{ color: base }}
          variants={{
            rest: { y: 0 },
            hover: { y: -30, transition: { duration: 0.5 } },
          }}
        >
          {children}
        </motion.span>

        <motion.span
          className="absolute left-0 top-0 text-para"
          style={{ color: base }}
          variants={{
            rest: { y: 30 },
            hover: { y: 0, transition: { duration: 0.25 } },
          }}
        >
          {children}
        </motion.span>
      </motion.div>

      {underline && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-bottom-left bg-gradient-to-r from-[#2DCCD8] to-[#2965DD]"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1, transition: { duration: 0.25, delay: 0.3 } },
          }}
        />
      )}

      {arrow && (
        <motion.svg
          key={color}
          width="28"
          height="28"
          viewBox="0 0 24 24"
          variants={variants}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2DCCD8" />
              <stop offset="100%" stopColor="#2965DD" />
            </linearGradient>
          </defs>

          <motion.path
            d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
            variants={variants}
            stroke="none"
          />
        </motion.svg>
      )}
    </motion.button>
  );
}
