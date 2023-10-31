import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: {
          100: "#CBF2FF",
          200: "#9AE2FF",
          300: "#64D2FF",
          400: "#3CC5FE",
          500: "#23BCFE",
          600: "#09B8FF",
          700: "#00A1E4",
          800: "#0090CD",
          900: "#007CB5",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
