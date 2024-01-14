import { getAllPosts, getPost } from '@/utils/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostProps {
  content: string;
}

const Post = ({ content }: PostProps) => {
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
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
  const content = getPost(`${slug}.md`);

  return {
    props: { content },
  };
};

export default Post;
