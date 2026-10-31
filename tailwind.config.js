/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-red': '#C1121F',
        'brand-orange': '#E85D2A',
        'brand-light': '#F5F5F5',
        'brand-dark': '#1A1A1A',
      },
    },
  },
};
