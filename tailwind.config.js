/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ['./src/**/*.{html,js},'],
  darkMode: 'class',
  theme: {

    extend:{
        colors: 
        {
          'primat': '#141414',
          'secondary': '#222222',
      },
    },
    screens:
    {
      'sm': '640px',
    },

  },
  plugins: [],
  
}

