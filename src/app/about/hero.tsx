import React, { useEffect, useState } from "react";

interface AboutHeroContent {
  title: string;
  image: string;
}
function Hero() {
  const [content, setContent] = useState<AboutHeroContent | null>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data.About.hero))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  return (
    <main className="min-h-screen">
      <div className="pt-[15vh] sm:pt-[20vh] flex flex-col items-center justify-center">
        <h1 className="text-max font-semibold sm:text-max text-center">
          {content?.title}
        </h1>
        <div className="w-[90vw] overflow-hidden relative aspect-[3/1] bg-slate-300 mt-10 rounded-[2.5rem]">
          <img src={content?.image} alt="About Hero" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
