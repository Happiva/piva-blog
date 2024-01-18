import { LayoutProps, Post } from '@/types';
import React from 'react';
import PostTitle from './PostTitle';

interface PostLayoutProps extends LayoutProps {
  postData: Post;
}

const PostLayout = ({ postData, children }: PostLayoutProps) => {
  return (
    <>
      <PostTitle
        title={postData.title}
        createdAt={postData.createdAt}
        category={postData.category}
      />
      <section className="bg-white lg:p-[16px] lg:mt-[16px] lg:rounded-[10px] h-full">
        {children}
      </section>
    </>
  );
};

export default PostLayout;
