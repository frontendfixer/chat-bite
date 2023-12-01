/** @type {import("prettier").Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  tailwindFunctions: ['cn'],
  plugins: ['prettier-plugin-prisma', 'prettier-plugin-tailwindcss'],
};

module.exports = config;
