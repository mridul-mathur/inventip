'use client';

import React from 'react';
import Hero from './hero';
import Map from './map';

function page() {
  return (
    <>
      <Hero data-theme="light" />
      <Map data-theme="light" />
    </>
  );
}

export default page;
