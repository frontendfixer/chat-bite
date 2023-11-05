import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        radius: {
          small: '6px',
          medium: '8px',
          large: '12px',
        },
      },
      themes: {
        dark: {
          colors: {
            default: {
              '50': '#e9fff7',
              '100': '#c9ffeb',
              '200': '#98ffdd',
              '300': '#45ffca',
              '400': '#14f3bb',
              '500': '#00dba4',
              '600': '#00b388',
              '700': '#008f71',
              '800': '#00715b',
              '900': '#005c4c',
              DEFAULT: '#14f3bb',
              foreground: '#131414',
            },
            primary: {
              '50': '#e9fff7',
              '100': '#c9ffeb',
              '200': '#98ffdd',
              '300': '#45ffca',
              '400': '#14f3bb',
              '500': '#00dba4',
              '600': '#00b388',
              '700': '#008f71',
              '800': '#00715b',
              '900': '#005c4c',
              DEFAULT: '#14f3bb',
              foreground: '#131414',
            },
            secondary: {
              '50': '#f5f6f6',
              '100': '#e6e7e7',
              '200': '#cfd1d2',
              '300': '#aeb1b2',
              '400': '#85898b',
              '500': '#6a6e70',
              '600': '#5b5e5f',
              '700': '#4d4f51',
              '800': '#444646',
              '900': '#3b3c3e',
              DEFAULT: '#85898b',
            },
            danger: {
              '50': '#fff1f1',
              '100': '#ffe1e1',
              '200': '#ffc7c7',
              '300': '#ffa0a0',
              '400': '#ff8080',
              '500': '#f83b3b',
              '600': '#e51d1d',
              '700': '#c11414',
              '800': '#a01414',
              '900': '#841818',
              DEFAULT: '#ff8080',
              foreground: '#131414',
            },
            success: {
              '50': '#edffe5',
              '100': '#d6ffc8',
              '200': '#a2ff86',
              '300': '#7dfb5b',
              '400': '#51f229',
              '500': '#2fd80a',
              '600': '#1fad03',
              '700': '#1a8308',
              '800': '#1a670d',
              '900': '#185710',
              DEFAULT: '#51f229',
              foreground: '#131414',
            },
            warning: {
              '50': '#fffbeb',
              '100': '#fff4c6',
              '200': '#ffe788',
              '300': '#ffd95a',
              '400': '#ffc220',
              '500': '#f9a007',
              '600': '#dd7802',
              '700': '#b75406',
              '800': '#94400c',
              '900': '#7a350d',
              DEFAULT: '#ffc220',
              foreground: '#131414',
            },

            focus: '#45ffca',
            background: '#131414',
            foreground: '#fffbeb',
          },
        },
        light: {
          extend: 'dark',
          colors: {
            default: {
              DEFAULT: '#00b388',
              foreground: '#e9fff7',
            },
            primary: {
              DEFAULT: '#00b388',
              foreground: '#e9fff7',
            },
            secondary: {
              DEFAULT: '#85898b',
            },
            danger: {
              DEFAULT: '#e51d1d',
              foreground: '#fff1f1',
            },
            success: {
              DEFAULT: '#1fad03',
              foreground: '#edffe5',
            },
            warning: {
              DEFAULT: '#dd7802',
              foreground: '#fffbeb',
            },
            background: '#FFFBF5',
            foreground: '#131414',
            focus: '#00b388',
          },
        },
      },
    }),
  ],
};
export default config;
