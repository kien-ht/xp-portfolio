/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-v-1': 'var(--root-blue-v-1)',
        'blue-v-2': 'var(--root-blue-v-2)',
        'blue-v-3': 'var(--root-blue-v-3)',
        'blue-v-4': 'var(--root-blue-v-4)'
      },

      backgroundImage: {
        'gradient-blue':
          'linear-gradient(180deg, rgba(9, 151, 255, 1) 0%, rgba(0, 83, 238, 1) 8%, rgba(0, 80, 238, 1) 40%, rgba(0, 102, 255, 1) 88%, rgba(0, 102, 255, 1) 93%, rgba(0, 91, 255, 1) 95%, rgba(0, 61, 215, 1) 96%, rgba(0, 61, 215, 1) 100%)'
      },

      boxShadow: {
        'blue-inner-light':
          'inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd'
      }
    }
  },
  plugins: []
}
