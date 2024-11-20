"use client";

import React from "react";
import Image from "next/image";

const Industries = () => {
  return (
    <main className="bg-white z-[1] h-fit flex flex-col justify-between items-start gap-16 py-[8rem] overflow-hidden w-screen">
      <p className="text-head mx-16"> Industries we target</p>
      <AllIndustries />
    </main>
  );
};

export default Industries;

const AllIndustries = () => {
  const industries = [
    {
      name: "Healthcare",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Technology",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Finance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Retail",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Automobile",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
    {
      name: "Education",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in enim ac mattis. Duis blandit dolor eu commodo ultricies. Nulla placerat",
      image: "/images/img.png",
      expertise: ["popular", "expertise", "of this", "industry"],
    },
  ];
  return (
    <div className="px-16 bg-white w-full h-fit flex justify-start items-start gap-[4rem]">
      {industries.map((ind, index) => (
        <Industrycard
          name={ind.name}
          desc={ind.desc}
          image={ind.image}
          expertise={ind.expertise}
          key={index}
        />
      ))}
    </div>
  );
};

interface IndustrycardProps {
  name: string;
  desc: string;
  image: any;
  expertise: string[];
}

const Industrycard: React.FC<IndustrycardProps> = ({
  name,
  desc,
  image,
  expertise,
}) => {
  return (
    <div className="relative flex gap-8 justify-center items-center w-[70rem] h-fit">
      <div className="relative rounded-xl overflow-hidden w-[480px] h-[240px]">
        <Image
          src={image}
          fill
          alt={name}
          className="relative object-cover w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-8">
        <p className="text-subhead font-medium">{name}</p>
        <p className="text-para">{desc}</p>
        <div className="flex justify-start items-center gap-4 w-full h-fit">
          {expertise.map((exp, index) => (
            <span
              key={index}
              className="text-min px-4 py-2 text-white bg-black rounded-md"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
