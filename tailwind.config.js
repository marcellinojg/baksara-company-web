/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-darker": "#282218",
        "primary-dark": "#322A1E",
        "primary-light": "#6B5B4D",
        "primary-lighter": "#897C72",
        primary: "#4C3B28",
      },
    },
  },
  plugins: [],
};
