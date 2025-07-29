/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#8B5A2B', 
        accent: '#87CEEB',
        'black-100': '#1A1A1A',
        'black-200': '#0D0D0D',
        'white-100': '#f3f3f3',
      },
    },
  },
  plugins: [],
}