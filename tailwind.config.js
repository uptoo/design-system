const theme = require('./theme');

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: theme,
  important: true,
  variants: {
    extend: {},
  },
  plugins: [],
}
