"use client";

import React from "react";
import CareersHero from "./(career-comp)/hero";
import HowToApply from "./(career-comp)/howToApply";
import WhyUs from "./(career-comp)/whyus";
import OurCluture from "./(career-comp)/ourCulture";
import JobOpenings from "./(career-comp)/openings";

const Careers = () => {
  return (
    <div className="flex flex-col relative bg-primary">
      <CareersHero data-theme="light" />
      <WhyUs data-theme="light" />
      <OurCluture data-theme="light" />
      <HowToApply data-theme="light" />
      <JobOpenings data-theme="light" />
    </div>
  );
};

export default Careers;
