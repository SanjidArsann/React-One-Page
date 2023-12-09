/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.shadow-top': {
          boxShadow: '0px 0px 45px 1px rgba(0, 0, 0, 0.1)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

