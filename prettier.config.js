/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  tailwindFunctions: ['cn'],
  plugins: ['prettier-plugin-prisma', 'prettier-plugin-tailwindcss'],
};

module.exports = config;
