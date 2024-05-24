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

// tailwind.config.js

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'custom-blue': '#001b2e',
//       },
//     },
//     // 버튼 관련 설정 추가
//     buttons: {
//       'custom-blue': {
//         backgroundColor: '#001b2e',
//         color: '#ffffff',
//         padding: '.75rem 1.5rem',
//         borderRadius: '.5rem',
//         '&:hover': {
//           backgroundColor: '#000a15',
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {
//       backgroundColor: ['hover'],
//     },
//   },
//   plugins: [
//     function ({ addComponents }) {
//       addComponents({
//         '.btn-custom-blue': {
//           '@apply bg-custom-blue text-white px-4 py-2 rounded': {},
//         },
//       });
//     },
//   ],
// };
