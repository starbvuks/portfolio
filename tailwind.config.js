module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        backLight: "#EDE2DC",
        backDark: "#463239",
        mainRed: "#AB3B61",
        mainOrange: "#E57A44",
        mainGreen: "#85A190",
      }),
      textColor: {
        mainRed: "#AB3B61",
        mainOrange: "#E57A44",
        backLight: "#EDE2DC",
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
        spartan: "Spartan",
      },
      ringColor: {
        mainRed: "#AB3B61",
      },
      fill: {
        backLight: "#EDE2DC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
