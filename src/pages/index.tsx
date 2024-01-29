import React from 'react';
import { GetStaticProps } from 'next';
import Categories from '@/components/category/Categories';
import { getAllPosts } from '@/utils/markdown';
import { Post } from '@/types';
import PostList from '@/components/post/PostList';
import MobileCategories from '@/components/category/MobileCategories';
import usePagination from '@/hook/usePagination';

interface HomeProps {
  posts?: Post[];
}

export default function Home({ posts = [] }: HomeProps) {
  const { pageIdx, postsInPage } = usePagination(posts);

  return (
    <div className="flex flex-col lg:flex-row">
      <Categories />
      <MobileCategories />
      <PostList pageIndex={pageIdx} posts={postsInPage} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
