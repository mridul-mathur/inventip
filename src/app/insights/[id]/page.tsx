'use client';

import React from 'react';
import useSWR from 'swr';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

interface BlogProps {
  _id: string;
  title: string;
  brief: string;
  title_image: string;
  segments: Segment[];
}

interface Segment {
  _id: string;
  head: string;
  subhead: string;
  content: string;
  seg_img: string;
}

const BlogPage = () => {
  const params = useParams();
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getdata/blogs`
  );

  if (error) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center'>
        Error fetching blog. Please try again later.
      </div>
    );
  }

  if (!data) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center'>
        Loading...
      </div>
    );
  }

  const blog = data.data.find((b: BlogProps) => b._id === params.id);

  if (!blog) {
    notFound();
  }
  return (
    <main
      data-theme='light'
      key={blog._id}
      className='min-h-screen h-full w-screen px-[16rem] py-[8rem] flex flex-col items-center justify-center space-y-[4rem]'
    >
      <div className='w-full h-fit space-y-6 flex flex-col items-start'>
        <h1 className='text-max font-bold w-full'>{blog.title}</h1>
        <p className='text-para font-light'>{blog.brief}</p>
        <img
          src={blog.title_image}
          alt={blog.title}
          className='w-full object-cover h-[35rem] rounded-[1rem]'
        />
      </div>
      {blog.segments.map((segment: Segment, index: number) => (
        <div
          key={segment._id || index}
          className=' flex flex-col w-full gap-[1rem] '
        >
          {segment.head && (
            <h1 className='text-subhead font-semibold'>{segment.head}</h1>
          )}
          {segment.subhead && (
            <h3 className='text-subheadmin font-light'>{segment.subhead}</h3>
          )}
          <p className='text-para text-justify font-light'>{segment.content}</p>
          {segment.seg_img && segment.seg_img !== 'none' && (
            <div className='w-full h-auto overflow-hidden rounded-[0.5rem] relative my-[2rem]'>
              <img
                src={segment.seg_img}
                alt={segment.head}
                className='w-full h-auto aspect-auto rounded-[0.5rem] object-cover'
              />
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default BlogPage;
