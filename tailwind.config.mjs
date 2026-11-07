/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0c0a',
        card: '#171310',
        gold: '#d4a24c',
        cream: '#f3e9d7',
      },
      fontFamily: {
        serif: ['Cambria', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
