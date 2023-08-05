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
      'background-black-nav': '#121212',
      'text-white': '#DDDDDD',
    },
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
