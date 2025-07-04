"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import Buttons from "../buttons";
import Link from "next/link";
import TextFormatter from "@/components/text-format";

export interface ExpertiseContent {
  title: string;
  cards: {
    name: string;
    description: string;
    image: string;
    buttonText?: string;
    link?: string;
  }[];
}

const Inovation: React.FC<ExpertiseContent> = ({ title, cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, cards.length - 1]
  );
  const windowHeight = windowRef.current?.clientHeight;
  const [currentIndex, setCurrentIndex] = useState(0);
  useMotionValueEvent(activeIndex, "change", (latest) => {
    setCurrentIndex(Math.floor(latest));
  });
  const imageStackY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((cards.length - 1) * (windowHeight ?? 0) + 5)]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-screen bg-primary"
      style={{ height: `${cards.length * 2 * (windowHeight ?? 0)}px` }}
    >
      {/* Fixed content */}
      <div className="sticky top-0 left-0 flex w-screen h-screen">
        {/* Left text panel */}
        <div className="w-5/12 h-full flex flex-col justify-between p-16 py-36">
          <motion.h1
            className="text-head"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TextFormatter text={title || ""} />
          </motion.h1>

          <div className="w-fit h-fit overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: "125%" }}
                animate={{ y: "0%" }}
                exit={{ y: "125%" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl font-medium">
                  <TextFormatter text={cards[currentIndex]?.name || ""} />
                </span>
                <motion.p className="mb-4 w-[22rem] mt-4">
                  <TextFormatter
                    text={cards[currentIndex]?.description || ""}
                  />
                </motion.p>
                {cards[currentIndex]?.link && (
                  <Link href={cards[currentIndex].link!}>
                    <Buttons color="dark" arrow={true} underline={true}>
                      {cards[currentIndex].buttonText}
                    </Buttons>
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right image panel */}
        <div className="w-7/12 h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={windowRef}
            className="w-[30rem] snap-y snap-mandatory snap-start aspect-[3/4] relative m-0 p-0 gap-0 overflow-hidden rounded-lg border border-secondary"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ y: imageStackY }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full h-[40rem] m-0 p-0 overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full hover:scale-105 transition-all duration-300 ease-out object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inovation;
