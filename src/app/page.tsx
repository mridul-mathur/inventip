'use client';

import React, { useState, useEffect } from 'react';
import Hero from '../app/(home_comp)/hero';
import HomeAbout from './(home_comp)/about';
import Industries from './(home_comp)/industries';
import Inovation from './(home_comp)/inovation';
import Certified from './certified';
import Whattheysay from './(home_comp)/whattheysay';
import { ExpertiseContent } from './(home_comp)/inovation';

export default function Home() {
  const [content, setContent] = useState<ExpertiseContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Home.expertise))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <main className="relative flex w-full flex-col items-center justify-center px-16">
      <Hero />
      <HomeAbout />
      <Industries />
      {content && <Inovation title={content.title} cards={content.cards} />}
      <Certified />
      <Whattheysay />
    </main>
  );
}
