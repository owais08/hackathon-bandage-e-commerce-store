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
        secondTxtClr: "#737373",
        txtClr: "#252B42",
        lightTxtClr: "#FFFFFF",

        // Sections-Colors
        primaryClr: "#23A6F0",
        secondaryClr: "#23856D",
        alertClr: "#E77C40",
        mutedClr: "#BDBDBD",
        successClr: "#2DC071",
        redClr: "#E74040",
      },
    },
  },
  plugins: [],
};
export default config;
