/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Cinzel": ["Cinzel", ...defaultTheme.fontFamily.sans],
        "Poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        myWhite : '#EEE4DF',
        mySkin: '#E3D2C9',
        myGray : '#87817F',
        myBlack : '#21201F',
        myGreen : '#13332A',
        myYellow : '#E1A527',
        myOrange : '#DA7A51',
      }
    },
  },
  plugins: [require("tailwind-scrollbar"),],
}