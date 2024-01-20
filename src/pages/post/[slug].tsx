import PostLayout from '@/components/post/PostLayout';
import { Post } from '@/types';
import { getAllPosts, getPost, serializeMdx } from '@/utils/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

interface PostProps {
  content: MDXRemoteSerializeResult;
  data: Post;
}

const PostPage = ({ content, data }: PostProps) => {
  return (
    <PostLayout postData={data}>
      <MDXRemote {...content} />
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

  const mdxSource = await serializeMdx(content);

  return {
    props: { content: mdxSource, data },
  };
};

export default PostPage;
