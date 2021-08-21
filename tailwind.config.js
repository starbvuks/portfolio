module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        nav: "#ff8e2b",
        deepblue: "#152238",
        lightblue: "#192945",
        backLight: "#EDE2DC",
        mainRed: "#AB3B61",
      }),
      textColor: {
        mainRed: "#AB3B61",
      },
      stroke: {
        current: "currentColor",
      },
      fill: {
        current: "currentColor",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      ringColor: {
        mainRed: "#AB3B61",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
