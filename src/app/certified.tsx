'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Buttons from './buttons';

const Certified: React.FC = () => {
  const slides: string[] = [
    '/images/cert1.webp',
    '/images/cert2.webp',
    '/images/cert3.webp',
    '/images/cert4.webp',
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <main className='min-h-[90vh] w-screen bg-primary flex flex-col justify-center items-center p-4 md:p-16 overflow-hidden z-[1]'>
      <h1 className='text-head capitalize mb-12'>Appreciation and Awards</h1>
      <div className='relative w-full max-w-6xl'>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, EffectFade]}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            300: {
              slidesPerView: 1.25,
              spaceBetween: 16,
            },
            425: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className='w-full'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className='relative h-fit w-fit flex items-center justify-center cursor-pointer'
                transition={{ duration: 0.3 }}
              >
                <div className='h-full w-full xl:aspect-square sm:aspect-[4/5] aspect-[4/5] flex border rounded-[2rem] items-center justify-center overflow-hidden'>
                  <img
                    src={slide}
                    alt={`Certificate ${index + 1}`}
                    className='w-full h-full object-contain p-6 bg-white rounded-[2rem]'
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='absolute top-1/2 -left-16 transform -translate-y-1/2 z-10'>
          <div className='flex p-1 border border-secondary rounded-full'>
            <Buttons color='dark' onClick={handleNext}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                style={{ transform: 'rotate(180deg)' }}
              >
                <path
                  d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z'
                  fill='#191919'
                />
              </svg>
            </Buttons>
          </div>
        </div>

        <div className='absolute top-1/2 -right-16 transform -translate-y-1/2 z-10'>
          <div className='flex p-1 border border-secondary rounded-full'>
            <Buttons color='dark' onClick={handlePrev}>
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
    </main>
  );
};

export default Certified;
