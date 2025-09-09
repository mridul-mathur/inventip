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
      .then(response => response.json())
      .then(data => setContent(data.Home.testimonials))
      .catch(error => console.error('Error fetching content:', error));
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
    <main className="flex h-fit min-h-[75vh] w-screen flex-col gap-6 bg-primary px-0 py-12">
      <div className="flex w-[100%] items-center justify-between px-12 py-6">
        <h1 className="w-full text-center text-head capitalize">
          What They Say About Us
        </h1>
      </div>
      <div className="relative flex w-full items-center justify-center overflow-visible px-12">
        <div className="absolute left-20 z-[10] flex rounded-full border border-secondary p-1">
          <Buttons color="dark" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z"
                fill="#191919"
              />
            </svg>
          </Buttons>
        </div>
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          speed={1000}
          onSwiper={setSwiper}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          className="w-full"
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
        <div className="absolute right-20 z-[10] flex h-fit w-fit rounded-full border border-secondary p-1">
          <Buttons color="dark" onClick={handleNext}>
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
    <div className="flex h-full w-full flex-shrink-0 items-center justify-center gap-8 text-center hover:cursor-grab">
      <div className="flex h-fit w-3/5 flex-col items-center justify-center gap-6">
        <div className="relative w-full px-6 py-4">
          <img
            src="/images/upper.png"
            alt=""
            className="absolute left-0 top-0"
          />
          <h1 className="w-full text-justify text-para">{quate}</h1>
          <img
            src="/images/down.png"
            className="absolute bottom-0 right-6"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-1 p-6">
          <p className="text-para">{name}</p>
          <p className="text-para font-semibold">{company}</p>
        </div>
      </div>
    </div>
  );
};
