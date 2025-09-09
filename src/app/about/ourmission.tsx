import React, { useEffect, useState } from 'react';
import TextFormatter from '@/components/text-format';

interface AboutMissionContent {
  title: string;
  text1: string;
  text2: string;
  image: string;
}

function Ourmission() {
  const [content, setContent] = useState<AboutMissionContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then((response) => response.json())
      .then((data) => setContent(data.About.mission))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);
  return (
    <main className='min-h-[100vh] border w-full  p-4 sm:p-16'>
      <div className=' w-full'>
        <h1 className='text-head'>
          <TextFormatter text={content?.title || ''} />
        </h1>
      </div>
      <div className='flex min-h-auto w-full mt-8 flex-col p-2 xl:flex-row'>
        <div className='h-auto w-full pr-0 pt-10 xl:pr-20'>
          <p className='text-para text-justify'>
            <TextFormatter text={content?.text1 || ''} />
          </p>
        </div>
        <div className='w-full sm:hidden overflow-hidden aspect-[2/1] border mt-[50px] bg-slate-300 rounded-[2rem]'>
          <img
            src={content?.image}
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        <div className='min-h-auto w-[100%] pl-0 pt-10 p-2 xl:pl-20 '>
          <p className='text-para text-justify'>
            <TextFormatter text={content?.text2 || ''} />
          </p>
        </div>
      </div>
      <div className='w-full max-sm:hidden overflow-hidden aspect-[4/1] border mt-[50px] bg-slate-300 rounded-[2rem]'>
        <img
          src={content?.image}
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
    </main>
  );
}

export default Ourmission;
