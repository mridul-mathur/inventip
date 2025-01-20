"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Buttons from "../buttons";
import Link from "next/link";
import Image from "next/image";
import { del } from "framer-motion/client";

const Inovation: React.FC = () => {
  const slides = [
    {
      subtitle: "Open Innovation",
      para: "We look beyond conventional search strategies and work collaboratively to generate actionable innovation, keeping clients informed with interim updates and sharing sample outputs.",
      img: "/images/img.png",
      buttonText: "View Open Innovation",
      link: "/expertise/3",
    },
    {
      subtitle: "IP Research",
      para: "We support businesses in making informed IP investment decisions, safeguarding them from invalidity risks and identifying monetization opportunities.",
      img: "/images/img.png",
      buttonText: "Explore IP Research",
      link: "/expertise/0",
    },
    {
      subtitle: "IP Strategy",
      para: "We align IP creation and enforcement strategies with commercial goals, ensuring adherence to competitive boundaries.",
      img: "/images/img.png",
      buttonText: "Discover IP Strategy",
      link: "/expertise/1",
    },
    {
      subtitle: "IP Portfolio Management",
      para: "We manage IP portfolios, conduct audits, due diligence, and valuation, aligning IP assets with business objectives.",
      img: "/images/img.png",
      buttonText: "Manage IP Portfolio",
      link: "/expertise/2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".slide-section");
      const midpoint = window.innerHeight / 2;

      sections.forEach((section, index) => {
        const { top } = section.getBoundingClientRect();
        if (top >= 0 && top <= midpoint) {
          setCurrentIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    initial: (direction: "up" | "down") => ({
      opacity: 1,
      y: direction === "down" ? 200 : 200,
    }),
    animate: { opacity: 1, y: 0 },
    exit: (direction: "up" | "down") => ({
      opacity: 1,
      y: direction === "down" ? 200 : 200,
    }),
  };

  const variants2 = {
    initial: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "down" ? 200 : -200,
    }),
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "down" ? -200 : 200,
    }),
  };

  return (
    <div className="relative min-h-screen w-screen bg-primary">
      <div className="sticky top-0 left-0 flex w-screen h-screen">
        <div className="w-5/12 h-full flex flex-col justify-between p-16 py-36">
          <motion.h1
            className="text-head"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            These are our expertise where we stand for you and with you
          </motion.h1>
          <div className="w-fit h-fit overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                custom={scrollDirection}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, delay: 0.2 }}
              >
                <motion.h2 className="text-2xl font-semibold mb-4">
                  {slides[currentIndex].subtitle}
                </motion.h2>
                <motion.p className="mb-4 w-[22rem]">
                  {slides[currentIndex].para}
                </motion.p>
                <Link href={slides[currentIndex].link}>
                  <Buttons color="dark" arrow={true} underline={true}>
                    {slides[currentIndex].buttonText}
                  </Buttons>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-7/12 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-[30rem] h-[36rem] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                className="w-[30rem] h-[36rem] relative overflow-hidden rounded-lg border border-secondary"
                key={currentIndex}
                custom={scrollDirection}
                variants={variants2}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75 }}
              >
                <img
                  src={slides[currentIndex].img}
                  alt={`Slide ${currentIndex}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence mode="sync">
        <div>
          {slides.map((_, index) => (
            <div key={index} className="slide-section h-screen"></div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Inovation;
