import Categories from '@/components/category/Categories';
import PostTitle from '@/components/post/PostTitle';
import useIsDesktop from '@/hook/useIsDesktop';
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
  const { isDesktop } = useIsDesktop();

  return (
    <div className="flex flex-col lg:flex-row">
      {isDesktop && <Categories />}

      <div className="lg:pl-[300px] lg:w-full">
        <PostTitle
          title={data.title}
          createdAt={data.createdAt}
          category={data.category}
        />
        <section className="prose rounded-[5px] p-[12px] dark:bg-dark-blue-dark dark:border-2 dark:border-dark-sky-200 bg-white lg:overflow-auto lg:p-[30px] lg:mt-[16px] lg:rounded-[10px] h-full">
          <MDXRemote {...content} />
        </section>
      </div>
    </div>
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
  const { content, data } = getPost(`${slug}.mdx`);

  const mdxSource = await serializeMdx(content);

  return {
    props: { content: mdxSource, data },
  };
};

export default PostPage;
