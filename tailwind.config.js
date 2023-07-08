/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      transparent:'transparent',
      'titan-white': '#F4EEFF',
      'pale-lilac': '#DCD6F7',
      'carolina-blue': '#A6B1E1',
      'mulled-wine': '#424874',
      'magenta-haze': '#904C77'
    },
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive'],
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

