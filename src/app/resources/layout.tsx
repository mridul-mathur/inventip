"use client";

import { SWRConfig } from "swr";
import React from "react";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const ResourcesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        dedupingInterval: 60000,
      }}
    >
      <div className="resources-layout">{children}</div>
    </SWRConfig>
  );
};

export default ResourcesLayout;
