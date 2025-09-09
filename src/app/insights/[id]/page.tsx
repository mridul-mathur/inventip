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
      <div className="flex min-h-screen w-full items-center justify-center">
        Error fetching blog. Please try again later.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
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
      data-theme="light"
      key={blog._id}
      className="flex h-full min-h-screen w-screen flex-col items-center justify-center space-y-[4rem] px-[16rem] py-[8rem]"
    >
      <div className="flex h-fit w-full flex-col items-start space-y-6">
        <h1 className="w-full text-max font-bold">{blog.title}</h1>
        <p className="text-para font-light">{blog.brief}</p>
        <img
          src={blog.title_image}
          alt={blog.title}
          className="h-[35rem] w-full rounded-[1rem] object-cover"
        />
      </div>
      {blog.segments.map((segment: Segment, index: number) => (
        <div
          key={segment._id || index}
          className="flex w-full flex-col gap-[1rem]"
        >
          {segment.head && (
            <h1 className="text-subhead font-semibold">{segment.head}</h1>
          )}
          {segment.subhead && (
            <h3 className="text-subheadmin font-light">{segment.subhead}</h3>
          )}
          <p className="text-justify text-para font-light">{segment.content}</p>
          {segment.seg_img && segment.seg_img !== 'none' && (
            <div className="relative my-[2rem] h-auto w-full overflow-hidden rounded-[0.5rem]">
              <img
                src={segment.seg_img}
                alt={segment.head}
                className="!aspect-auto h-full w-full rounded-[1rem]"
              />
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default BlogPage;
