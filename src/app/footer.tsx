"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type FooterSection = {
  title: string;
  items: {
    name: string;
    link?: string; 
  }[];
};

const Footer: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector("#footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

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
        { name: "FAQs"   },
        { name: "Terms & Conditions" },
      ],
    },
  ];

  return (
    <motion.footer
      id="footer"
      className="border h-[40vh] bg-white text-black rounded-t-[3rem] border-black flex"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 1 }}
    >
      <div className="logo-div w-[80%] p-5">
        <h1 className="text-head mt-[5rem] ml-[6rem]">iNvoat</h1>
      </div>
      <div className="menu-div w-[100%] flex justify-center items-center">
        <div className="mid flex gap-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="pb-3 capitalize font-extrabold">{section.title}</h3>
              <ul className="capitalize">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-paramin leading-6">
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
    </motion.footer>
  );
};

export default Footer;
