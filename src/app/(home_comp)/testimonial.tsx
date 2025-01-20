"use clients";

import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Google",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibhendrerit.",
      image: "/images/img.png",
    },
    {
      name: "Jane Doe",
      company: "Facebook",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibhendrerit.",
      image: "/images/img.png",
    },
  ];
  return (
    <main className="bg-primary z-[2] h-fit flex flex-col justify-between items-start gap-16 py-[8rem] overflow-hidden w-screen">
      <p className="text-head mx-16"> Testimonials </p>
      <div className="px-16 bg-primary w-full h-fit flex justify-start items-start gap-[4rem]">
        {testimonials.map((testi, index) => (
          <TestiCards
            name={testi.name}
            company={testi.company}
            desc={testi.desc}
            image={testi.image}
            key={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Testimonial;

interface TestimonialCardProps {
  name: string;
  company: string;
  desc: string;
  image: string;
}

const TestiCards = ({ name, company, desc, image }: TestimonialCardProps) => {
  return (
    <div className="flex w-[32rem] justify-between gap-8">
      <div className="rounded-xl overflow-hidden w-[50rem] h-[15rem]">
        <Image
          src={image}
          fill
          alt={name}
          className="relative object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start">
        <p className="text-para ">{desc}</p>
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="text-paramin font-medium">{name}</p>
          <p className="text-min font-normal">{company}</p>
        </div>
      </div>
    </div>
  );
};
