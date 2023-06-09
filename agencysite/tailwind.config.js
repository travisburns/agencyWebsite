/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },

      screens: {
        'mb': '320px',
        'l-tablet': '900px',
        'l-desktop': '1920px'
      },

    },
  },
  plugins: [],
}

