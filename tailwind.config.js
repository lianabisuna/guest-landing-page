module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    minWidth: {
      'btn': '5.5rem',
    },
    extend: {
      fontFamily: {
        regular: ["Archivo", "sans-serif"],
        narrow: ["Archivo Narrow", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}