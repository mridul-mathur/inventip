"use client";

import React, { useState, useEffect } from "react";
import Hero from "../app/(home_comp)/hero";
import HomeAbout from "./(home_comp)/about";
import Industries from "./(home_comp)/industries";
import Showreel from "./(home_comp)/showreel";
import Inovation from "./(home_comp)/inovation";
import Certified from "./certified";
import Whattheysay from "./(home_comp)/whattheysay";
import { ExpertiseContent } from "./(home_comp)/inovation";

export default function Home() {
  const [content, setContent] = useState<ExpertiseContent | null>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data.Home.expertise))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  return (
    <main className="flex flex-col justify-center items-center w-full px-16 relative">
      <section data-theme="dark">
        <Hero />
      </section>
      <section data-theme="light">
        <HomeAbout />
      </section>
      <section data-theme="light">
        <Industries />
      </section>
      {/* <section data-theme="light">
        <Showreel />
      </section> */}
      <section data-theme="light">
        {content && <Inovation title={content.title} cards={content.cards} />}
      </section>
      <section data-theme="light">
        <Certified />
      </section>
      <section data-theme="light">
        <Whattheysay />
      </section>
    </main>
  );
}
