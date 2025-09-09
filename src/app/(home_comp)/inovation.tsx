'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from 'motion/react';
import Buttons from '../buttons';
import Link from 'next/link';
import TextFormatter from '@/components/text-format';

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, cards.length - 1]
  );
  const windowHeight = windowRef.current?.clientHeight;
  const [currentIndex, setCurrentIndex] = useState(0);

  useMotionValueEvent(activeIndex, 'change', latest => {
    setCurrentIndex(Math.floor(latest));
  });

  const imageStackY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((cards.length - 1) * (windowHeight ?? 0))]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-screen bg-primary"
      style={{ height: `${cards.length * 2 * (windowHeight ?? 0)}px` }}
    >
      <div className="sticky left-0 top-0 flex h-screen w-screen">
        <div className="grid h-full w-5/12 grid-rows-6 items-start justify-center gap-12 p-12 py-36">
          <motion.h1
            className="row-span-2 h-fit items-start justify-start font-suisse text-head"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TextFormatter text={title || ''} />
          </motion.h1>
          <div className="row-span-4 flex h-fit w-fit flex-col items-start justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: '125%' }}
                animate={{ y: '0%' }}
                exit={{ y: '125%' }}
                transition={{ duration: 0.5 }}
              >
                <span className="mb-6 flex flex-col gap-2 text-subhead font-medium">
                  <TextFormatter text={cards[currentIndex]?.name || ''} />
                  <motion.p className="w-[24rem] text-justify text-para font-normal">
                    <TextFormatter
                      text={cards[currentIndex]?.description || ''}
                    />
                  </motion.p>
                </span>

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

        <div className="relative flex h-screen w-7/12 items-center justify-center overflow-hidden">
          <div className="absolute right-8 z-10 flex flex-col items-end gap-3">
            {cards.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to card ${idx + 1}`}
                onClick={() => {
                  if (!windowRef.current) return;
                  const win = windowRef.current;
                  const cardHeight = win.clientHeight;
                  const container = containerRef.current;
                  if (container) {
                    const totalHeight =
                      container.scrollHeight - win.clientHeight;
                    const targetScroll =
                      (totalHeight / (cards.length - 1)) * idx;
                    window.scrollTo({
                      top: container.offsetTop + targetScroll,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full p-0.5 transition-all duration-300"
              >
                <motion.div
                  layout
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'bg-gradient-to-r from-accent1 to-accent2'
                      : 'bg-secondary/50'
                  }`}
                />
              </button>
            ))}
          </div>

          <div
            ref={windowRef}
            className="relative m-0 aspect-[3/4] w-[30rem] snap-y snap-mandatory snap-start gap-0 overflow-hidden rounded-lg border border-secondary p-0"
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-full"
              style={{ y: imageStackY }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="m-0 flex h-[40rem] w-full items-center justify-center overflow-hidden p-0"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-full w-full object-cover transition-all duration-300 ease-out hover:scale-105"
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
