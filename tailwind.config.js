/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monoton': ['Monoton', 'cursive']
      },
      colors: {
        'primary': '#171717',
        'primary2': '#444444',
        'secondary': '#DA0037',
        'secondary2': '#EDEDED',
      }
    },
  },
  plugins: [],
}
