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
      }),
      textColor: {
        nav: "#ff8e2b",
        lightnav: "#FFE8D4",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
