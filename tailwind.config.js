/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [],
};
