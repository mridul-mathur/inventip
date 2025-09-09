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
      .then(response => response.json())
      .then(data => setContent(data.About.mission))
      .catch(error => console.error('Error fetching content:', error));
  }, []);
  return (
    <main className="min-h-[100vh] w-full border p-4 sm:p-16">
      <div className="w-full">
        <h1 className="text-head">
          <TextFormatter text={content?.title || ''} />
        </h1>
      </div>
      <div className="min-h-auto mt-8 flex w-full flex-col p-2 xl:flex-row">
        <div className="h-auto w-full pr-0 pt-10 xl:pr-20">
          <p className="text-justify text-para">
            <TextFormatter text={content?.text1 || ''} />
          </p>
        </div>
        <div className="mt-[50px] aspect-[2/1] w-full overflow-hidden rounded-[2rem] border bg-slate-300 sm:hidden">
          <img
            src={content?.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-h-auto w-[100%] p-2 pl-0 pt-10 xl:pl-20">
          <p className="text-justify text-para">
            <TextFormatter text={content?.text2 || ''} />
          </p>
        </div>
      </div>
      <div className="mt-[50px] aspect-[4/1] w-full overflow-hidden rounded-[2rem] border bg-slate-300 max-sm:hidden">
        <img
          src={content?.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
}

export default Ourmission;
