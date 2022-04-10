module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
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