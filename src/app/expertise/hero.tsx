import React from "react";

interface HeroProps {
  title: string;
  intro: string;
  image: string;
}

function Hero({ title, intro, image }: HeroProps) {
  return (
    <main className="w-screen h-screen p-16 my-[2rem] flex justify-between items-center">
      <div className="h-full w-7/12 flex flex-col">
        <h1 className="text-head md:text-max">{title}</h1>
        <p className="mt-5 text-para leading-6">{intro}</p>
      </div>
      <div className=" h-full w-5/12 flex justify-center items-center">
        <div className="h-full w-full relative overflow-hidden border rounded-[2rem] bg-slate-300">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
