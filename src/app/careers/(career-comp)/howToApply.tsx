"use client";
import React, { useEffect, useState } from "react";
import TextFormatter from "@/components/text-format";

export default function HowToApply() {
  const [content, setContent] = useState<any>(null);
  const [internships, setInternships] = useState<any>(null);

  useEffect(() => {
    fetch("/content/content.json")
      .then((res) => res.json())
      .then((data) => setContent(data.Careers.howToApply));

    fetch("/content/content.json")
      .then((res) => res.json())
      .then((data) => setInternships(data.Careers.internProgram));
  }, []);

  if (!content) return null;

  return (
    <main className="z-[2] bg-primary w-screen h-fit min-h-screen flex flex-col justify-between items-center gap-12 p-4 sm:py-[4rem] sm:p-[8rem]">
      <h2 className="text-head text-secondary text-center">
        <TextFormatter text={content.process.title} />
      </h2>
      <div className="relative grid grid-cols-12 gap-16">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-8">
            {content.process.steps.map((item: any, idx: number) => (
              <div key={idx} className="group">
                <div className="flex items-start gap-8 justify-start">
                  <div className="flex flex-col w-fit gap-1">
                    <span className="text-subheadmin uppercase bg-gradient-to-r from-accent1 to-accent2 text-transparent  bg-clip-text text-center">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <hr className="w-full h-[0.125rem]  bg-secondary"></hr>
                  </div>
                  <div className="flex flex-col flex-1 gap-4 m-0 p-0">
                    <h3 className="text-subheadmin font-light text-secondary">
                      <TextFormatter text={item.title} />
                    </h3>
                    <p className="text-para  text-secondary text-justify">
                      <TextFormatter text={item.description} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {internships && (
            <div className="h-fit flex flex-col gap-4 mt-16 items-start justify-center">
              <h2 className="text-subhead text-secondary text-center">
                <TextFormatter text={internships.title} />
              </h2>
              <h2 className="text-para  text-secondary text-justify">
                <TextFormatter text={internships.subhead} />
              </h2>
              <div className="flex my-4 gap-1 relative">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-accent1 to-accent2"></div>
                <div className="pl-8 flex flex-col gap-4">
                  <h3 className="text-subheadmin mb-2 text-secondary">
                    <TextFormatter text="Program Details" />
                  </h3>
                  <p className="text-para text-justify font-medium inline-flex gap-2 text-light text-secondary ">
                    <span className="font-medium text-nowrap">
                      Eligibility:
                    </span>{" "}
                    <TextFormatter
                      text={internships.programDetails.eligibility}
                    />
                  </p>
                  <p className="text-para text-justify inline-flex gap-2 text-light text-secondary ">
                    <span className="font-medium text-nowrap">Duration:</span>{" "}
                    <TextFormatter text={internships.programDetails.duration} />
                  </p>
                  <p className="text-para text-justify inline-flex gap-2 text-light text-secondary ">
                    <span className="font-medium text-nowrap">How to:</span>{" "}
                    <TextFormatter
                      text={internships.programDetails.applicationProcess}
                    />
                  </p>
                </div>
              </div>
              <p className="text-para text-justify">{internships.learningOpportunities}</p>
            </div>
          )}
        </div>

        {/* Grow With Us - Right Side with Swiss Positioning */}
        <div className="h-fit lg:sticky lg:top-24 col-span-12 lg:col-span-4 lg:col-start-9">
          <div className="flex gap-1 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent1 to-accent2"></div>
            <div className="pl-8 flex flex-col gap-4">
              <h3 className="text-subhead text-secondary">
                <TextFormatter text="Tips For You" />
              </h3>
              <ul className="text-para text-justify flex flex-col gap-4 text-light text-secondary ">
                {content.tips.map((item: any, idx: number) => (
                  <li key={idx}>
                    <span className="bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text">
                      *
                    </span>{" "}
                    <TextFormatter text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
