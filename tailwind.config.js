const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          50: '#e5ebf9',
          100: '#becdef',
          200: '#93abe5',
          300: '#6889da',
          400: '#4770d2',
          500: '#2757ca',
          600: '#234fc5',
          700: '#1d46bd',
          800: '#173cb7',
          900: '#0e2cab',
        }
      }
    },
    screens:{
      ...defaultTheme.screens
    },
    borderRadius:{
      ...defaultTheme.borderRadius,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),require('@tailwindcss/line-clamp')],
};
