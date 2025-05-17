"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Buttons from "../buttons";
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function WhatTheySay() {
  const testimonials = [
    {
      name: "Faiz Ur Rehman",
      quate:
        "In our search for a law firm with strong technical expertise in patent drafting and prosecution, we discovered InventIP and have been impressed with their work.Over the past two years, InventIP has successfully handled a significant portion of our annual filings and prosecutions.Our in -house attorneys and inventors consistently praise their deep understanding of the technologies involved and the high quality of their patent applications.Notably, the grant rates for patents handled by InventIP,both in India and the US, have been excellent.",
      image: "/images/img.png",
      company: "Head IP and Innovation at Infosys",
    },
    {
      name: "Rajiv Trehan",
      quate:
        "As a fellow startup and partner, I can&#39;t speak highly enough about InventIP.Their commitment to quality and integrity has made them an invaluable asset to our journey.Their supportive approach and unwavering ethical standards make them the perfect partner for any startup looking to thrive.",
      image: "/images/img.png",
      company: "CTO and Founder at Merlin Fit",
    },
    {
      name: "Thomas D. Franklin",
      quate:
        "I have tried several patent drafting firms for patent applications, but the quality is typically very poor.InventIP is an exception.I would put their work quality on par or better with any well- known domestic patent firm.Their staff is articulate and have a natural curiosity that translates into a well - done work product.InventIP is my go - to firm in India.I would put their work quality on par or better with any well - known domestic patent firm.Their staff is articulate and have a natural curiosity that translates into a well - done work product.InventIP is my go - to firm in India.",
      image: "/images/img.png",
      company: "Founder Triangle IP (US)",
    },
    {
      name: "Mohammed Faisal",
      quate:
        "I have had the pleasure of working with InventIP on multiple projects, and I must say that their commitment to delivering high- quality results within the stipulated timeframe is unparalleled.It &#39;s rare to find a company that excels in both aspects.",
      image: "/images/img.png",
      company: "GM and Head IP at Tata Motors",
    },
    {
      name: "Chetan Kumar Chenappa",
      quate:
        "I was recommended of InventIP through a professional connect.Our IP portfolio was spread across multiple law firms and service providers, and we needed one- stop solution provider.We are happy that we went along with them.The handover was efficient and smooth.The global filings and renewal management has become fuss free.Their work quality is great.They take ownership and ensure timely delivery to every task assigned to them.They have also helped us with technology insights to build our portfolio.I would highly recommend them to anyone who could use their services.",
      image: "/images/img.png",
      company: "Chief Patent Counsel at HCL Technologies",
    },
    {
      name: "Dhruv Sud",
      quate:
        "Over the course of our collaboration for the last several years, the InventIP team has proven to be an invaluable partner in securing and safeguarding our intellectualproperty, particularly in the complex and evolving domain of machine learning inhealthcare.Their team of seasoned professionals consistently demonstrates aprofound understanding of patent applications and legal intricacies. As leaders, whatsets Ankush and Rahul apart is not only their expertise but also their unwaveringdedication to our success.They provide strategic guidance, ensuring that our patentsalign with our business objectives, and their efficiency and responsiveness havebeen instrumental in meeting critical deadlines.InventIP maintains transparentcommunication throughout the entire process, keeping us informed about progressand potential challenges.",
      image: "/images/img.png",
      company: "CTO at Cloud physician",
    },
  ];

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
    <main className="flex flex-col  bg-primary h-fit min-h-[75vh] py-12 px-0 w-screen gap-6">
      <div className="w-[100%] px-12 flex justify-between items-center">
        <h1 className="text-head capitalize">
          What They <br /> Say About Us
        </h1>
        <div className="flex gap-4">
          <div className="flex p-1 border border-secondary rounded-full">
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
          <div className="flex p-1 border border-secondary rounded-full">
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
      </div>
      <div className="relative w-full px-12 flex justify-center overflow-visible">
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          speed={1000}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {testimonials.map((testi, index) => (
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
    </main >
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
    <div className="w-full hover:cursor-grab h-full flex-shrink-0 flex items-center gap-4">
      <div className="relative rounded-xl overflow-hidden w-2/5 h-full min-h-[15rem]">
        <Image
          src={image}
          fill
          alt={name}
          className="relative object-cover w-full h-full"
        />
      </div>
      <div className="w-3/5 h-full flex flex-col justify-between">
        <div className="relative w-full py-4 px-6">
          <img
            src="/images/upper.png"
            alt=""
            className="absolute top-0 left-0"
          />
          <h1 className="text-para w-full">{quate}</h1>
          <img
            src="/images/down.png"
            className="absolute bottom-0 right-6"
            alt=""
          />
        </div>
        <div className="px-6">
          <p className="text-paramin">{name}</p>
          <p>
            <span className="text-slate-400 text-min leading-5">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
