/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'logo-blue': '#001b2e',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [
    // buttons
    function ({ addComponents }) {
      addComponents({
        '.btn-logo-blue': {
          backgroundColor: '#001b2e',
          border: '1px solid white',
          color: '#ffffff',
          padding: '.5rem 1rem',
          margin: '0 .2em',
          borderRadius: '.5rem',
          '&:hover': {
            backgroundColor: '#000a15',
          },
        },
      })
    },
  ],
}
