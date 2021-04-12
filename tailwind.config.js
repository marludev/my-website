module.exports = {
  purge: [
    './src/pages/**/*.tsx',
    './src/pages/**/*.ts',
    './src/components/**/*.tsx',
    './src/components/**/*.ts',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        custom: {
          primary: '#7BE495',
          secondary: '#01002F',
          tertiary: '#100F32',
          input: '#30305B',
        },
        dark: '#121618',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
}
