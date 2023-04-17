/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px'
      },
      colors: {
        'new-green': {
          '500': '#20AF24'
        },
        'new-grey': {
          '300': '#C1C1C1',
          '700': '#707070'
        }
      },
      fontSize: {
        '3.2xl': '2rem'
      }
    },
  },
  plugins: [],
}

