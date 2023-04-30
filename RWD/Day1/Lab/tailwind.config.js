/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
    },
    extend: {},
  },
  plugins: [],
};
