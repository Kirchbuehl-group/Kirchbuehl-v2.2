/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./Website.jsx"],
  theme: {
    extend: {
      colors: {
        olive: {
          500: '#708238',
          600: '#5e6f2d'
        }
      }
    }
  },
  plugins: [],
}