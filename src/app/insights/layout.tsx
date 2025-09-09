'use client';

import { SWRConfig } from 'swr';
import React from 'react';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const InsightsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: true,
        dedupingInterval: 60000,
      }}
    >
      <div className="insights-layout">{children}</div>
    </SWRConfig>
  );
};

export default InsightsLayout;
