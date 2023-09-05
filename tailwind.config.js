/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "item1": "url('./Assets/swimming\ pool.jpg')",
        "contact": "url('./Assets/wooden\ desk.jpg')",
        "rooms": "url('./Assets/card3.jpg')",
        "hotel1": "url('./Assets/hotel1\ \(1\).jpg')",
        "hotel2": "url(('./Assets/hotel1\ \(3\).jpg')"
      }


    },
  },
  plugins: [],
}