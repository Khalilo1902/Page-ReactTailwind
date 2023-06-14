/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
  
    container:{
      center:true,
    },
    screens:{
      "sm": '480px',
      "md": '768px',
      "lg": '1049px',
      "xl": '1440px'
    },
    extend: {},
  },
  plugins: [],
}

