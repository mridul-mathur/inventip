"use clients";

import React from 'react';
import { MdArrowOutward } from "react-icons/md";


function Blog() {
  return (
    <main className="h-full w-full bg-primary ">
      <div className="upper-blog">
        <h1 className="text-head capitalize">
          These are some <br /> of our blogs
        </h1>
      </div>
      <div className="blogs flex flex-wrap h-auto  m-5">
        <Allblog />
      </div>
    </main>
  );
}

export default Blog;

const Allblog = () => {
  const blogs = [
    {
      heading: 'Healthcare',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.',
      image: '/images/img.png',
    },
    {
      heading: 'Fitness',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing tempor in.',
      image: '/images/img.png',
    },
    {
      heading: 'Wellness',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.',
      image: '/images/img.png',
    },
    {
      heading: 'Nutrition',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.',
      image: '/images/img.png',
    },
    {
      heading: 'Lifestyle',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.',
      image: '/images/img.png',
    },
  ];

  const visibleBlogs = blogs.slice(0, 3);

  return (
    <div className="blogs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full  h-[55vh]">
      {visibleBlogs.map((item, index) => (
        <BlogsCard
          key={index}
          heading={item.heading}
          para={item.para}
          image={item.image}
        />
      ))}
    </div>
  );
};

interface BlogsCardProps {
  heading: string;
  para: string;
  image: string;
}

const BlogsCard: React.FC<BlogsCardProps> = ({ heading, para, image }) => {
  return (
    <div className="cardb h-[100%] flex flex-col justify-center p-4 overflow-hidden relative group">
      <div className="image-box h-[80%] w-[80%] rounded-3xl relative overflow-hidden transition duration-1000">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-1000 group-hover:blur-[2px] group-hover:scale-105"  // Added scale here
        />

        <div className="div absolute inset-0 flex items-center justify-center z-10">
          <MdArrowOutward className="icn text-primary text-6xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
        </div>
      </div>

      <h1 className="mt-3 text-[1.5rem]">{heading}</h1>

      <p className="transform translate-y-[100px] transition-transform duration-1000 group-hover:translate-y-0">
        {para}
      </p>
    </div>
  );
};
