module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#010E29',
        'secondary': '#849ED1',
        'tertiary': '#0C2659',
        'quaternary': '#4D6699',
        'quinary': '#101C33'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
