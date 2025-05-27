"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextFormatter from "@/components/text-format";

interface IndustryCardProps {
  name: string;
  image: string;
}
const IndustryCard = ({ name, image }: IndustryCardProps) => (
  <div className="col-span-1 flex justify-center items-center rounded-xl h-[30vh] relative group overflow-hidden">
    <img
      src={ image }
      alt={ `${ name } industry` }
      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
    />
    <div className="bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute w-full flex justify-center items-center text-white text-subhead font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90">
      <div className="group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500">
        <TextFormatter text={ name } />
      </div>
    </div>
  </div>
);

interface IndustryContent {
  subhead: string,
  title: string,
  cards: [IndustryCardProps]
}
const Industries = () => {
  const [content, setContent] = useState<IndustryContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Home.industries))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <motion.main
      whileHover="hover"
      className="z-[2] bg-primary h-fit min-h-screen w-screen flex justify-center items-center py-16"
    >
      <div className="grid grid-cols-3 gap-4 w-full h-full min-h-screen p-4 justify-center items-center">
        { content?.cards && content?.cards.map(
          (industry, index) =>
            index < Math.floor(content.cards.length / 2) && (
              <IndustryCard
                key={ index }
                name={ industry.name }
                image={ industry.image }
              />
            )
        ) }
        <div className="col-span-1 flex flex-col items-center justify-center gap-2 h-fit">
          <p className="text-para text-center">We cater to these</p>
          <div className="text-max uppercase font-bold bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text text-center">
            Industries
          </div>
        </div>

        { content?.cards && content?.cards.map(
          (industry, index) =>
            index >= Math.floor(content?.cards.length / 2) && (
              <IndustryCard
                key={ index }
                name={ industry.name }
                image={ industry.image }
              />
            )
        ) }
      </div>
    </motion.main>
  );
};

export default Industries;
