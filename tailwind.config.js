/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'logo-blue': '#001b2e',
      },
      backgroundImage: {
        'bg-img': "url('/client/styles/bg-1.jpeg')",
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
  extend: {
    form: {
      'm-2': 'm-2',
      rounded: 'rounded',
      border: 'border border-gray-300',
      'px-4': 'px-4',
      'py-2': 'py-2',
    },
  },
}
