/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        scale: {
          '0%, 20%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '80%, 100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        scaleup: 'scale 10s infinite',
      },
      boxShadow: {
        def: '0px -2px 60px 0px, 0px -2px 30px 0px',
        header: '0px 4px 22px 0px rgba(0, 0, 0, 0.1)',
      },
    },
    variants: {
      extend: {
        animation: ['hover'],
      },
    },
  },
  plugins: [],
}
