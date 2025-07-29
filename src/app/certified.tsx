'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  subtitle: string;
  para: string;
  img: string;
}

const Certified: React.FC = () => {
  const slides: Slide[] = [
    {
      subtitle: 'Industry Certification A',
      para: 'Details about Certification A go here.',
      img: 'https://i.pinimg.com/control2/736x/39/80/16/3980164e1d092aed57c619b854d3e72e.jpg',
    },
    {
      subtitle: 'Industry Certification B',
      para: 'Details about Certification B go here.',
      img: 'https://i.pinimg.com/736x/38/bf/5a/38bf5acc0e4a38da034b516009ad5fec.jpg',
    },
    {
      subtitle: 'Industry Certification C',
      para: 'Details about Certification C go here.',
      img: 'https://i.pinimg.com/736x/dc/dd/a9/dcdda91488940560786283b38213ec6b.jpg',
    },
    {
      subtitle: 'Industry Certification D',
      para: 'Details about Certification D go here.',
      img: 'https://i.pinimg.com/736x/74/05/09/74050921771c3359416531919ec211c9.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const rightImageRef = useRef<HTMLDivElement | null>(null);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    const rightImageContainer = rightImageRef.current;
    if (rightImageContainer) {
      const targetImage = rightImageContainer.children[index] as HTMLElement;
      targetImage?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <main className='min-h-[90vh] w-screen bg-primary flex flex-col md:flex-row p-4 md:p-16 overflow-hidden z-[1]'>
      <div className='left-detail w-full md:w-[50%] flex flex-col justify-evenly gap-5 md:gap-0 pl-2'>
        <h1 className='text-head capitalize'>Appreciation and Awards</h1>
        <AnimatePresence mode='wait'>
          <motion.div
            key={`subtitle-${currentIndex}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className='text-subhead'>{slides[currentIndex].subtitle}</h2>
          </motion.div>
          <motion.div
            key={`para-${currentIndex}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className='text-para'>{slides[currentIndex].para}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className='right-image h-[80vh] w-full md:w-[80%] flex items-center p-4 md:p-12 overflow-x-scroll scrollbar-none'
        ref={rightImageRef}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={`container-${index}`}
            className={`relative h-[80%] min-w-[280px] flex-shrink-0 flex items-center justify-center cursor-pointer`}
            onClick={() => handleCardClick(index)}
          >
            <motion.div
              className={`h-full w-full border rounded-[2rem] overflow-hidden ${
                currentIndex === index ? 'z-[2]' : 'z-[0]'
              }`}
              animate={{
                scale: currentIndex === index ? 1.05 : 0.85,
                opacity: currentIndex === index ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={slide.img}
                alt={slide.subtitle}
                className='w-full h-full object-cover rounded-[2rem]'
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Certified;
