'use client';

import React, { useEffect, useState } from 'react';

interface CareersHeroContent {
  title: string;
  image: string;
}
function CareersHero() {
  const [content, setContent] = useState<CareersHeroContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Careers.hero))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <main className="min-h-screen">
      <div className="mt-[4rem] flex flex-col items-center justify-center sm:mt-[6rem]">
        <h1 className="text-center text-max font-semibold sm:text-max">
          {content?.title}
        </h1>
        <div className="relative mt-10 min-h-[70vh] w-[90vw] overflow-hidden rounded-[2.5rem] bg-slate-300">
          <img
            src={content?.image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
}

export default CareersHero;
