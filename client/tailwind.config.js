/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 
      backgroundColor : {
        primaryColor  : "#8c8c8b",
        secondaryColor  : "#999897",
        TextColor  : "#787776",
        svgColor : "#c1c1c1",
        lightG : "#575353"
      },
      borderColor : {
        
      },
      minHeight : {
        '1/4' : "800px"
      }
    },
  },
  plugins: [],
}

