/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        teal_a100:'#a1eee1'
      },
      boxShadow: {
        'custom-light': '0 6px 30px rgba(105, 223, 208, 0.6)',
        'a':'0 6px 30px rgba(233, 31, 100, 0.5)', // Custom shadow with color #69DFD0
        'inner-dark-white': 'inset 10px 10px 30px rgba(255, 255, 255, 0.8)'
      },
      backgroundImage: {
        
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],// Add Inter font
      },
    },
  },
  plugins: [],
}

