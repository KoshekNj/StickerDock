/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kameron: ['"Kameron"', "normal"],
      },
      colors: {
        myYellow: "#F7FB29",
      },
      backgroundImage: {
        background: "url('/src/Images/background.jpg')",
        packBackground: "url('/src/Images/PackBg.jpg')",
      },
    },
  },
  plugins: [],
};
