/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '25px 25px 75px rgba(0, 0, 0, 0.25), 10px 10px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5) , inset 5px 5px 20px rgba(255,255,255,0.2) , inset -5px -5px 15px rgba(0,0,0,0.75) ',
      }
    },
  },
  plugins: [],
}

