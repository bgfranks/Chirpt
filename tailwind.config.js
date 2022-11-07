/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'purple': {
        500: '#ED22FF',
        700: '#C013CF',
      },
      'blue': {
        500: '#3D5CFD',
        700: '#2F48CA',
      },
      'black': '#181818',
      'dark-gray': '#212121',
      'gray': '#3D3D3D',
      'light-gray': '#AAA',
      'white': '#fff',
      'transparent': 'transparent',
    },
    extend: {},
  },
  plugins: [],
}
