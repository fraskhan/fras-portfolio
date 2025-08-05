/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        'primary-light': '#ffffff',
        secondary: '#8B5A2B', 
        'secondary-light': '#D4A574',
        accent: '#87CEEB',
        'accent-light': '#4A90E2',
        'black-100': '#1A1A1A',
        'black-200': '#0D0D0D',
        'white-100': '#f3f3f3',
        'gray-100': '#f7f7f7',
        'gray-200': '#e5e5e5',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
      },
    },
  },
  plugins: [],
}