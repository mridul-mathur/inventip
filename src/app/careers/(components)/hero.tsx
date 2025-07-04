"use client";

import React, { useEffect, useState } from "react";

interface CareersHeroContent {
  title: string;
  image: string;
}
function CareersHero() {
  const [content, setContent] = useState<CareersHeroContent | null>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data.Careers.hero))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  return (
    <main className="min-h-screen">
      <div className="mt-[15vh] sm:mt-[20vh] flex flex-col items-center justify-center">
        <h1 className="text-max font-semibold sm:text-max text-center">
          {content?.title}
        </h1>
        <div className="w-[90vw] min-h-[70vh] bg-slate-300 mt-10 rounded-[2.5rem]"></div>
      </div>
    </main>
  );
}

export default CareersHero;
