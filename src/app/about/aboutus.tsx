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
      .then((response) => response.json())
      .then((data) => setContent(data.About.about))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);

  return (
    <main className='h-fit w-full p-4 xl:p-16 lg:p-12 md:p-10 sm:p-8'>
      <div className='w-full'>
        <h1 className='text-head pb-5 sm:pt-0 '>{content?.title}</h1>
      </div>
      <div className='flex w-full items-center sm:gap-12 gap-6 xl:flex-row flex-col'>
        <div className='xl:aspect-square sm:aspect-[5/2] aspect-square xl:w-2/5 w-full border relative overflow-hidden rounded-3xl bg-slate-300'>
          <img
            src={content?.image}
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        <div className='text-pretty detail xl:w-3/5 w-full text-para py-5 flex flex-col text-justify justify-evenly'>
          <TextFormatter text={content ? content.text : ''} />
        </div>
      </div>
    </main>
  );
}

export default Aboutus;
