/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
      'Theme': '#22aeff',
      'ThemeDark': '#0053B5',
      'ThemeLight':'#EEFBFF',
      'ThemeMedium': '#6C94BC',
      'ThemeOff':'#E6F4F1',
      },
      spacing: {
        'builder': '30rem',
      },
    },
  },
  plugins: [
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
