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
    { numb: 50, text: "Satisfied Clients" },
    { numb: 100, text: "Successful Businesses" },
    { numb: 10, text: "Years of Experience" },
  ];
  const aboutdesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat dui nec eros porta, aliquam lobortis libero vehicula. Vivamus imperdiet, dolor vel mattis pretium, turpis ligula hendrerit lacus, ut convallis tellus lorem ac lorem.";
  const slogan = "Slogan and a line about why choose us and more.";

  return (
    <div className="w-full h-fit flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-[8rem]">
      <div className="w-full sm:w-2/5 h-full flex flex-col justify-between gap-[2rem] items-start">
        <p className="text-head">{slogan}</p>
        <Buttons
          color="dark"
          arrow
          underline
          onClick={() => (window.location.href = "/about")}
        >
          Know About Us
        </Buttons>
      </div>
      <div className="w-full sm:w-3/5 h-fit flex flex-col justify-between items-start gap-[4rem]">
        <p>{aboutdesc}</p>
        <div className="flex w-full justify-between items-center">
          {numbers.map((num, index) => (
            <div className="w-[100%]" key={index}>
              <Numb numb={num.numb} text={num.text} />
            </div>
          ))}
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
      <p className="text-head font-medium">{numb}+</p>
      <p className="text-paramin font-medium">{text}</p>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="w-full h-[95vh] grid sm:grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 row-span-3 flex justify-center items-center border border-[#191919] rounded-xl">
        <p>Some Text 1</p>
      </div>
      <div className="col-span-1 row-span-4 flex justify-center items-center border border-[#191919] rounded-xl">
        <p>Some Text 2</p>
      </div>
      <div className="col-span-1 row-span-3 flex justify-center items-center border border-[#191919] rounded-xl">
        <p>Some Text 3</p>
      </div>
      <div className="col-span-1 row-span-3 flex justify-center items-center border border-[#191919] rounded-xl">
        <p>Some Text 4</p>
      </div>
      <div className="col-span-1 row-span-3 flex justify-center items-center border border-[#191919] rounded-xl">
        <p>Some Text 5</p>
      </div>
      <div className="col-span-1 row-span-2 flex justify-center items-center border border-[#191919] rounded-xl">
        <p>Some Text 6</p>
      </div>
    </div>
  );
};
