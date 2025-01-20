"use client";

import React, { useEffect, useState, useRef } from "react";
import UseFetch from "../../hooks/useFetch";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Segment {
  _id: string;
  head: string;
  subhead: string;
  content: string;
  seg_img: string;
}

interface BlogProps {
  _id: string;
  title: string;
  brief: string;
  title_image: string;
  segments: Segment[];
}

const Resources = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await UseFetch(
          "https://inventip-admin-portal.vercel.app/api"
        );
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center flex-col">
        <p>Something went wrong. Please try refreshing the page.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-primary rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p>No blogs available at the moment. Check back later!</p>
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      className="w-full flex flex-col items-center px-16 gap-8 pt-[4rem]"
    >
      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-12">
        <div className="w-full flex-col flex justify-center items-center gap-6">
          <h1 className="text-max text-center">Writings from our team</h1>
          <p className="w-1/2 text-center text-para">
            here comes some more content about the blogs section like these are
            the top blogs for this category, the latest industry news from us.
          </p>
        </div>
        <Link href={`blogs/${blogs[blogs.length - 1]._id}`} className="w-full">
          <div className="rounded-3xl overflow-hidden w-full h-[32rem] relative flex justify-start items-end">
            <div className="flex justify-center items-center bg-primary/10 bg-clip-padding backdrop-filter backdrop-blur-xl top-[1rem] left-[2rem] px-4 py-2 rounded-xl bg-opacity-10 absolute w-fit gap-3 text-primary">
              NEW
            </div>
            <img
              src={blogs[blogs.length - 1].title_image}
              alt={blogs[blogs.length - 1].title}
              className="w-full h-full object-cover"
            />
            <div className="flex justify-between items-center bg-primary/10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 absolute w-full p-4 px-8 gap-3 text-primary">
              <div className="flex flex-col w-3/4 gap-4">
                <h2 className="text-subhead text-left">
                  {blogs[blogs.length - 1].title}
                </h2>
                <p className="text-paramin text-left">
                  {blogs[blogs.length - 1].brief}
                </p>
              </div>
              <Link href={`blogs/${blogs[blogs.length - 1]._id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="#f7f7f7"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-16 py-12">
        <h1 className="text-head text-left w-2/5 capitalize">
          Here are some more blogs from us
        </h1>
        <div className="w-full grid grid-cols-4 gap-8 h-fit">
          {blogs.map((blog, index: number) => (
            <BlogsCard
              key={index}
              id={blog._id}
              title={blog.title}
              brief={blog.brief}
              title_image={blog.title_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;

interface BlogCardProps {
  title: string;
  brief: string;
  title_image: string;
  id: string;
}

const BlogsCard = ({ title, brief, title_image, id }: BlogCardProps) => {
  const [height, setHeight] = useState<number>(160);
  const imgvar = {
    hover: {
      scale: 1.05,
      filter: "blur(5px)",
    },
  };
  const svgvar = {
    hover: { opacity: 1, scale: 1 },
  };
  const textvar = {
    hover: { y: 0 },
  };
  const textref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (textref.current) {
      setHeight(textref.current.clientHeight);
    }
  }, []);
  return (
    <Link href={`blogs/${id}`} className="h-fit w-fit">
      <motion.div
        initial={{ scale: 1 }}
        whileHover="hover"
        className="overflow-hidden relative group max-w-[20rem] w-full h-fit flex flex-col justify-center items-center"
      >
        <div className="w-full h-fit rounded-[1rem] overflow-hidden relative flex justify-center items-center">
          <motion.img
            variants={imgvar}
            transition={{ duration: 0.3, ease: "easeOut" }}
            src={title_image}
            alt="title"
            className="w-full h-[12rem] object-cover"
          />
          <motion.svg
            initial={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.25, delay: 0.25, ease: "circInOut" }}
            variants={svgvar}
            className="absolute"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="#f7f7f7"
            viewBox="0 0 24 24"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
          </motion.svg>
        </div>
        <div className="w-full flex flex-col h-fit py-4 px-2 gap-4">
          <h2 className="text-para font-semibold">{title}</h2>
          <motion.p
            ref={textref}
            initial={{ y: height + 20 }}
            transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
            variants={textvar}
            className="text-paramin"
          >
            {brief}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
};
