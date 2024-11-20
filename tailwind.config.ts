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
            lineHeight: "0.9375rem",
          },
        ],
        paramin: [
          "0.9375rem",
          {
            lineHeight: "1.125rem",
          },
        ],
        para: [
          "1.125rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        subhead: [
          "2.25rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        head: [
          "3rem",
          {
            lineHeight: "3.25rem",
          },
        ],
        max: [
          "4.5rem",
          {
            lineHeight: "4.5rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
