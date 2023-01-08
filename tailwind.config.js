/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightOrange: '#FF4820',
        footer: '#031B34',
        inputBg: '#052D56',
        emailText: '#3D6184',
        subtext: '#FF8A71',
      },
      screens: {
        'xs': '280px'
      }
    },
  },
  plugins: [],
}
