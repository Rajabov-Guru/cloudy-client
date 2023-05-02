const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        primary: "#512DA8",
        primary_light:"#7E57C2",
        primary_lighter:"#D1C4E9",
        secondary: "#EEEEEE",
        secondary_light:"#F5F5F5",
        tertiary:"#12131A",
        quarternary:"#eaefff",
        quarternary_dark:"#D6DEF7",///e0e8ff
        dark_white:"#FAFAFA",
        // quarternary_dark:"#EDF2F7",
        quinary:"#FFFFFF"
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
      animation:{
        ripple: 'ripple 600ms ease-out forwards'
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: 1
          },
          '100% ':{
            transform: 'scale(2)',
            opacity: 0
          },
        },
      }
    },
    screens:{
      'xs':"450px",
      'sm': '642px',
      'md': '770px',
      'lg': '1026px',
      'xl': '1282px',
      '2xl': '15386px',
    }
  },
  plugins: [],
}

