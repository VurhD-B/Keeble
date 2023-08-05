/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent:'transparent',
      'titan-white': '#F4EEFF',
      'pale-lilac': '#DCD6F7',
      'carolina-blue': '#A6B1E1',
      'mulled-wine': '#424874',
      'magenta-haze': '#904C77',
      'black': '#424242',
      'background-black': '#343434',
      'grid-black': '#4f4f4f',
      'card-black': '#5f5f5f',
      'background-black-nav': '#121212',
      'text-white': '#DDDDDD',
      'button-grey': '#565656',
      'box-gray': '#d9d9d9',
    },
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
