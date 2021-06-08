module.exports = {
  purge: {
    mode: 'all',
    enabled: true,
    content: ['./static/**/*.html', './static/**/*.js'],
    options: {
      keyframes: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
