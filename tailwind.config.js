/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['"Montserrat"', "sans-serif"],
        texto: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        udlaverso: {
          verde: "#0B750E", // Pantone 356 C
          rojo: "#E81312", // Pantone 185 C
          negro: "#222222", // Pantone Black C
          gris: "#4B4B4B",
          verdeOscuro: "#095c42",
          verdeClaro: "#4CAF50",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
