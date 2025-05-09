/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'cricket-blue': '#1d4ed8',
          'cricket-light-blue': '#3b82f6',
          'cricket-dark': '#0f172a',
        },
      },
    },
    plugins: [],
  }