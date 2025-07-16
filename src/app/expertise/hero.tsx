import React from "react";

interface HeroProps {
  title: string;
  intro: string;
  image: string;
}

function Hero({ title, intro, image }: HeroProps) {
  return (
    <main className="w-screen max-h-screen h-fit p-16 my-[2rem] gap-6 flex flex-col justify-start items-center">
      <div className="text-center h-full w-3/4 flex flex-col">
        <h1 className="text-head font-semibold md:text-max">{title}</h1>
        <p className="mt-5 text-subhead font-medium leading-[125%]">{intro}</p>
      </div>
      <div className="w-[90vw] h-auto overflow-hidden relative aspect-[2/1] bg-slate-300 mt-10 rounded-[2.5rem]">
        <img
          src={image}
          alt="About Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </main>
  );
}

export default Hero;
