"use client";

import React, { useEffect, useState } from "react";
import TextFormatter from "@/components/text-format";

interface OurCultureContent {
  title: string;
  subhead: string;
  cards: { title: string; description: string }[];
}
const OurCluture = () => {
  const [content, setContent] = useState<OurCultureContent | null>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data.Careers.ourCulture))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);
  
  return (
    <main className="z-[2] bg-primary text-secondary w-screen h-fit flex flex-col justify-between items-center gap-12 p-4 sm:p-[8rem]">
      <div className="flex gap-6 h-fit ">
        <div className="relative items-start justify-start w-2/3 flex flex-col text-left gap-4">
          <h1 className="text-head">
            <TextFormatter text={content?.title || ""} />
          </h1>
          <h1 className="text-para ">
            <TextFormatter text={content?.subhead || ""} />
          </h1>
        </div>
      </div>
      <hr className="bottom-0 w-full h-[2px] bg-gradient-to-r from-accent1 to-accent2" />
      <div className="flex min-h-auto w-full flex-col p-2 gap-12 sm:flex-row">
        <div className="relative min-h-auto flex w-1/2 flex-col gap-4  pt-6">
          <h3 className="text-subheadmin">
            <TextFormatter text={content?.cards[0].title || ""} />
          </h3>
          <p className="text-para ">
            <TextFormatter text={content?.cards[0].description || ""} />
          </p>
        </div>
        <div className="relative min-h-auto flex w-1/2 flex-col gap-4  pt-6">
          <h3 className="text-subheadmin">
            <TextFormatter text={content?.cards[1].title || ""} />
          </h3>
          <p className="text-para">
            <TextFormatter text={content?.cards[1].description || ""} />
          </p>
        </div>
      </div>
    </main>
  );
};

export default OurCluture;
