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
    <main className='z-[2] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 overflow-hidden py-12 sm:px-8 px-4 lg:px-16 border min-h-[24rem] bg-primary text-black rounded-t-[3rem] border-black grid w-full absolute sm:pb-0'>
      <div className='logo-div col-span-1 w-full flex flex-col gap-6'>
        <Link href={'/'}>
          <img
            src='/images/inventIPblack.png'
            alt='logo'
            className='w-52 h-auto'
          />
        </Link>
        <p className='text-para font-semibold'>India | United States</p>
      </div>
      <div className='flex flex-col sm:flex-row col-span-1 w-full sm:col-span-2 lg:col-span-4 items-start justify-start lg:justify-end gap-6 lg:gap-12'>
        {footerSections.map((section, index) => (
          <div key={index} className='col-span-1 w-fit h-full'>
            <h3 className='pb-3 capitalize text-para font-medium'>
              {section.title}
            </h3>
            <ul className='w-fit flex flex-col items-start justify-start list-none text-paramin text-left sm:text-para font-light'>
              {section.items.map((item, idx) => (
                <Buttons color='dark' underline key={idx}>
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
