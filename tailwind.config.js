/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: ["variant", "&:not(.light *)"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
