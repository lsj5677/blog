import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#E2DFD6",
        sub: "#DBCFBD",
        third: "#BFC2BE",
        red: "#B5371F",
        white: "#ffffff",
        black: "#221B12",
        blue: "#223FB5",
      },
    },
  },
  plugins: [],
};
export default config;
