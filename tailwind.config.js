module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['poppins medium', 'montserrat regular'],
       'serif': [ 'poppins medium', 'montserrat medium'],
    },
    extend: {
      colors: {
        'curious-blue': {
          DEFAULT: '#239FCD',
          '50': '#DCF1F9',
          '100': '#C7E9F5',
          '200': '#9BD8EE',
          '300': '#70C6E7',
          '400': '#44B5DF',
          '500': '#239FCD',
          '600': '#1C7DA1',
          '700': '#145B76',
          '800': '#0D3A4A',
          '900': '#05181F'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
