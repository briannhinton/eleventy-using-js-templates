module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: []
    }
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
