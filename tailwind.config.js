module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        backLight: "#EDE2DC",
        secondLight: "#F6EEE9",
        backDark: "#463239",
        mainRed: "#AB3B61",
        mainOrange: "#E57A44",
        mainGreen: "#657849",
      }),
      textColor: {
        mainRed: "#AB3B61",
        mainOrange: "#E57A44",
        mainGreen: "#657849",
        backLight: "#EDE2DC",
        backDark: "#463239",
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
        anon: "Anonymous Pro",
      },
      ringColor: {
        mainRed: "#AB3B61",
      },
      fill: {
        backLight: "#EDE2DC",
      },
      rotate: {
        "-35": "35deg",
      },
      backgroundImage: (theme) => ({
        watercolor: "url('/img/watercolor.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
