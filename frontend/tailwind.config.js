/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./assets/bg.jpg')",
        bgUser: "url('./assets/bgUser.png')",
      },
    },
  },
  plugins: [],
}