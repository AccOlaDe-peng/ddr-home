/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background-all":
          "linear-gradient(0deg, #fff, #efefef 40%, #eee)",
        "login-background-top": "url(/image/login_bg_adms.png)",
        logo: "url(/image/logo_brand.png)",
      },
    },
  },
  plugins: [],
};
