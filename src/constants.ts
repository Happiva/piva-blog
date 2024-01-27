import { Category } from '@/types';

export const MAX_CONTENTS_DISPLAY = 4;

export const navLinks = [
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Blog',
    link: '/',
  },
  {
    text: 'Portfolio',
    link: '/portfolio',
  },
];

export const DESKTOP_WIDTH = 1024;
export const SCROLL_POINT = 100;

export const CATEGORY_NAME = [
  { key: Category.JAVASCRIPT, text: 'Javascript' },
  { key: Category.REACT, text: 'React/React Native' },
  { key: Category.PROJECT, text: 'Project' },
  { key: Category.ETC, text: 'etc' },
];
