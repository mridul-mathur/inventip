'use client';

import React, { useEffect, useState } from 'react';
import TextFormatter from '@/components/text-format';

const WhyUs = () => {
  const [whyJoinUs, setWhyJoinUs] = useState<any>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(res => res.json())
      .then(data => setWhyJoinUs(data.Careers.whyJoinUs));
  }, []);

  if (!whyJoinUs) return null;

  return (
    <main className="z-[2] flex h-fit min-h-screen w-screen flex-col items-center justify-between gap-16 bg-primary p-4 sm:p-[8rem]">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="mb-4 text-head text-secondary">
          <TextFormatter text={whyJoinUs.title} />
        </h1>
        <h3 className="w-3/4 text-center text-para">
          <TextFormatter text={whyJoinUs.subhead} />
        </h3>
      </div>
      <div className="flex h-fit flex-col gap-12 md:flex-row">
        <img
          src={whyJoinUs.image}
          alt="Join Us @InventIP"
          className="aspect-[3/5] w-[40%] rounded-[2.5rem] bg-slate-300"
        />
        <div className="grid h-fit w-[60%] grid-cols-1 gap-12">
          {whyJoinUs.reasons.map(
            (reason: { title: string; description: string }, index: number) => (
              <div key={index} className="relative flex flex-col gap-2">
                <hr className="absolute -left-2 h-full w-[2px] bg-gradient-to-r from-accent1 to-accent2" />
                <h3 className="text-subheadmin text-secondary">
                  <TextFormatter text={reason.title} />
                </h3>
                <p className="text-justify text-para text-secondary">
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
