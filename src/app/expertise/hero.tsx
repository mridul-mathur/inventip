import React from 'react';

interface HeroProps {
  title: string;
  intro: string;
  image: string;
}

function Hero({ title, intro, image }: HeroProps) {
  return (
    <main className="mt-[2rem] flex h-fit max-h-[48rem] w-screen flex-col items-center justify-start gap-6 p-16">
      <div className="flex h-full w-3/4 flex-col text-center">
        <h1 className="text-head font-semibold md:text-max">{title}</h1>
      </div>
      <div className="relative mt-10 aspect-[2/1] h-auto w-[90vw] overflow-hidden rounded-[2.5rem] bg-slate-300">
        <img
          src={image}
          alt="About Hero"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </main>
  );
}

export default Hero;
