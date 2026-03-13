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
        brand: {
          blue: "#4da7f3",
          purple: "#b486f0",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #4da7f3, #b486f0)",
      },
    },
  },
  plugins: [],
};
export default config;
