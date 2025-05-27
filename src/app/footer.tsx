"use client";

import React from "react";
import Link from "next/link";
import Buttons from "./buttons";

type FooterSection = {
  title: string;
  items: {
    name: string;
    link?: string;
  }[];
};

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Menu",
      items: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Insights", link: "/insights" },
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
        { name: "Terms & Conditions" },
      ],
    },
  ];

  return (
    <main className="z-[2] border min-h-[40vh] bg-primary text-black rounded-t-[3rem] border-black flex w-full absolute flex-col sm:flex-row pb-5 sm:pb-0">
      <div className="logo-div w-[80%] p-12">
        <Link href={ "/" }>
          <img src="./images/inventIPblack.png" alt="logo" className="w-52 h-auto" />
        </Link>
      </div>
      <div className=" w-[100%] flex justify-center items-center">
        <div className="flex gap-4 sm:gap-16">
          { footerSections.map((section, index) => (
            <div key={ index }>
              <h3 className="pb-3 capitalize text-para font-medium">
                { section.title }
              </h3>
              <ul className="text-paramin sm:text-para font-light">
                { section.items.map((item, idx) => (
                  <Buttons color="dark" underline key={ idx }>
                    { item.link ? (
                      <Link href={ item.link }>{ item.name }</Link>
                    ) : (
                      item.name
                    ) }
                  </Buttons>
                )) }
              </ul>
            </div>
          )) }
        </div>
      </div>
    </main>
  );
};

export default Footer;
