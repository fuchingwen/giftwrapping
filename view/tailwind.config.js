/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: {
          100: "#AFAFAF",
          200: "#5A5A5A"
        },
        primary: {
          100: "#DB4444",
          200: "#C6393e"
        }
      }
    }
  },
  plugins: []
};
