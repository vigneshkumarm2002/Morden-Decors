/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#053956" ,
      },
      fontFamily:{
         poppins:["poppins"]
      },
      screens: {
        'sd': '750px',
        // => @media (min-width: 640px) { ... }
  
        'med': '1100px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

