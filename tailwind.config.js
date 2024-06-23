/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard-Regular'],
        aggro: ['SBAggroB'],
        nexon: ['NEXON Lv1 Gothic OTF']
      },
      textShadow: {
        sm: '0 2px 2px var(--tw-shadow-color)',
        DEFAULT: '0 5px 3px var(--tw-shadow-color)',
        lg: '0 5px 10px var(--tw-shadow-color)'
      },
      colors: {
        main_purple: '#9d01da',
        marvel_bg_100: '#201655',
        marvel_bg_200: '#5123b6',
        marvel_dark_purple: '#0a001a',
        marvel_dark_blue: '#0d1b3f',
        marvel_dark_violet: '#260f47',
        gray_300: '#d1d5db',
        gray_500: '#6b7280'
      },
      animation: {
        'gradient-x': 'gradient-x 20s ease infinite',
        rotate: 'rotate 4s linear infinite',
        blink: 'blink 5s linear infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        blink: {
          '0%': { opacity: '1' },
          '40%': { opacity: '0.5' },
          '80%': { opacity: '1' }
        }
      },
      boxShadow: {
        glow: '0 0 10px 2px rgba(255, 255, 255, 0.6)'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover']
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      );
    })
  ]
};
