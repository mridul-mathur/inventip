'use client';

import React, { useEffect, useState } from 'react';
import TextFormatter from '@/components/text-format';

const WhyUs = () => {
  const [whyJoinUs, setWhyJoinUs] = useState<any>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then((res) => res.json())
      .then((data) => setWhyJoinUs(data.Careers.whyJoinUs));
  }, []);

  if (!whyJoinUs) return null;

  return (
    <main className='z-[2] bg-primary w-screen h-fit min-h-screen flex flex-col justify-between items-center gap-16 p-4 sm:p-[8rem]'>
      <div className='flex w-full flex-col gap-4 items-center justify-center'>
        <h1 className='text-head text-secondary mb-4'>
          <TextFormatter text={whyJoinUs.title} />
        </h1>
        <h3 className='text-para text-center  w-3/4'>
          <TextFormatter text={whyJoinUs.subhead} />
        </h3>
      </div>
      <div className='flex md:flex-row h-fit flex-col gap-12'>
        <img
          src={whyJoinUs.image}
          alt='Join Us @InventIP'
          className='w-[40%] aspect-[3/5] bg-slate-300 rounded-[2.5rem]'
        />
        <div className='grid grid-cols-1 w-[60%] h-fit gap-12'>
          {whyJoinUs.reasons.map(
            (reason: { title: string; description: string }, index: number) => (
              <div key={index} className='relative flex flex-col gap-2'>
                <hr className='-left-2 absolute w-[2px] h-full bg-gradient-to-r from-accent1 to-accent2' />
                <h3 className='text-subheadmin  text-secondary '>
                  <TextFormatter text={reason.title} />
                </h3>
                <p className='text-para text-secondary text-justify'>
                  <TextFormatter text={reason.description} />
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
