/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',  
     "./src/**/*.{js,jsx,ts,tsx}",
     "./pages/**/*.{js,jsx}",
     "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: '#1a202c',
         deepBlue: "rgb(45, 61, 112)", 
         green: "rgb(45, 112, 63)", 
       },
    },
  },
  plugins: [],
}
