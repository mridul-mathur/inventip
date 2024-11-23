"use client";

import React from "react";
import Hero from "../about/hero";
import Aboutus from "./aboutus";
import Ourmission from "./ourmission";
import Certified from "../certified";
import Team from "./team";


const AboutPage = () => {
  return < div className="overflow-x-hidden"> 
  <Hero/>
  <Aboutus/>
  <Ourmission/>
  <Certified/>
  <Team/>
  
</div>
};

export default AboutPage;
