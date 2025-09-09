'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
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
    <main className="z-[1] flex min-h-[90vh] w-screen flex-col items-center justify-center overflow-hidden bg-primary p-4 md:p-16">
      <h1 className="mb-12 text-head capitalize">Appreciation and Awards</h1>
      <div className="relative w-full max-w-6xl">
        <Swiper
          onSwiper={swiper => {
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
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative flex h-fit w-fit cursor-pointer items-center justify-center"
                transition={{ duration: 0.3 }}
              >
                <div className="flex aspect-[4/5] h-full w-full items-center justify-center overflow-hidden rounded-[2rem] border sm:aspect-[4/5] xl:aspect-square">
                  <img
                    src={slide}
                    alt={`Certificate ${index + 1}`}
                    className="h-full w-full rounded-[2rem] bg-white object-contain p-6"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute -left-16 top-1/2 z-10 -translate-y-1/2 transform">
          <div className="flex rounded-full border border-secondary p-1">
            <Buttons color="dark" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                style={{ transform: 'rotate(180deg)' }}
              >
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                  fill="#191919"
                />
              </svg>
            </Buttons>
          </div>
        </div>

        <div className="absolute -right-16 top-1/2 z-10 -translate-y-1/2 transform">
          <div className="flex rounded-full border border-secondary p-1">
            <Buttons color="dark" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                  fill="#191919"
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
