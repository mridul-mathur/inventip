'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Buttons from '../buttons';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface TestimonialContent {
  title: string;
  cards: [TestiCardProps];
}

function WhatTheySay() {
  const [content, setContent] = useState<TestimonialContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then((response) => response.json())
      .then((data) => setContent(data.Home.testimonials))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <main className='flex flex-col  bg-primary h-fit min-h-[75vh] py-12 px-0 w-screen gap-6'>
      <div className='w-[100%] px-12 flex justify-between items-center'>
        <h1 className='text-head capitalize'>
          What They <br /> Say About Us
        </h1>
        <div className='flex gap-4'>
          <div className='flex p-1 border border-secondary rounded-full'>
            <Buttons color='dark' onClick={handlePrev}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
              >
                <path
                  d='M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z'
                  fill='#191919'
                />
              </svg>
            </Buttons>
          </div>
          <div className='flex p-1 border border-secondary rounded-full'>
            <Buttons color='dark' onClick={handleNext}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
              >
                <path
                  d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z'
                  fill='#191919'
                />
              </svg>
            </Buttons>
          </div>
        </div>
      </div>
      <div className='relative w-full px-12 flex justify-center overflow-visible'>
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          speed={1000}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className='w-full'
        >
          {content?.cards.map((testi, index) => (
            <SwiperSlide key={index}>
              <TestiCard
                name={testi.name}
                quate={testi.quate}
                image={testi.image}
                company={testi.company}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

export default WhatTheySay;

interface TestiCardProps {
  name: string;
  quate: string;
  image: string;
  company: string;
}

const TestiCard: React.FC<TestiCardProps> = ({
  name,
  quate,
  image,
  company,
}) => {
  return (
    <div className='w-full hover:cursor-grab h-full justify-center text-center flex-shrink-0 flex items-center gap-8'>
      <div className='w-3/5 h-fit flex flex-col justify-between items-center gap-6'>
        <div className='relative w-full py-4 px-6'>
          <img
            src='/images/upper.png'
            alt=''
            className='absolute top-0 left-0'
          />
          <h1 className='text-para w-full'>{quate}</h1>
          <img
            src='/images/down.png'
            className='absolute bottom-0 right-6'
            alt=''
          />
        </div>
        <div className='px-6'>
          <p className='text-paramin'>{name}</p>
          <p>
            <span className='text-slate-400 text-min'>{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
