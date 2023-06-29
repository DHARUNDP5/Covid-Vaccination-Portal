/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./Components/Assets/bg.jpg')",
        bgUser: "url('./Components/Assets/bgUser.png')",
      },
    },
  },
  plugins: [],
}

