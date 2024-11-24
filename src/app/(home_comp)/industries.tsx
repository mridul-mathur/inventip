"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    {
      name: "Healthcare",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Technology",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Finance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Retail",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Automobile",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Education",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
  ];

  const cardWidth = 650; // Width of one card
  const totalCards = industries.length; // Total number of cards
  const viewportWidth = 1200; // Approximate viewport width
  const dragLeftConstraint = -(cardWidth * totalCards - viewportWidth); // Dynamic drag constraint

  return (
    <main className="bg-white z-[1] h-fit py-[8rem] w-screen overflow-x-hidden">
      <p className="text-head mx-16 mb-8">Industries we target</p>
      <motion.div
        className="px-16 flex gap-8 overflow-x-visible"
        drag="x"
        dragConstraints={{ left: dragLeftConstraint, right: 0 }}
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
