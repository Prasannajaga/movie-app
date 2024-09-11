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
        TextColor  : "#787776"
      },
    },
  },
  plugins: [],
}

