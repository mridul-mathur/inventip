"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Buttons from "../buttons";

function WhatTheySay() {
  const testimonials = [
    {
      name: "RDX Sir",
      quate:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
      image: "/images/img.png",
      company: "Mafia Solutions",
    },
    {
      name: "Uday Shetti",
      quate:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
      image: "/images/img.png",
      company: "Wealth ManageX",
    },
    {
      name: "Majnu Bhai",
      quate:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
      image: "/images/img.png",
      company: "Weeky FinancHub",
    },
    {
      name: "Ghungroo Seth",
      quate:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
      image: "/images/img.png",
      company: "Healthcare Solutions",
    },
  ];

  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length);
    } else if (activeIndex === extendedTestimonials.length - 1) {
      setActiveIndex(1);
    }
  };

  return (
    <main className="flex flex-col overflow-hidden bg-primary h-fit min-h-[75vh] p-12 w-screen gap-6">
      <div className="w-[100%] mb-5 flex justify-between items-center">
        <h1 className="text-head capitalize">
          What They <br /> Say About Us
        </h1>
        <div className="flex gap-4">
          <div className="flex p-1 border border-secondary rounded-full">
            <Buttons color="dark" onClick={handlePrev}>
              <motion.svg
                animate={{ rotate: 0, scale: 0.9 }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <motion.path
                  d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z"
                  fill="#191919"
                />
              </motion.svg>
            </Buttons>
          </div>
          <div className="flex p-1 border border-secondary rounded-full">
            <Buttons color="dark" onClick={handleNext}>
              <motion.svg
                animate={{ rotate: 0, scale: 0.9 }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <motion.path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                  fill="#191919"
                />
              </motion.svg>
            </Buttons>
          </div>
        </div>
      </div>

      <div className="relative w-screen flex justify-center overflow-hidden">
        <motion.div
          className="flex gap-8 cursor-grab w-full"
          drag="x"
          dragConstraints={{
            left: -640 * (extendedTestimonials.length - 1),
            right: 0,
          }}
          initial={{ x: -activeIndex * 640 }}
          animate={{ x: -activeIndex * 640 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onAnimationComplete={handleTransitionEnd}
        >
          {extendedTestimonials.map((testi, index) => (
            <TestiCard
              key={index}
              name={testi.name}
              quate={testi.quate}
              image={testi.image}
              company={testi.company}
            />
          ))}
        </motion.div>
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
    <motion.div className="w-[40rem] h-full flex-shrink-0 flex items-center gap-4">
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
    </motion.div>
  );
};
