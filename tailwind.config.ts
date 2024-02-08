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
        light: '#D9D9D9',
        base: '#808080',
        dark: '#0C0C0C',
      },
      sun: '#E1622C',
      moon: '#FFE791',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        comfortaa: ['var(--font-comfortaa)'],
        'noto-sans-kr': ['var(--font-noto-sans-kr)'],
      },
      animation: {
        // 'fade-out': 'fadeOut 1s ease-in-out',
        // 'fade-in': 'fadeIn 1s ease-in-out',
        slide: 'slideX 0.5s ease-out',
        'slide-back': 'slideBack 0.5s ease-out',
      },
      keyframes: {
        // fadeOut: {
        //   '100%': { transform: 'opacity 0' },
        // },
        // fadeIn: {
        //   '100%': { transform: 'opacity 1' },
        // },
        slideX: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideBack: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      padding: {
        'left-menu': '250px',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/typography')],
};
export default config;
