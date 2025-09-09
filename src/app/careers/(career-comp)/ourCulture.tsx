'use client';

import React, { useEffect, useState } from 'react';
import TextFormatter from '@/components/text-format';

interface OurCultureContent {
  title: string;
  subhead: string;
  cards: { title: string; description: string }[];
}
const OurCluture = () => {
  const [content, setContent] = useState<OurCultureContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Careers.ourCulture))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <main className="z-[2] flex h-fit w-screen flex-col items-center justify-between gap-12 bg-primary p-4 text-secondary sm:p-[8rem] sm:py-[4rem]">
      <div className="flex h-fit gap-6">
        <div className="relative flex w-2/3 flex-col items-start justify-start gap-4 text-left">
          <h1 className="text-head">
            <TextFormatter text={content?.title || ''} />
          </h1>
          <h1 className="text-justify text-para">
            <TextFormatter text={content?.subhead || ''} />
          </h1>
        </div>
      </div>
      <hr className="bottom-0 h-[2px] w-full bg-gradient-to-r from-accent1 to-accent2" />
      <div className="min-h-auto flex w-full flex-col gap-12 p-2 sm:flex-row">
        <div className="min-h-auto relative flex w-1/2 flex-col gap-4">
          <h3 className="text-subheadmin">
            <TextFormatter text={content?.cards[0].title || ''} />
          </h3>
          <p className="text-justify text-para">
            <TextFormatter text={content?.cards[0].description || ''} />
          </p>
        </div>
        <div className="min-h-auto relative flex w-1/2 flex-col gap-4">
          <h3 className="text-subheadmin">
            <TextFormatter text={content?.cards[1].title || ''} />
          </h3>
          <p className="text-justify text-para">
            <TextFormatter text={content?.cards[1].description || ''} />
          </p>
        </div>
      </div>
    </main>
  );
};

export default OurCluture;
