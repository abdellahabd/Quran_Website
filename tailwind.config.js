/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["variant", "&:not(.light *)"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
