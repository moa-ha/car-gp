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
          border: '1px solid #003366',
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
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.2)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(255, 255, 255, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(255, 255, 255, 0.4)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 10px rgba(255, 255, 255, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
  // extend: {
  //   form: {
  //     'm-2': 'm-2',
  //     rounded: 'rounded',
  //     border: 'border border-gray-300',
  //     'px-4': 'px-4',
  //     'py-2': 'py-2',
  //   },
  // },
}
