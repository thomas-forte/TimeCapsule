/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "0.5vw",
        thin: "0.15vw",
      },
      borderRadius: {
        DEFAULT: "2vw",
        small: "1vw",
      },
      },
    },
  },
  plugins: [],
};
