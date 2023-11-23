/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: { 
      fontFamily:{
        raleway: [ 'Raleway', "sans-serif"],
        inter: ['Inter', 'sans-serif']
      },
      //custom color inputs
      colors:{
        'black-bg': 'rgba(17, 25, 40, 0.75)',
        'light-bg': 'rgba(255, 255, 255, 0.75);',
        'black-border':'rgba(255, 255, 255, 0.125);',
        'light-border':'rgba(209, 213, 219, 0.3);'
      }
    },
  },
  plugins: [],
}