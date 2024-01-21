import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: {
        dark: '#32838C',
        base: '#60BFBF',
        light: '#BAD9D9',
      },
      sand: {
        base: '#F2E6D8',
        dark: '#F2CEAE',
      },
      dark: {
        black: '#00080D',
        blue: {
          base: '#062540',
          dark: '#011826',
        },
        sky: {
          100: '#8EA8BF',
          200: '#56738C',
        },
      },
      gray: {
        base: '#808080',
        dark: '#0C0C0C',
      },
      sun: '#E1622C',
      moon: '#FFE791',
    },
    extend: {
      fontFamily: {
        comfortaa: ['var(--font-comfortaa)'],
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/typography')],
};
export default config;
