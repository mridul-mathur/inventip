'use clients';

import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Blog() {
  return (
    <main className="h-full w-full bg-primary">
      <div className="upper-blog">
        <h1 className="text-head capitalize">
          These are some <br /> of our blogs
        </h1>
      </div>
      <div className="blogs m-5 flex h-auto flex-wrap">
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
    <div className="blogs grid h-[55vh] w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="cardb group relative flex h-[100%] flex-col justify-center overflow-hidden p-4">
      <div className="image-box relative h-[80%] w-[80%] overflow-hidden rounded-3xl transition duration-1000">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-1000 group-hover:scale-105 group-hover:blur-[2px]" // Added scale here
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <MdArrowOutward className="icn text-6xl text-primary opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
        </div>
      </div>

      <h1 className="mt-3 text-[1.5rem]">{heading}</h1>

      <p className="translate-y-[100px] transform transition-transform duration-1000 group-hover:translate-y-0">
        {para}
      </p>
    </div>
  );
};
