/* eslint-disable import/prefer-default-export */
import { Category, Post } from './types';

const DUMMY_POST: Post[] = [
  {
    title: '블로그 만듭니다',
    createdAt: new Date(2023, 2, 9),
    thumbnail: '/images/dummy_thumbnail.jpeg',
    category: Category.JAVASCRIPT,
  },
  {
    title: '블로그 만듭니다',
    createdAt: new Date(2023, 2, 9),
    thumbnail: '/images/dummy_thumbnail.jpeg',
    category: Category.JAVASCRIPT,
  },
  {
    title: '블로그 만듭니다',
    createdAt: new Date(2023, 2, 9),
    thumbnail: '/images/dummy_thumbnail.jpeg',
    category: Category.JAVASCRIPT,
  },
];

export { DUMMY_POST };
