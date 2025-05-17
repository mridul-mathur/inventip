"use client";

import React from "react";
import Buttons from "../buttons";
import { useRouter } from "next/router";

const HomeAbout = () => {
  return (
    <main className="z-[2] bg-primary w-screen h-fit min-h-screen flex flex-col justify-between items-center gap-16 p-4 sm:p-[8rem]">
      <AboutInfo />
      <BentoGrid />
    </main>
  );
};

export default HomeAbout;

const AboutInfo = () => {
  const numbers = [
    { numb: 150, text: "Number of Clients" },
    { numb: 10, text: "Years of Experience" },
  ];
  const aboutdesc =
    "InventIP is a premier consulting firm specializing in patent analytics and open - innovation services.We empower forward - thinking businesses totransform complex IP data into strategic advantages, guided by our ethos: Converge.Disrupt.Outpace. InventIP doesn't just analyze patents—we turn them into momentum. Converge with possibilities.Disrupt the status quo.Outpace what’s next.";
  const slogan = "Converge. Disrupt. Outpace";

  return (
    <div className="w-full h-fit flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-[8rem]">
      <div className="w-full sm:w-2/5 h-full flex flex-col justify-between gap-[2rem] items-start">
        <p className="text-head">{ slogan }</p>
        <Buttons
          color="dark"
          arrow
          underline
          onClick={ () => (window.location.href = "/about") }
        >
          Know About Us
        </Buttons>
      </div>
      <div className="w-full sm:w-3/5 h-fit flex flex-col justify-between items-start gap-[4rem]">
        <p>{ aboutdesc }</p>
        <div className="flex w-full justify-start items-center gap-16">
          { numbers.map((num, index) => (
            <div className="" key={ index }>
              <Numb numb={ num.numb } text={ num.text } />
            </div>
          )) }
        </div>
      </div>
    </div>
  );
};

interface NumbProps {
  numb: number;
  text: string;
}

const Numb: React.FC<NumbProps> = ({ numb, text }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-head font-medium">{ numb }+</p>
      <p className="text-paramin font-medium">{ text }</p>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="w-full h-[64rem] grid sm:grid-cols-1 md:grid-cols-3 grid-rows-7 gap-6">
      <div className="relative overflow-hidden col-span-2 row-span-3 flex justify-center items-center rounded-xl">
        <img
          src="./images/search_patent.jpg"
          alt={ `S` }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-3 flex justify-center items-center rounded-xl">
        <img
          src="./images/comp_mi.jpeg"
          alt={ `C` }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-4 flex justify-center items-center rounded-xl">
        <img
          src="./images/operation.jpeg"
          alt={ `O` }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative border border-accent1 overflow-hidden col-span-1 row-span-1 flex justify-center items-center rounded-xl">
        <p className="text-max uppercase font-bold  bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text text-center">
          SCOPE
        </p>
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-4 flex justify-center items-center rounded-xl">
        <img
          src="./images/portfolio.jpg"
          alt={ `P` }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-3 flex justify-center items-center rounded-xl">
        <img
          src="./images/emerge.jpg"
          alt={ `E` }
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
