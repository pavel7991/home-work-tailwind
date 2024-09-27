/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1340px",
    },

    colors: {
      primary: "#2d3651",
      accent: {
        100: "#d66926",
        200: "#d53d27",
      },
      black: "#000000",
      white: "#ffffff",
      gray: {
        100: "#e5e5e5",
        200: "#637588",
        300: "#44596e",
      },
      blue: "#2D3651",
    },

    fontFamily: {
      slab: ["Roboto Slab", "serif"],
    },

    extend: {
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
