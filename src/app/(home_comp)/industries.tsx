"use client";

import React from "react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  name: string;
  image: string;
}
const IndustryCard = ({ name, image }: IndustryCardProps) => (
  <div className="col-span-1 flex justify-center items-center rounded-xl h-[30vh] relative group overflow-hidden">
    <img
      src={image}
      alt={`${name} industry`}
      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
    />
    <div className="bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute w-full flex justify-center items-center text-white text-subhead font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90">
      <div className="group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500">
        {name}
      </div>
    </div>
  </div>
);

const Industries = () => {
  const industries = [
    { name: "Healthcare", image: "/images/healthcare.jpg" },
    { name: "Technology", image: "/images/technology.webp" },
    { name: "Finance", image: "/images/fintech.webp" },
    { name: "Retail", image: "/images/retail.png" },
    { name: "Manufacturing", image: "/images/manu.jpg" },
    { name: "Education", image: "/images/edu.jpg" },
    { name: "Hospitality", image: "/images/hosp.jpg" },
    { name: "Real Estate", image: "/images/realestate.jpeg" },
  ];

  return (
    <motion.main
      whileHover="hover"
      className="z-[2] bg-primary h-fit min-h-screen w-screen flex justify-center items-center py-16"
    >
      <div className="grid grid-cols-3 gap-4 w-full h-full min-h-screen p-4 justify-center items-center">
        {industries.map(
          (industry, index) =>
            index < Math.floor(industries.length / 2) && (
              <IndustryCard
                key={index}
                name={industry.name}
                image={industry.image}
              />
            )
        )}
        <div className="col-span-1 flex flex-col items-center justify-center gap-2 h-fit">
          <p className="text-para text-center">We cater to these</p>
          <div className="text-max uppercase font-bold bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text text-center">
            Industries
          </div>
        </div>

        {industries.map(
          (industry, index) =>
            index >= Math.floor(industries.length / 2) && (
              <IndustryCard
                key={index}
                name={industry.name}
                image={industry.image}
              />
            )
        )}
      </div>
    </motion.main>
  );
};

export default Industries;
