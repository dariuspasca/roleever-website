/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        gitan: ['gitan-latin', 'sans-serif'],
      },
      colors: {
        'dark-shade': '#000000',
        'medium-shade': '#9D9D9C',
        primary: '#8E1500',
        medium: '#CBC7C1',
        secondary: '#CCAB39',
        warning: '#B76900',
        'medium-tint': '#E1DED8',
        success: '#389809',
        'dark-tint': '#5A554E',
        danger: '#FF0C0C',
        dark: '#212121',
        'primary-tint': '#AE7568',
        'primary-shade': '#5B0000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
