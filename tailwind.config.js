module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        nav: "#ff8e2b",
        navdark: "#B35B0F",
        deepblue: "#152238",
        lightblue: "#192945",
        midblue: "#345691",
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
