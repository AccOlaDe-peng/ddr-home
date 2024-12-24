/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "linear-gradient(0deg, #fff, #efefef 40%, #eee)",
      },
    },
  },
  plugins: [],
};
