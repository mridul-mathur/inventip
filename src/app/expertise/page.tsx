"use client";

import React, { useEffect, useState } from "react";
import Hero from "./hero";
import Tier from "./tier";
import Inovation from "../(home_comp)/inovation";
import Faq from "./faq";
import WhatTheySay from "../(home_comp)/whattheysay";
import CursorFollower from "../cursorFollower";

function Page() {
  const [cursorProps, setCursorProps] = useState<{ show: boolean; text: string }>({ show: false, text: "" });

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "inovation":
                setCursorProps({ show: true, text: "Scroll" });
                break;
                case "whattheysay":
                setCursorProps({ show: true, text: "drag" });
                break;
              default:
                setCursorProps({ show: false, text: "" });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative">
      <section id="hero">
        <Hero />
      </section>
      <section id="tier">
        <Tier />
      </section>
      <section id="inovation">
        <Inovation />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="whattheysay">
        <WhatTheySay />
      </section>

      <CursorFollower size={50} text={cursorProps.text} show={cursorProps.show} />
    </main>
  );
}

export default Page;
