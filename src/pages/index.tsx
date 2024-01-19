import React from 'react';
import { GetStaticProps } from 'next';
import PostItem from '@/components/post/PostItem';
import { getAllPosts } from '@/utils/markdown';
import { Post } from '@/types';

interface HomeProps {
  posts?: Post[];
}

export default function Home({ posts = [] }: HomeProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center lg:place-items-center lg:grid lg:grid-cols-2 lg:w-full">
        {posts.length > 0 ? (
          posts.map((post) => {
            const { title } = post;
            return <PostItem key={`post item-${title}`} post={post} />;
          })
        ) : (
          <>no items!</>
        )}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
