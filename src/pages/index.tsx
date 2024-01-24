import React from 'react';
import { GetStaticProps } from 'next';
import Categories from '@/components/category/Categories';
import { getAllPosts } from '@/utils/markdown';
import { Post } from '@/types';
import PostList from '@/components/post/PostList';

interface HomeProps {
  posts?: Post[];
}

export default function Home({ posts = [] }: HomeProps) {
  return (
    <div className="flex flex-col lg:flex-row">
      <Categories />
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
