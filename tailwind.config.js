/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const themeVariant = require('./src/plugins/themeVariants.js');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'header-options': 'var(--font-size-header-options)',
        'header-title': 'var(--font-size-header-title)',
      },
      textColor: {
        dark: {
          base: 'var(--color-text-base)',
        },
        light: {
          base: 'var(--color-text-base)',
        },
      },
      backgroundColor: {
        dark: {
          'header-background': 'var(--color-header-background)',
          'header-button-hover': 'var(--color-header-button-hover-menu)',
          'header-window-close-button-hover':
            'var(--color-window-close-button-hover)',
          'header-window-button-hover': 'var(--color-window-button-hover)',
        },
        light: {
          'header-background': 'var(--color-header-background)',
          'header-button-hover': 'var(--color-header-button-hover-menu)',
          'header-window-close-button-hover':
            'var(--color-window-close-button-hover)',
          'header-window-button-hover': 'var(--color-window-button-hover)',
        },
      },
    },
  },
  plugins: [themeVariant],
};
