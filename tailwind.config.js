module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
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
      stroke: (theme) => ({
        current: "currentColor",
      }),
      fill: {
        current: "currentColor",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      ringColor: {
        nav: "#ff8e2b",
        deepblue: "#152238",
        lightblue: "#192945",
      },
      keyframes: {
        bounce: {
          from: {
            transform: "translateY(0px)",
          },
          to: {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        bounce: "wiggle 1s infinite alternate",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
