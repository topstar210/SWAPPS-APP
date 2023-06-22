/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      '3xl': '1536px',
      'xl': '1208px',
    },
    extend: {
      backgroundImage: {
        "header": "linear-gradient(71.14deg, #52B4FF 59.42%, #6A64DE 93.82%)",
        "hr": "linear-gradient(89.76deg, #52B4FF 36.47%, #7A85E5 100%)",
        "card-1": "linear-gradient(245.68deg, #52B4FF 51.46%, #3CA2F0 86.93%)",
        "airticket": "url('../public/icons/air-tickets.svg')",
        "buyerticket": "url('../public/icons/buyers.svg')",
        "switchbtn": "linear-gradient(98.47deg, #52B4FF 24.04%, #6A64DE 107.13%)",
        "card-price": "radial-gradient(120% 120% at 100% 0%, #52B4FF 73.44%, #6A64DE 100%)",
        "carousel-arrow": "linear-gradient(245.68deg, #52B4FF 51.46%, #3CA2F0 86.93%)",
        "search-btn": "radial-gradient(90.25% 187.15% at 16.82% 100%, #52B4FF 73.44%, #6A64DE 100%)",

        "book-head-1": "linear-gradient(245.68deg, #52B4FF 51.46%, #3CA2F0 86.93%)",
        "book-head-2": "linear-gradient(247.49deg, #7A85E5 18.89%, #606CD0 96.06%)",
        "flight-up-place": "url('../public/icons/flight-up-place.svg')",
        "flight-down-place": "url('../public/icons/flight-down-place.svg')",
        
        "btn-primary": "linear-gradient(90deg, #53B5FF 0%, #717CDE 86.77%)",

        "bestthing": "url('../public/images/bestthing.png')",
      },
      colors: {
        'purple': '#7A85E6',
        'lightpurple': '#6F7ADC',
        'cover': "#00000082",
        'dark-green': "#062D4A"
      }
    },
  },
  plugins: [],
});



