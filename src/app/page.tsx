// "use client";

// import React from "react";
// import Hero from "../app/(home_comp)/hero";
// import HomeAbout from "./(home_comp)/about";
// import Industries from "./(home_comp)/industries";
// import Showreel from "./(home_comp)/showreel";
// import Inovation from "./(home_comp)/inovation";
// import Certified from "./certified";
// import Whattheysay from "./(home_comp)/whattheysay";
// import Blog from "./Blog";
// import Testimonial from "./(home_comp)/testimonial";

// export default function Home() {
//   return (
//     <main className="flex flex-col justify-center items-center w-full px-16 ">
//       <Hero />
//       <HomeAbout />
//       <Industries />
//       <Showreel />
//       <Inovation/>
//       <Certified/>
//       <Whattheysay/>
//       {/* <Blog/> */}

      
      
      
//     </main>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Hero from "../app/(home_comp)/hero";
import HomeAbout from "./(home_comp)/about";
import Industries from "./(home_comp)/industries";
import Showreel from "./(home_comp)/showreel";
import Inovation from "./(home_comp)/inovation";
import Certified from "./certified";
import Whattheysay from "./(home_comp)/whattheysay";
import CursorFollower from "./cursorFollower";

export default function Home() {
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
              case "inovation":
                setCursorProps({ show: true, text: "Scroll" });
                console.log("inovation");
                break;
              case "industries":
              case "whattheysay":
                setCursorProps({ show: true, text: "Drag" });
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
    <main className="flex flex-col justify-center items-center w-full px-16 relative">
      <section id="hero">
        <Hero />
      </section>
      <section id="homeabout" className="z-[1]">
        <HomeAbout />
      </section>
      <section id="industries" className="z-[1]">
        <Industries />
      </section>
      <section id="showreel" className="z-[1]"  >
        <Showreel />
      </section>
      <section id="inovation" className="z-[1]">
        <Inovation />
      </section>
      <section id="certified" className="z-[1]">
        <Certified />
      </section>
      <section id="whattheysay" className="z-[1]">
        <Whattheysay />
      </section>

      <CursorFollower size={50} text={cursorProps.text} show={cursorProps.show} />
    </main>
  );
}

