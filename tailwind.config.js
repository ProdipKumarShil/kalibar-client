/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7722',
        secondary: '#8F1400',
        blackText: '#161722',
        blackBg: '#0D0D0D'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
