/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#000000",
        secondary: "#ffffff",
        yellow: "#ffc900",
        pink: "#ff90e8"
      }
    },
  },
  plugins: [],
};

module.exports = config;
