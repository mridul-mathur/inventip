'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Buttons from '../buttons';
import TextFormatter from '@/components/text-format';

interface HeroContent {
  text1: string;
  text2: string;
  image: string;
  cta: { text: string; link: string }[];
}

const AnimatedHeroContent = ({ content }: { content: HeroContent }) => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const cornerRadius = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['0rem', '2rem']
  );

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const textXFirst = useTransform(scrollYProgress, [0, 0.75], [0, -50]);
  const textXSecond = useTransform(scrollYProgress, [0, 0.75], [0, 50]);

  return (
    <section
      ref={ref}
      style={{ minHeight: '250vh' }}
      className="relative w-screen text-primary"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <motion.div
          className="relative m-auto h-full w-full"
          style={{
            scale: backgroundScale,
          }}
        >
          <motion.img
            src={content.image}
            alt="Background"
            className="h-full w-full object-cover"
            style={{ borderRadius: cornerRadius }}
          />
        </motion.div>
        <motion.div className="absolute inset-0 z-[1] flex w-full flex-col items-center justify-center gap-6 text-center">
          <motion.div className="flex gap-4 text-nowrap text-5xl font-bold">
            <motion.h1
              style={{ x: textXFirst }}
              transition={{ ease: 'easeOut', duration: 1 }}
              className="mix-blend-difference"
            >
              <TextFormatter text={content?.text1 || ''} />
            </motion.h1>
            <motion.h1
              style={{ x: textXSecond }}
              transition={{ ease: 'easeOut', duration: 1 }}
              className="mix-blend-difference"
            >
              <TextFormatter text={content?.text2 || ''} />
            </motion.h1>
          </motion.div>
          <motion.div className="flex items-center justify-center gap-6">
            {content.cta.map(
              (button: { text: string; link: string }, index: number) => (
                <Buttons
                  key={index}
                  color="light"
                  arrow={true}
                  underline={true}
                  onClick={() => (window.location.href = button.link)}
                >
                  {button.text}
                </Buttons>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Hero = () => {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Home.hero))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  if (!content || !isMounted) {
    return (
      <section
        data-theme="dark"
        style={{ minHeight: '250vh' }}
        className="relative flex w-screen flex-col items-center justify-start text-primary"
      >
        <div className="sticky left-0 top-0 h-screen w-full">
          <div className="absolute inset-0 flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mb-6 text-5xl font-bold">Loading...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AnimatedHeroContent content={content} />;
};

export default Hero;
