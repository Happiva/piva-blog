import PostLayout from '@/components/post/PostLayout';
import { Post } from '@/types';
import { getAllPosts, getPost } from '@/utils/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostProps {
  content: string;
  data: Post;
}

const PostPage = ({ content, data }: PostProps) => {
  return (
    <PostLayout postData={data}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </PostLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug ?? '';
  const { content, data } = getPost(`${slug}.md`);

  return {
    props: { content, data },
  };
};

export default PostPage;
