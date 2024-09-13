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
      keyframes: {
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
        scale: {
          "0%, 20%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "80%, 100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "refine-slide": "refine 4s infinite",
        "scaleup": "scale 10s infinite",
      },
      
    },
    variants: {
      extend: {
        animation: ['hover'],
      },
    },
  },
  plugins: [],
};
