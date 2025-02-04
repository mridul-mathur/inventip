import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suisse: ["Suisse Intl", "sans-serif"],
      },
      colors: {
        primary: "#f7f7f7",
        secondary: "#191919",
        accent1: "#37DCF1",
        accent2: "#336FE5",
      },
      fontSize: {
        min: [
          "0.75rem",
          {
            lineHeight: "0.95rem",
          },
        ],
        paramin: [
          "0.875rem",
          {
            lineHeight: "1.3125rem",
          },
        ],
        para: [
          "1.125rem",
          {
            lineHeight: "1.5875rem",
          },
        ],
        subhead: [
          "2.25rem",
          {
            lineHeight: "2.7375rem",
          },
        ],
        subheadmin: [
          "1.875rem",
          {
            lineHeight: "1.2125rem",
          },
        ],
        head: [
          "3rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        max: [
          "4.5rem",
          {
            lineHeight: "4.6875rem",
          },
        ],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backdropBlur: ["hover", "focus"],
    },
  },
};
export default config;
