module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['"Josefin Sans"','sans-serif'],
    },
    extend: {
      colors: {
        'dark-1': '#25273c',
        'light-1': '#e6e6e6',
        'light-2': '#565871',
        'light-3': '#34364b',
      },
      dropShadow: {
        '2xl': '0 25px 25px rgb(0 0 0 / 0.05)'
      }
    },
  },
  plugins: [],
}
