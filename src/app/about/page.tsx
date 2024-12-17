// // pages/about.tsx
// "use client";

// import React from "react";
// import Hero from "../about/hero";
// import Aboutus from "./aboutus";
// import Ourmission from "./ourmission";
// import Certified from "../certified";
// import Team from "./team";

// const AboutPage = () => {
//   return (
//     <div className="overflow-x-hidden relative">
//       {/* Sections of the About Page */}
//       <Hero />
//       <Aboutus />
//       <Ourmission />
//       <Certified />
//       <Team />

     
//     </div>
//   );
// };

// export default AboutPage;


// pages/about.tsx

"use client";

import React, { useEffect, useState } from "react";
import Hero from "../about/hero";
import Aboutus from "./aboutus";
import Ourmission from "./ourmission";
import Certified from "../certified";
import Team from "./team";
import CursorFollower from "../cursorFollower"; //

const AboutPage = () => {
  const [cursorProps, setCursorProps] = useState<{ show: boolean; text: string }>({ show: false, text: "" });

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
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutus">
        <Aboutus />
      </section>
      <section id="ourmission">
        <Ourmission />
      </section>
      <section id="certified">
        <Certified />
      </section>
      <section id="team">
        <Team />
      </section>

      <CursorFollower size={50} text={cursorProps.text} show={cursorProps.show} />
    </div>
  );
};

export default AboutPage;
