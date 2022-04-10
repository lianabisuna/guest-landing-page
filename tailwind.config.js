module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        regular: ["Archivo", "sans-serif"],
        narrow: ["Archivo Narrow", "sans-serif"],
      },
      backgroundImage: {
        'banner': "url('@/assets/images/banner/banner.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}