import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Category, Post } from '@/types';
import { getAllPosts } from '@/utils/markdown';
import Categories from '@/components/category/Categories';
import PostList from '@/components/post/PostList';

interface CategoryPageProps {
  posts?: Post[];
}

const CategoryPage = ({ posts = [] }: CategoryPageProps) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Categories />
      <PostList posts={posts} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(Category).map((el) => ({
    params: { category: el },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category;
  const postsInCategory = getAllPosts().filter(
    (post) => post.category === category,
  );

  return {
    props: {
      posts: postsInCategory,
    },
  };
};

export default CategoryPage;
