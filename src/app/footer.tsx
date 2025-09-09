'use client';

import React from 'react';
import Link from 'next/link';
import Buttons from './buttons';

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
      title: 'Explore',
      items: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Insights', link: '/insights' },
        { name: 'Careers', link: '/careers' },
      ],
    },
    {
      title: 'Our Expertise',
      items: [
        { name: 'IP Research', link: '/expertise/0' },
        { name: 'IP Strategy', link: '/expertise/1' },
        { name: 'IP Portfolio Management', link: '/expertise/2' },
        { name: 'Open Innovation', link: '/expertise/3' },
      ],
    },
    {
      title: 'More',
      items: [
        { name: 'Contact Us', link: '/contact' },
        { name: 'Terms & Conditions' },
      ],
    },
  ];

  return (
    <main className="absolute z-[2] grid min-h-[24rem] w-full grid-cols-1 gap-12 overflow-hidden rounded-t-[3rem] border border-black bg-primary px-4 py-12 text-black sm:grid-cols-2 sm:px-8 sm:pb-0 lg:grid-cols-5 lg:px-16">
      <div className="logo-div col-span-1 flex w-full flex-col gap-6">
        <Link href={'/'}>
          <img
            src="/images/inventIPblack.png"
            alt="logo"
            className="h-auto w-52"
          />
        </Link>
        <p className="text-para font-semibold">India | United States</p>
      </div>
      <div className="col-span-1 flex w-full flex-col items-start justify-start gap-6 sm:col-span-2 sm:flex-row lg:col-span-4 lg:justify-end lg:gap-12">
        {footerSections.map((section, index) => (
          <div key={index} className="col-span-1 h-full w-fit">
            <h3 className="pb-3 text-para font-medium capitalize">
              {section.title}
            </h3>
            <ul className="flex w-fit list-none flex-col items-start justify-start text-left text-paramin font-light sm:text-para">
              {section.items.map((item, idx) => (
                <Buttons color="dark" underline key={idx}>
                  {item.link ? (
                    <Link href={item.link}>{item.name}</Link>
                  ) : (
                    item.name
                  )}
                </Buttons>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Footer;
