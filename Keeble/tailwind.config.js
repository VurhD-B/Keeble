/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'input-box-shadow': "inset 0 10px 7px 0 rgb(0 0 0 / 0.05)"
      }
    },
    colors: {
      transparent:'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'cool-blue': '#acb6e5',
      'warm-blue': '#74ebd5',
      'cool-red': '#ff9966',
      'warm-red': '#ff5e62',
      'titan-white': '#F4EEFF',
      'pale-lilac': '#DCD6F7',
      'carolina-blue': '#A6B1E1',
      'mulled-wine': '#424874',
      'magenta-haze': '#904C77',
      'dull-black': '#424242',
      'background-black': '#343434',
      'grid-black': '#4f4f4f',
      'card-black': '#5f5f5f',
      'background-black-nav': '#121212',
      'text-white': '#DDDDDD',
      'button-grey': '#565656',
      'box-gray': '#d9d9d9',
      'background-gray': '#454545',
      'review-box-gray': '#6d6d6d'
    },
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
