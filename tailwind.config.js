/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        'warm-100': '#F7F0E6',
        'warm-200': '#EDE0CC',
        champagne: '#F5E6C8',
        gold: '#C9A84C',
        'gold-dark': '#A8893A',
        stone: '#7A6E60',
        'warm-900': '#2C2416',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
