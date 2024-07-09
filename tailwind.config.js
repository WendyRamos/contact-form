/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'green-lighter': '#DFF0E7',
        'green-medium': '#0C7D68',
        'red-error': '#D73C3C',
        'grey-medium': '#86A2A6',
        'grey-darker': '#2A4245'
      },
      fontFamily: {
        'Karla': 'Karla',
      }
    },
  },
  plugins: [],
}

