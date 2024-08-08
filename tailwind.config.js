/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'sans-serif'],
        zeyada: ['Zeyada', 'cursive'], // Añade esta línea
      },
      backgroundImage: {
        'botom': "url('./im1.png')",
        'topom': "url('./im2.png')",
      }
    },
  },
  plugins: [],
}
