"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type FooterSection = {
  title: string;
  items: {
    name: string;
    link?: string;
  }[];
};

const Footer: React.FC = () => {
  // data 

  const footerSections: FooterSection[] = [
    {
      title: "Menu",
      items: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Expertise", link: "/expertise" },
        { name: "Resources", link: "/resources" },
        { name: "Careers", link: "/careers" },
      ],
    },
    {
      title: "Our Expertise",
      items: [
        { name: "IP Strategy" },
        { name: "IP Research" },
        { name: "IP Portfolio Management" },
        { name: "Open Innovation" },
      ],
    },
    {
      title: "More",
      items: [
        { name: "Contact Us", link: "/contact" },
        { name: "FAQs" },
        { name: "Terms & Conditions" },
      ],
    },
  ];

  return (
<main className="z-[2] border min-h-[40vh] bg-white text-black rounded-t-[3rem] border-black flex w-full absolute flex-col sm:flex-row pb-5 sm:pb-0">
      <div className="logo-div w-[80%] p-5">
      <h1 className="text-head mt-[2rem] ml-0 sm:mt-[5rem] sm:ml-[6rem]">iNvoat</h1>
      </div>
      <div className="menu-div w-[100%] flex justify-center items-center">
      <div className="mid flex gap-4 sm:gap-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="pb-3 capitalize font-extrabold">{section.title}</h3>
              <ul className="capitalize">
                {section.items.map((item, idx) => (
                    <li key={idx} className="text-min sm:text-paramin leading-6">

                    {item.link ? (
                      <Link href={item.link}>{item.name}</Link>
                    ) : (
                      item.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Footer;
