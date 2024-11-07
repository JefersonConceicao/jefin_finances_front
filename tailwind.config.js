/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MontSerrat', 'sans-serif']
      },
      width:{
        'card-auth': '90%'
      }
    },
  },
  plugins: [],
}

