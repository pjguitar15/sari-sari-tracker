/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans serif']
    },
    extend: {

    },
  },
  plugins: [require('@tailwindcss/forms')],
}
