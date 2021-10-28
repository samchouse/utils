module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#3f58fc'
      }
    },
    fontFamily: {
      body: ['"Be Vietnam"', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
