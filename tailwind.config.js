/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/5": "20%",
      },

      borderWidth: {
        DEFAULT: "5px",
        thin: "0.15vw",
      },
      borderRadius: {
        DEFAULT: "2vw",
        small: "1vw",
      },
      colors: {
        p1950s: "#3EADD2", // primary colors
        p1960s: "#FFE101",
        p1970s: "#EF9F20",
        p1980s: "#2B0D29",
        p1990s: "#5ABFAD",
        p2000s: "#B4CBE4",
        p2010s: "#D3D4D9",
        p2020s: "#998A6B",

        s1950s: "#031C26", // secondary colors
        s1960s: "#310C0B",
        s1970s: "#3C2000",
        s1980s: "#FA8057",
        s1990s: "#5D3B8C",
        s2000s: "#5E88BA",
        s2010s: "#D3D4D9",
        s2020s: "#998A6B",

        a1950s: "#031C26", // accent colors
        a1960s: "#310C0B",
        a1970s: "#3C2000",
        a1980s: "#8CA9FD",
        a1990s: "#161616",
        a2000s: "#112236",
        a2010s: "#D3D4D9", // not spec'd
        a2020s: "#33270F",

        t1950s: "#031C26", // text colors
        t1960s: "#310C0B",
        t1970s: "#3C2000",
        t1980s: "#8CA9FD",
        t1990s: "#FDB64C",
        t2000s: "#112236",
        t2010s: "#191919",
        t2020s: "#CCC5B7",
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
