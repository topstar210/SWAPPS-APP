/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      '3xl': '1536px',
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
        "search-btn": "radial-gradient(90.25% 187.15% at 16.82% 100%, #52B4FF 73.44%, #6A64DE 100%)"
      },
      colors: {
        'purple': '#7A85E6'
      }
    },
  },
  plugins: [],
});



