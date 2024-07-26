/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      kumbh:["Kumbh Sans", "sans-serif"]
    },
    colors:{
      'white': '#ffffff',
      'black':{
        1000:'hsl(0, 0%, 0%)',
        750:'hsl(0, 0%, 0%, 0.75)'
      },
    'primary':'hsl(26, 100%, 55%)', 
      'primary-pale':'hsl(25, 100%, 94%)',
      'secondary':{
        'dark-blue':'hsl(220, 13%, 13%)',
        'dark-grayish-blue':'hsl(219, 9%, 45%)',
        'grayish-blue':'hsl(220, 14%, 75%)',
        'light-grayish-blue':'hsl(223, 64%, 98%)',
      }
    },
    
    extend: {
      height:{
        '18':'4.125rem'
      }
    },
  },
  plugins: [],
}