"use client";

import React from "react";
import Hero from "../app/(home_comp)/hero";
import HomeAbout from "./(home_comp)/about";
import Industries from "./(home_comp)/industries";
import Showreel from "./(home_comp)/showreel";
import Inovation from "./(home_comp)/inovation";
import Certified from "./certified";
import Whattheysay from "./(home_comp)/whattheysay";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full px-16 relative">
      <section>
        <Hero />
      </section>
      <section>
        <HomeAbout />
      </section>
      <section>
        <Industries />
      </section>
      <section>
        <Showreel />
      </section>
      <section>
        <Inovation />
      </section>
      <section>
        <Certified />
      </section>
      <section>
        <Whattheysay />
      </section>
    </main>
  );
}
