module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        mainRed: "#AB3B61",
        backLight: "#EDE2DC",
        secondLight: "#F6EEE9",
        aboutBlue: "#152238",
        aboutBlue2: "#192945",
        aboutTurq: "#4EBFAB",
        portfGreen: "#657849",
        portfLight: "#F3EFE3",
        portfLightGreen: "#BAB78C",
        contactBack: "#788585",
        contactBack2: "#9CAEA9",
      }),
      textColor: {
        mainRed: "#AB3B61",
        backLight: "#EDE2DC",
        backDark: "#463239",
        aboutLight: "#CCD6F6",
        aboutGray: "#8892B0",
        aboutSky: "#6AAEF3",
        aboutTurq: "#4EBFAB",
        portfLight: "#F3EFE3",
        portfDark: "#54543A",
        portfBtnLight: "#B1B495",
        contactLight: "#CCDAD1",
        contactBack: "#788585",
      },
      stroke: {
        current: "currentColor",
      },
      fill: {
        current: "currentColor",
        backLight: "#EDE2DC",
        aboutTurq: "#4EBFAB",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        spartan: "Spartan",
        anon: "Anonymous Pro",
      },
      ringColor: {
        mainRed: "#AB3B61",
        aboutLight: "#E8F0FF",
        portfBtnLight: "#B1B495",
        contactLight: "#CCDAD1",
      },
      borderColor: {
        contactLight: "#CCDAD1",
      },
      backgroundImage: (theme) => ({
        watercolor: "url('/img/watercolor.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
