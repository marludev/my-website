module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
      typography: {
        DEFAULT: {
          css: {
            color: 'unset',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
