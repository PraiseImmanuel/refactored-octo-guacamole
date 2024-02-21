import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        tb: "828px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1520px",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        merri: ['"Merriweather", serif'],
      },
    },
  },

  plugins: [],
};
export default config;
