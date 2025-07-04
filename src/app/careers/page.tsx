"use client";

import React from "react";
import CareersHero from "./(components)/hero";
import HowToApply from "./(components)/howToApply";
import WhyUs from "./(components)/whyus";
import OurCluture from "./(components)/ourCulture";
import JobOpenings from "./(components)/openings";

const Careers = () => {
  return (
    <div className="flex flex-col relative bg-primary">
      <CareersHero />
      <WhyUs />
      <OurCluture />
      <HowToApply />
      <JobOpenings />
    </div>
  );
};

export default Careers;
