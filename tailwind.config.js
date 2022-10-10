/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "arial"],
      },
      colors: {
        primary: "#1D2130",
      },
    },
  },
  plugins: [],
};
