import React, { useEffect, useState } from "react";
import TextFormatter from "@/components/text-format";

interface AboutAboutContent {
  title: string;
  text: string;
  image: string;
}

function aboutus() {
  const [content, setContent] = useState<AboutAboutContent | null>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data.About.about))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  return (
    <main className="min-h-[90vh] w-full p-4 sm:p-16">
      <div className=" w-full ">
        <h1 className="text-subhead pb-5 sm:pt-0 ">{content?.title}</h1>
      </div>
      <div className="flex w-full items-center gap-12 flex-row">
        <div className="aspect-square w-2/5 border relative overflow-hidden rounded-3xl bg-slate-300">
          <img
            src={content?.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-pretty detail w-3/5 text-para py-5 flex flex-col justify-evenly">
          <TextFormatter text={content ? content.text : ""} />
        </div>
      </div>
    </main>
  );
}

export default aboutus;
