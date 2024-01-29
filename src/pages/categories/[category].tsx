import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Category, Post } from '@/types';
import { getAllPosts } from '@/utils/markdown';
import Categories from '@/components/category/Categories';
import PostList from '@/components/post/PostList';
import MobileCategories from '@/components/category/MobileCategories';
import usePagination from '@/hook/usePagination';

interface CategoryPageProps {
  posts?: Post[];
  category: string;
}

const CategoryPage = ({ posts = [], category }: CategoryPageProps) => {
  const { pageIdx, postsInPage } = usePagination(posts);

  return (
    <div className="flex flex-col lg:flex-row">
      <Categories />
      <MobileCategories defaultCategory={category} />
      <PostList pageIndex={pageIdx} posts={postsInPage} />
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
      category,
    },
  };
};

export default CategoryPage;
