/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      primary: "#2d3651",
      accent: {
        100: "#d66926",
        200: "#d53d27",
      },
      black: "#000000",
      white: "#ffffff",
      grey: {
        100: "#e5e5e5",
        200: "#637588",
        300: "#44596e",
        400: "#707070",
      },
      blue: "#2D3651",
    },

    fontFamily: {
      slab: ["Roboto Slab", "serif"],
    },

    extend: {
      screens: {
        sm: "577px",
        "sm-max": { max: "576px" },
        md: "769px",
        "md-max": { max: "768px" },
        lg: "993px",
        "lg-max": { max: "992px" },
        xl: "1200px",
        "2xl": "1340px",
      },

      fontSize: {
        "text-3xl": ["2rem", "2.5rem"],
        "text-4xl": ["2.5rem", "3rem"],
      },

      backgroundImage: {
        "header-bg": "url('../img/img-header.png')",
      },

      borderWidth: {
        3: "3px",
      },
    },
  },

  plugins: [],
};
