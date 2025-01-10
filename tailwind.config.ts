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
        // Background-Colors
        background: "#FAFAFA",
        lightBg: "#FFFFFF",
        darkBg: "#252B42",
        foreground: "var(--foreground)",

        // Text-Colors
        txtClr: "#252B42",
        secondTxtClr: "#737373",
        lightTxtClr: "#FFFFFF",
        lightBlueTxtClr: "#8EC2F2",

        // Sections-Colors
        primaryClr: "#23A6F0",
        secondaryClr: "#23856D",
        alertClr: "#E77C40",
        mutedClr: "#BDBDBD",
        successClr: "#2DC071",
        redClr: "#E74040",
        outlineGreyClr: "#E6E6E6",
        inputBgClr: "#F9F9F9",
      },
      screens: {
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        mlg: "1440px",
        xl: "1280px",
        xxl: "1536px",
        txl: "1664px",
      }

    },
  },
  plugins: [],
};
export default config;
