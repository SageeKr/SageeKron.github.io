module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGray: '#5F5957',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
