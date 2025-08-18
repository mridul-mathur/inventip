import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  brief: string;
  title_image: string;
  tags: string[];
  id: string;
}

const BlogsCard = ({ title, brief, title_image, id, tags }: BlogCardProps) => {
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
    <Link href={ `insights/${ id }` } className="h-fit w-fit">
      <motion.div
        initial={ { scale: 1 } }
        whileHover="hover"
        className="overflow-hidden relative group max-w-[30rem] w-full h-fit flex flex-col justify-center items-center"
      >
        <div className="w-full h-fit rounded-[1rem] overflow-hidden relative flex justify-center items-center">
          <motion.img
            variants={ imgvar }
            transition={ { duration: 0.3, ease: "easeOut" } }
            src={ title_image }
            alt="title"
            className="w-full h-auto aspect-[3/2] object-cover"
          />
          <motion.svg
            initial={ { opacity: 0, scale: 0.75 } }
            transition={ { duration: 0.25, delay: 0.25, ease: "circInOut" } }
            variants={ svgvar }
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
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">{ title }</h2>
            <div className="flex gap-1">
              { tags.map((tag, index) => (
                <span
                  key={ index }
                  className="text-min font-light bg-gradient-to-r from-accent1/50 to-accent2/50 rounded-md px-2 py-1"
                >
                  { tag }
                </span>
              )) }
            </div>
          </div>
          <motion.p
            ref={ textref }
            initial={ { y: height + 100 } }
            transition={ { duration: 0.4, delay: 0.1, ease: "easeOut" } }
            variants={ textvar }
            className="text-paramin"
          >
            { brief }
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
};

export { BlogsCard };
