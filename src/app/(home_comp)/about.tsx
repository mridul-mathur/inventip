'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Buttons from '../buttons';
import TextFormatter from '@/components/text-format';

interface AboutContent {
  title: string;
  text: string;
  cta: {
    text: string;
    link: string;
  };
  numbers: Array<{
    number: number;
    text: string;
  }>;
}

interface BentoContent {
  text: string;
  image: string;
}

const useCounterAnimation = (targetNumber: number, isVisible: boolean) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentNumber(0);
      return;
    }

    const totalSteps = 10;
    const stepSize = targetNumber / totalSteps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newValue = Math.min(currentStep * stepSize, targetNumber);
      setCurrentNumber(newValue);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setCurrentNumber(targetNumber);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, targetNumber]);

  return currentNumber;
};

const HomeAbout = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const numbersRef = useRef<HTMLDivElement>(null);

  const isNumbersVisible = useInView(numbersRef, {
    amount: 0.3,
    margin: '0px 0px -100px 0px',
  });

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Home.about))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <section
      data-theme="light"
      style={{ minHeight: '100vh' }}
      className="z-[2] flex h-fit w-screen flex-col items-center justify-between gap-16 bg-primary p-4 sm:p-[8rem]"
    >
      <div className="flex h-fit w-full flex-col items-start justify-center gap-4 sm:flex-row sm:gap-[8rem]">
        <div className="flex h-full w-full flex-col items-start justify-between gap-[2rem] sm:w-2/5">
          <p className="text-head">{content?.title}</p>
          <Buttons
            color="dark"
            arrow
            underline
            onClick={() => (window.location.href = '/about')}
          >
            Know About Us
          </Buttons>
        </div>
        <div className="flex h-fit w-full flex-col items-start justify-between gap-12 text-justify text-para sm:w-3/5">
          <p>
            <TextFormatter text={content?.text || ''} />
          </p>
          <div
            ref={numbersRef}
            className="grid w-full grid-cols-3 items-center justify-start"
          >
            {content?.numbers.map((number, index) => (
              <div className="col-span-1" key={index}>
                <Numb
                  numb={number.number}
                  text={number.text}
                  isVisible={isNumbersVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <BentoGrid />
    </section>
  );
};

export default HomeAbout;

interface NumbProps {
  numb: number;
  text: string;
  isVisible: boolean;
}

const Numb: React.FC<NumbProps> = ({ numb, text, isVisible }) => {
  const animatedValue = useCounterAnimation(numb, isVisible);

  return (
    <div className="flex flex-col gap-4">
      <motion.p className="text-subhead font-medium">
        {Math.round(animatedValue)}+
      </motion.p>
      <p className="text-paramin font-medium">{text}</p>
    </div>
  );
};

const BentoGrid = () => {
  const [content, setContent] = useState<BentoContent[] | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Home.about.bento))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  if (!content) {
    return (
      <div className="flex h-[48rem] w-full items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid h-[48rem] w-full grid-rows-7 gap-6 text-center sm:grid-cols-1 md:grid-cols-3">
      <div className="relative col-span-2 row-span-3 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={content?.[0].image}
          alt={`S`}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 flex h-fit w-full items-center justify-center bg-secondary bg-opacity-30 bg-clip-padding py-2 text-para font-semibold text-white backdrop-blur-2xl backdrop-filter transition-opacity duration-500 group-hover:opacity-90">
          <div className="duration-500 group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:bg-clip-text group-hover:text-transparent">
            <TextFormatter text={content?.[0].text} />
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-3 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={content?.[1].image}
          alt={`C`}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 flex h-fit w-full items-center justify-center bg-secondary bg-opacity-30 bg-clip-padding py-2 text-para font-semibold text-white backdrop-blur-2xl backdrop-filter transition-opacity duration-500 group-hover:opacity-90">
          <div className="duration-500 group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:bg-clip-text group-hover:text-transparent">
            <TextFormatter text={content?.[1].text} />
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-4 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={content?.[2].image}
          alt={`O`}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 flex h-fit w-full items-center justify-center bg-secondary bg-opacity-30 bg-clip-padding py-2 text-para font-semibold text-white backdrop-blur-2xl backdrop-filter transition-opacity duration-500 group-hover:opacity-90">
          <div className="duration-500 group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:bg-clip-text group-hover:text-transparent">
            <TextFormatter text={content?.[2].text} />
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-1 flex items-center justify-center overflow-hidden rounded-xl border border-accent1">
        <p className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-center text-max font-bold uppercase text-transparent">
          SCOPE
        </p>
      </div>
      <div className="relative col-span-1 row-span-4 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={content?.[4].image}
          alt={`E`}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 flex h-fit w-full items-center justify-center bg-secondary bg-opacity-30 bg-clip-padding py-2 text-para font-semibold text-white backdrop-blur-2xl backdrop-filter transition-opacity duration-500 group-hover:opacity-90">
          <div className="duration-500 group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:bg-clip-text group-hover:text-transparent">
            <TextFormatter text={content?.[4].text} />
          </div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-3 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={content?.[3].image}
          alt={`P`}
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute bottom-0 flex h-fit w-full items-center justify-center bg-secondary bg-opacity-30 bg-clip-padding py-2 text-para font-semibold text-white backdrop-blur-2xl backdrop-filter transition-opacity duration-500 group-hover:opacity-90">
          <div className="duration-500 group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:bg-clip-text group-hover:text-transparent">
            <TextFormatter text={content?.[3].text} />
          </div>
        </div>
      </div>
    </div>
  );
};
