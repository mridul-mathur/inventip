"use client";

import React from 'react'
import Hero from './hero';
import Tier from './tier';
import Inovation from '../(home_comp)/inovation';
import Faq from './faq';
import WhatTheySay from '../(home_comp)/whattheysay';

function page() {
  return (
    <div className='overflow-x-hidden'>
    <Hero/>
    <Tier/>
    <Inovation/>
    <Faq/>
    <WhatTheySay/>
    


  </div>
  )
}

export default page