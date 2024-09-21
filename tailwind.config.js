const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content :
          [
            './templates/**/*.html', './theme/**/*.html',
            '../../content/**/*.md'
          ],
  darkMode : 'class',
  theme : {
    container : {
      center : true,
      screens : {
        lg : '800px',
        xl : '900px',
        '2xl' : '900px',
      },
    },
  },
  variants : {},
  plugins :
          [
            require('@tailwindcss/typography'),
          ],
};
