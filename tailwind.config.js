/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      // colors: {
      //   'logo-blue': '#001b2e',
      // },
      // backgroundImage: {
      //   'bg-img': "url('/client/styles/bg-1.jpeg')",
      // },
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
        '.btn-clear': {
          border: '1px solid black',
          color: '#000000',
          padding: '0 .5rem',
          margin: '0 .2em',
          transition: 'all 0.3s ease', // smooth transition
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // add shadow on hover
            transform: 'translateY(-2px)', // slight lift on hover
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
