import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: {
          50: "#F3F3F3",
          100: "#D6D6D6",
        },
        blue: {
          50: "#F4F1FF",
          300: "#2C3780",
          400: "#253A57",
          500: "#253856",
        },
      },
    },
  },
  plugins: [],
};
export default config;
