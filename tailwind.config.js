/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/5": "20%",
      },

      borderWidth: {
        DEFAULT: "0.5dvw",
        thin: "0.15dvw",
      },
      borderRadius: {
        DEFAULT: "2vw",
        small: "1vw",
      },
      colors: {
        bg1950s: "#3EADD2", // bg colors
        bg1960s: "#FFE101",
        bg1970s: "#E59F23",
        bg1980s: "#2B0D29",
        bg1990s: "#5ABFAD",
        bg2000s: "#88AEDD",
        bg2010s: "#D3D4D9",
        bg2020s: "#998A6B",
        bg2030s: "#F0F0F0",

        b1950s: "#031C26", // border colors
        b1960s: "#310C0B",
        b1970s: "#3C2000",
        b1980s: "#8CA9FD",
        b1990s: "#FDB64C",
        b2000s: "#5E88BA",
        b2010s: "#191919",
        b2020s: "#998A6B",
        b2030s: "#000000",

        h1950s: "#031C26", // header colors
        h1960s: "#310C0B",
        h1970s: "#3C2000",
        h1980s: "#8CA9FD",
        h1990s: "#FDB64C",
        h2000s: "#112236",
        h2010s: "#191919",
        h2020s: "#CCC5B7",
        h2030s: "#000000",

        t1950s: "#031C26", // text body colors
        t1960s: "#310C0B",
        t1970s: "#3C2000",
        t1980s: "#8CA9FD",
        t1990s: "#161616",
        t2000s: "#112236",
        t2010s: "#191919",
        t2020s: "#33270F",
        t2030s: "#000000",
      },
      fontFamily: {
        carterOne: ['"Carter One"'],
        truculenta: ["Truculenta"],
        spicyRice: ['"Spicy Rice"'],
        lifeSavers: ['"Life Savers"'],
        bungeeShade: ['"Bungee Shade"'],
        michroma: ["Michroma"],
        monoton: ["Monoton"],
        orbitron: ["Orbitron"],
        gluten: ["Gluten"],
        comicNeue: ['"Comic Neue"'],
        cuteFont: ['"Cute Font"'],
        jura: ["Jura"],
        dmSans: ['"DM Sans"'],
        lato: ["Lato"],
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],

        oxanium: ["Oxanium"],
      },
    },
  },
  plugins: [],
};
