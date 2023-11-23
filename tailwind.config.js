/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{html, js,ts,jsx}",
  ],
  purge: ["./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [],
};
