'use client';

import React, { useState, useEffect } from 'react';
import Buttons from '../buttons';
import TextFormatter from '@/components/text-format';

interface AboutContent {
  title: string;
  text: string;
  cta: {
    text: string;
    link: string;
  };
  numbers: Array<{
    number: number;
    text: string;
  }>;
}

interface BentoContent {
  text: string;
  image: string;
}

const HomeAbout = () => {
  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then((response) => response.json())
      .then((data) => setContent(data.Home.about))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);

  return (
    <section
      data-theme='light'
      style={{ minHeight: '100vh' }}
      className='z-[2] bg-primary w-screen h-fit flex flex-col justify-between items-center gap-16 p-4 sm:p-[8rem]'
    >
      <div className='w-full h-fit flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-[8rem]'>
        <div className='w-full sm:w-2/5 h-full flex flex-col justify-between gap-[2rem] items-start'>
          <p className='text-head'>{content?.title}</p>
          <Buttons
            color='dark'
            arrow
            underline
            onClick={() => (window.location.href = '/about')}
          >
            Know About Us
          </Buttons>
        </div>
        <div className='w-full text-para sm:w-3/5 h-fit flex flex-col justify-between items-start gap-[4rem]'>
          <p>
            <TextFormatter text={content?.text || ''} />
          </p>
          <div className='flex w-full justify-start items-center gap-16'>
            {content?.numbers.map((number, index) => (
              <div className='' key={index}>
                <Numb numb={number.number} text={number.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <BentoGrid />
    </section>
  );
};

export default HomeAbout;

interface NumbProps {
  numb: number;
  text: string;
}

const Numb: React.FC<NumbProps> = ({ numb, text }) => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-head font-medium'>{numb}+</p>
      <p className='text-para font-medium'>{text}</p>
    </div>
  );
};

const BentoGrid = () => {
  const [content, setContent] = useState<BentoContent[] | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then((response) => response.json())
      .then((data) => setContent(data.Home.about.bento))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);

  if (!content) {
    return (
      <div className='w-full h-[48rem] flex items-center justify-center'>
        Loading...
      </div>
    );
  }

  return (
    <div className='text-center w-full h-[48rem] grid sm:grid-cols-1 md:grid-cols-3 grid-rows-7 gap-6'>
      <div className='relative overflow-hidden col-span-2 row-span-3 flex justify-center items-center rounded-xl'>
        <img
          src={content?.[0].image}
          alt={`S`}
          className='w-full h-full object-cover object-center'
        />
        <div className='bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute bottom-0 w-full flex justify-center items-center text-white text-para font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90'>
          <div className='group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500'>
            <TextFormatter text={content?.[0].text} />
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden col-span-1 row-span-3 flex justify-center items-center rounded-xl'>
        <img
          src={content?.[1].image}
          alt={`C`}
          className='w-full h-full object-cover object-center'
        />
        <div className='bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute w-full bottom-0 flex justify-center items-center text-white text-para font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90'>
          <div className='group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500'>
            <TextFormatter text={content?.[1].text} />
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden col-span-1 row-span-4 flex justify-center items-center rounded-xl'>
        <img
          src={content?.[2].image}
          alt={`O`}
          className='w-full h-full object-cover object-center'
        />
        <div className='bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute w-full bottom-0 flex justify-center items-center text-white text-para font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90'>
          <div className='group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500'>
            <TextFormatter text={content?.[2].text} />
          </div>
        </div>
      </div>
      <div className='relative border border-accent1 overflow-hidden col-span-1 row-span-1 flex justify-center items-center rounded-xl'>
        <p className='text-max uppercase font-bold  bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text text-center'>
          SCOPE
        </p>
      </div>
      <div className='relative overflow-hidden col-span-1 row-span-4 flex justify-center items-center rounded-xl'>
        <img
          src={content?.[4].image}
          alt={`E`}
          className='w-full h-full object-cover object-center'
        />
        <div className='bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute w-full flex bottom-0 justify-center items-center text-white text-para font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90'>
          <div className='group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500'>
            <TextFormatter text={content?.[4].text} />
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden col-span-1 row-span-3 flex justify-center items-center rounded-xl'>
        <img
          src={content?.[3].image}
          alt={`P`}
          className='w-full h-full object-cover object-right'
        />
        <div className='bg-secondary h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 absolute w-full flex bottom-0 justify-center items-center text-white text-para font-semibold py-2 transition-opacity duration-500 group-hover:opacity-90'>
          <div className='group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500'>
            <TextFormatter text={content?.[3].text} />
          </div>
        </div>
      </div>
    </div>
  );
};
