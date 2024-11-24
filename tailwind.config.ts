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
        "gradient-bg":
          "linear-gradient(37deg, rgb(224,238,242),rgb(233,231,244))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          50: "#F4F4F4",
          100: "#DDDDDD",
          110: "#E2E2E2",
          200: "#C3C3C3",
          300: "#A8A8A8",
          500: "#5A5A5A",
          600: "#424242",
          800: "#292929",
        },
        "transparent-dark": {
          100: "#73737312",
          500: "#73737352",
        },
        brand: {
          100: "#7A2DF7",
        },
      },
      boxShadow: {
        "soft-1":
          "0px 1px 1px rgba(60, 31, 14, 0.02), 0px 5px 4px rgba(60, 31, 14, 0.03), 0px 12px 9px rgba(60, 31, 14, 0.05), 0px 20px 15px rgba(60, 31, 14, 0.06), 0px 32px 24px rgba(60, 31, 14, 0.08);",
        "soft-2":
          "0px 0px 1px rgba(60, 31, 14, 0.08), 0px 2px 4px rgba(60, 31, 14, 0.06), 0px 4px 9px rgba(60, 31, 14, 0.05), 0px 7px 15px rgba(60, 31, 14, 0.03), 0px 11px 24px rgba(60, 31, 14, 0.02);",
      },
    },
  },
  plugins: [],
};
export default config;
