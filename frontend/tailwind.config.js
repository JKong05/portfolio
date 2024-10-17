/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-color': '#171d25',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(184deg, rgba(23,26,33,1) 0%, rgba(27,40,56,1) 35%, rgba(42,71,94,1) 100%)'
      },
      screens: {
        'xs': '767.5px',
        'mobile-L': '420px',
        'mobile-M': '370px',
      }
    },
  },
  plugins: [],
}