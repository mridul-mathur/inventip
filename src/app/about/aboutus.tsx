import React, { useEffect, useState } from 'react';
import TextFormatter from '@/components/text-format';

interface AboutAboutContent {
  title: string;
  text: string;
  image: string;
}

function Aboutus() {
  const [content, setContent] = useState<AboutAboutContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.About.about))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <main className="h-fit w-full p-4 sm:p-8 md:p-10 lg:p-12 xl:p-16">
      <div className="w-full">
        <h1 className="pb-5 text-head sm:pt-0">{content?.title}</h1>
      </div>
      <div className="flex w-full flex-col items-center gap-6 sm:gap-12 xl:flex-row">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl border bg-slate-300 sm:aspect-[5/2] xl:aspect-square xl:w-2/5">
          <img
            src={content?.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="detail flex w-full flex-col justify-evenly text-pretty py-5 text-justify text-para xl:w-3/5">
          <TextFormatter text={content ? content.text : ''} />
        </div>
      </div>
    </main>
  );
}

export default Aboutus;
