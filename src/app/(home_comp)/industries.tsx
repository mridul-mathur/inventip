"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Buttons from "../buttons";

const Industries = () => {
  const industries = [
    { name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat", image: "/images/img.png", expertise: ["popular", "expertise", "of this", "industry"] },
    { name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat", image: "/images/img.png", expertise: ["popular", "expertise", "of this", "industry"] },
    { name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat", image: "/images/img.png", expertise: ["popular", "expertise", "of this", "industry"] },
    { name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat", image: "/images/img.png", expertise: ["popular", "expertise", "of this", "industry"] },
    { name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat", image: "/images/img.png", expertise: ["popular", "expertise", "of this", "industry"] },
    { name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat", image: "/images/img.png", expertise: ["popular", "expertise", "of this", "industry"] },
  ];

  const cardWidth = 650; // Width of one card
  const move = cardWidth + 60;
  const totalCards = industries.length; // Total number of cards
  const viewportWidth = 1200; // Approximate viewport width
  const maxRightConstraint = -(cardWidth * totalCards - viewportWidth); // Dynamic drag constraint

  const [currentPosition, setCurrentPosition] = useState(0);

  // Handlers for moving carousel
  const moveLeft = () => {
    setCurrentPosition((prev) => Math.min(prev + move, 0)); // Move right but not beyond 0
  };

  const moveRight = () => {
    setCurrentPosition((prev) => Math.max(prev - move, maxRightConstraint)); // Move left but not beyond constraint
  };

  return (
    <main className="bg-white h-fit py-[8rem] w-screen overflow-x-hidden border ">
      <div className="w-[100%] sm:w-[90%] mb-5 flex justify-between items-center pl-0 p-4 sm:pl-[5rem]">
        <h1 className="text-head capitalize">Industry we target</h1>
        <div className="flex gap-5">
          <button
            onClick={moveLeft}
            className="px-4 py-2 bg-gray-300 rounded-l"
          >
            ←
          </button>

          <button
            onClick={moveRight}
            className="px-4 py-2 bg-gray-300 rounded-r"
          >
            →
          </button>
     




        </div>
      </div>
      <motion.div
        className="px-0 md:px-16 flex gap-8 overflow-x-visible"
        drag="x"
        dragConstraints={{ left: maxRightConstraint, right: 0 }}
        dragElastic={0.5} // Slight elastic effect for a smoother experience
        animate={{ x: currentPosition }} // Sync with button clicks
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      >
        {industries.map((ind, index) => (
          <IndustryCard
            key={index}
            name={ind.name}
            desc={ind.desc}
            image={ind.image}
            expertise={ind.expertise}
          />
        ))}
      </motion.div>
    </main>
  );
};

export default Industries;

interface IndustryCardProps {
  name: string;
  desc: string;
  image: string;
  expertise: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  name,
  desc,
  image,
  expertise,
}) => {
  return (
    <motion.div
      className="w-[650px] h-[100%] flex-shrink-0 flex items-center p-5 "
    >
      <div className="relative rounded-xl overflow-hidden w-[60%] h-[200px] ">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover w-full h-full border"
        />
      </div>
      <div className="w-[100%] p-5 h-[100%] flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-para font-bold">{name}</h2>
          <p className="text-paramin">{desc}</p>
          <div className="flex flex-wrap gap-2 ">
            {expertise.map((exp, index) => (
              <span
                key={index}
                className="px-4 py-2 text-white bg-black rounded-md text-min"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
