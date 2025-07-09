"use client";

import React, { useEffect, useState } from "react";
import Hero from "../about/hero";
import Aboutus from "./aboutus";
import Ourmission from "./ourmission";
import Certified from "../certified";
import Team from "./team";
import CursorFollower from "../cursorFollower";

const AboutPage = () => {
  const [cursorProps, setCursorProps] = useState<{
    show: boolean;
    text: string;
  }>({ show: false, text: "" });

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "certified":
                setCursorProps({ show: true, text: "Click!" });
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
    <div className="overflow-x-hidden relative">
      <section data-theme="light" id="hero">
        <Hero />
      </section>
      <section data-theme="light" id="aboutus">
        <Aboutus />
      </section>
      <section data-theme="light" id="ourmission">
        <Ourmission />
      </section>
      <section data-theme="light" id="certified">
        <Certified />
      </section>
      <section data-theme="light" id="team">
        <Team />
      </section>
    </div>
  );
};

export default AboutPage;
