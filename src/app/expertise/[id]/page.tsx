"use client";

import React, { useEffect, useState } from "react";
import Hero from "../hero";
import Tier from "../tier";
import Inovation from "../../(home_comp)/inovation";
import Faq from "../faq";
import WhatTheySay from "../../(home_comp)/whattheysay";
import CursorFollower from "../../cursorFollower";
import { useParams } from "next/navigation";

interface ExpertiseContent {
  title: string;
  intro: string;
  image: string;
  details: {
    title: string;
    content: string;
  };
  services: {
    title: string;
    cards: {
      name: string;
      description: string;
    }[];
  };
  faq: [
    {
      question: string;
      answer: string;
    }
  ];
}

const Page = () => {
  const { id } = useParams();
  const expertiseId = typeof id === "string" ? parseInt(id) : 0;
  const [content, setContent] = useState<ExpertiseContent | null>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((response) => response.json())
      .then((data) => {
        const expertiseArray = data.expertise;
        if (expertiseArray && expertiseArray[expertiseId]) {
          setContent(expertiseArray[expertiseId]);
        } else {
          setContent(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setContent(null);
      });
  }, [expertiseId]);

  const [cursorProps, setCursorProps] = useState<{
    show: boolean;
    text: string;
  }>({ show: false, text: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  if (!content) {
    return <div>Expertise not found</div>;
  }

  return (
    <main
      data-theme="light"
      className="flex flex-col justify-center items-center w-full px-16 relative"
    >
      <section id="hero" data-theme="light">
        <Hero
          image={content.image}
          title={content?.title || ""}
          intro={content?.intro || ""}
        />
      </section>
      <section id="tier" data-theme="light">
        <Tier title={content.details.title} para={content.details.content} />
      </section>
      <section id="inovation" data-theme="light">
        {content && (
          <Inovation
            title={content.services.title}
            cards={content.services.cards.map((service, idx) => ({
              name: service.name,
              description: service.description,
              image: "/images/default.jpg",
            }))}
          />
        )}
      </section>
      <section id="faq" data-theme="light">
        <Faq faqs={content?.faq || []} />
      </section>
      <section id="whattheysay" data-theme="light">
        <WhatTheySay />
      </section>
    </main>
  );
};

export default Page;
