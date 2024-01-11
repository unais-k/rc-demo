/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   BorderGrow: {
      //     "0%": { borderWidth: "1px" },
      //     "100%": { borderWidth: "2px" },
      //   },
      // },
      // animation: {
      //   BorderGrow: "BorderGrow 0.5s forwards",
      // },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        pathway: ["Pathway Gothic One", "sans-serif"],
      },
      colors: {
        darkBlue: "#273648",
        gold: "#e9ba64",
      },
      // screens: {
      //   xs: "480px",
      //   ss: "620px",
      //   sm: "768px",
      //   md: "1060px",
      //   lg: "1200px",
      //   xl: "1700px",
      // },
    },
  },
  plugins: [],
};
