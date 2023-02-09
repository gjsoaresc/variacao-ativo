/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
  },
  plugins: [require("daisyui")],
}
