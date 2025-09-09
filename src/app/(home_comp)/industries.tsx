'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import TextFormatter from '@/components/text-format';

interface IndustryCardProps {
  name: string;
  image: string;
}
const IndustryCard = ({ name, image }: IndustryCardProps) => (
  <div className="group relative col-span-1 flex h-[30vh] items-center justify-center overflow-hidden rounded-xl">
    <img
      src={image}
      alt={`${name} industry`}
      className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute flex h-fit w-full items-center justify-center bg-secondary bg-opacity-30 bg-clip-padding py-2 text-subhead font-semibold text-white backdrop-blur-2xl backdrop-filter transition-opacity duration-500 group-hover:opacity-90">
      <div className="duration-500 group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:bg-clip-text group-hover:text-transparent">
        <TextFormatter text={name} />
      </div>
    </div>
  </div>
);

interface IndustryContent {
  subhead: string;
  title: string;
  cards: [IndustryCardProps];
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
      className="z-[2] flex h-fit min-h-screen w-screen items-center justify-center bg-primary py-16"
    >
      <div className="grid h-full min-h-screen w-full grid-cols-3 items-center justify-center gap-4 p-4">
        {content?.cards &&
          content?.cards.map(
            (industry, index) =>
              index < Math.floor(content.cards.length / 2) && (
                <IndustryCard
                  key={index}
                  name={industry.name}
                  image={industry.image}
                />
              )
          )}
        <div className="col-span-1 flex h-fit flex-col items-center justify-center gap-2">
          <p className="text-center text-subheadmin">We cater to these</p>
          <div className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-center text-max font-bold uppercase text-transparent">
            Industries
          </div>
        </div>

        {content?.cards &&
          content?.cards.map(
            (industry, index) =>
              index >= Math.floor(content?.cards.length / 2) && (
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
