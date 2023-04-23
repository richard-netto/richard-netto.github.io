/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

const themeVariant = plugin(({ addVariant }) => {
  addVariant('theme-dark', '.dark &');
  addVariant('theme-light', '.light &');
});

module.exports = themeVariant;
