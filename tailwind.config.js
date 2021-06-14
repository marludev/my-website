module.exports = {
  mode: 'jit',
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
          code: '#2D2A55',
        },
        dark: '#121618',
      },
      boxShadow: {
        primarycolor: '0 10px 90px -15px rgba(123, 228, 149, 0.9)',
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
