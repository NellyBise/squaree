/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],

      },
      keyframes:{
        refine: {
          "0%": {
            left: "0%",
          },
          "50%": {
            left: "5%",
          },
          "100%": {
            left: "0%",
          },
        },
      },
      
      animation: {
        "refine-slide": "refine 4s infinite",
      },
    },
    variants: {
      extend: {
        animation: ['hover'], // Permet de contrôler l'animation au survol
      },
    },
  },
  plugins: [],
};
