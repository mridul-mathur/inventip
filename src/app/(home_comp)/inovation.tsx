'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from 'framer-motion';
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
  const { scrollYProgress } = useScroll({ target: containerRef });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, cards.length - 1]
  );
  const windowHeight = windowRef.current?.clientHeight;
  const [currentIndex, setCurrentIndex] = useState(0);
  useMotionValueEvent(activeIndex, 'change', (latest) => {
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
      className='relative w-screen bg-primary'
      style={{ height: `${cards.length * 2 * (windowHeight ?? 0)}px` }}
    >
      <div className='sticky top-0 left-0 flex w-screen h-screen'>
        <div className='w-5/12 h-full flex flex-col justify-center gap-12 p-12 py-36'>
          <motion.h1
            className='text-head  h-fit font-suisse'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TextFormatter text={title || ''} />
          </motion.h1>

          <div className='w-fit h-3/4 items-start justify-start flex flex-col overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ y: '125%' }}
                animate={{ y: '0%' }}
                exit={{ y: '125%' }}
                transition={{ duration: 0.5 }}
              >
                <span className='text-5xl font-medium'>
                  <TextFormatter text={cards[currentIndex]?.name || ''} />
                </span>
                <motion.p className='my-12 w-[24rem] text-2xl'>
                  <TextFormatter
                    text={cards[currentIndex]?.description || ''}
                  />
                </motion.p>
                {cards[currentIndex]?.link && (
                  <Link href={cards[currentIndex].link!}>
                    <Buttons color='dark' arrow={true} underline={true}>
                      {cards[currentIndex].buttonText}
                    </Buttons>
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className='w-7/12 h-screen flex items-center justify-center overflow-hidden relative'>
          <div className='absolute  right-8 z-10 flex flex-col gap-3 items-end'>
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
                className='w-4 h-4 rounded-full  flex items-center justify-center p-0.5 transition-all duration-300'
              >
                <motion.div
                  layout
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
            className='w-[30rem] snap-y snap-mandatory snap-start aspect-[3/4] relative m-0 p-0 gap-0 overflow-hidden rounded-lg border border-secondary'
          >
            <motion.div
              className='absolute top-0 left-0 w-full h-full'
              style={{ y: imageStackY }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className='w-full h-[40rem] m-0 p-0 overflow-hidden flex items-center justify-center'
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className='w-full h-full hover:scale-105 transition-all duration-300 ease-out object-cover'
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
