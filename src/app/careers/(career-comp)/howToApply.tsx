'use client';
import React, { useEffect, useState } from 'react';
import TextFormatter from '@/components/text-format';

export default function HowToApply() {
  const [content, setContent] = useState<any>(null);
  const [internships, setInternships] = useState<any>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then(res => res.json())
      .then(data => setContent(data.Careers.howToApply));

    fetch('/content/content.json')
      .then(res => res.json())
      .then(data => setInternships(data.Careers.internProgram));
  }, []);

  if (!content) return null;

  return (
    <main className="z-[2] flex h-fit min-h-screen w-screen flex-col items-center justify-between gap-12 bg-primary p-4 sm:p-[8rem] sm:py-[4rem]">
      <h2 className="text-center text-head text-secondary">
        <TextFormatter text={content.process.title} />
      </h2>
      <div className="relative grid grid-cols-12 gap-16">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-8">
            {content.process.steps.map((item: any, idx: number) => (
              <div key={idx} className="group">
                <div className="flex items-start justify-start gap-8">
                  <div className="flex w-fit flex-col gap-1">
                    <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-center text-subheadmin uppercase text-transparent">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <hr className="h-[0.125rem] w-full bg-secondary"></hr>
                  </div>
                  <div className="m-0 flex flex-1 flex-col gap-4 p-0">
                    <h3 className="text-subheadmin font-light text-secondary">
                      <TextFormatter text={item.title} />
                    </h3>
                    <p className="text-justify text-para text-secondary">
                      <TextFormatter text={item.description} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {internships && (
            <div className="mt-16 flex h-fit flex-col items-start justify-center gap-4">
              <h2 className="text-center text-subhead text-secondary">
                <TextFormatter text={internships.title} />
              </h2>
              <h2 className="text-justify text-para text-secondary">
                <TextFormatter text={internships.subhead} />
              </h2>
              <div className="relative my-4 flex gap-1">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-accent1 to-accent2"></div>
                <div className="flex flex-col gap-4 pl-8">
                  <h3 className="mb-2 text-subheadmin text-secondary">
                    <TextFormatter text="Program Details" />
                  </h3>
                  <p className="text-light inline-flex gap-2 text-justify text-para font-medium text-secondary">
                    <span className="text-nowrap font-medium">
                      Eligibility:
                    </span>{' '}
                    <TextFormatter
                      text={internships.programDetails.eligibility}
                    />
                  </p>
                  <p className="text-light inline-flex gap-2 text-justify text-para text-secondary">
                    <span className="text-nowrap font-medium">Duration:</span>{' '}
                    <TextFormatter text={internships.programDetails.duration} />
                  </p>
                  <p className="text-light inline-flex gap-2 text-justify text-para text-secondary">
                    <span className="text-nowrap font-medium">How to:</span>{' '}
                    <TextFormatter
                      text={internships.programDetails.applicationProcess}
                    />
                  </p>
                </div>
              </div>
              <p className="text-justify text-para">
                {internships.learningOpportunities}
              </p>
            </div>
          )}
        </div>

        {/* Grow With Us - Right Side with Swiss Positioning */}
        <div className="col-span-12 h-fit lg:sticky lg:top-24 lg:col-span-4 lg:col-start-9">
          <div className="relative flex gap-1">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent1 to-accent2"></div>
            <div className="flex flex-col gap-4 pl-8">
              <h3 className="text-subhead text-secondary">
                <TextFormatter text="Tips For You" />
              </h3>
              <ul className="text-light flex flex-col gap-4 text-justify text-para text-secondary">
                {content.tips.map((item: any, idx: number) => (
                  <li key={idx}>
                    <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
                      *
                    </span>{' '}
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
