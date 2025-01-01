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
        lightG : "#575353",
        "dk-Primary-3" : "#434343",
        "dk-Primary-2" : "#5C5C5C",
        "dk-Primary-1" : "#777777",
        "lg-Primary-3" : "#929292",
        "lg-Primary-2" : "#BABABA",
        "lg-Primary-1" : "#D2D2D2",
      },
      colors : {
        "dk-Primary-3" : "#434343",
        "dk-Primary-2" : "#5C5C5C",
        "dk-Primary-1" : "#777777",
        "lg-Primary-3" : "#929292",
        "lg-Primary-2" : "#BABABA",
        "lg-Primary-1" : "#D2D2D2",
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

