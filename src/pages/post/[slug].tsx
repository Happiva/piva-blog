import Categories from '@/components/category/Categories';
import Comments from '@/components/post/Comments';
import FloatingButtons from '@/components/post/FloatingButtons';
import PostSeo from '@/components/post/PostSeo';
import PostTitle from '@/components/post/PostTitle';
import TOC from '@/components/post/TOC';
import HeadingComponent from '@/components/shared/Heading';
import { Heading, Post } from '@/types';
import {
  getAllPosts,
  getHeadingForTOC,
  getPost,
  serializeMdx,
} from '@/utils/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

interface PostProps {
  content: MDXRemoteSerializeResult;
  data: Post;
  tocData: Heading[];
}

const customMdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadElement>) => (
    <HeadingComponent type="h1">{props.children}</HeadingComponent>
  ),
  h2: (props: React.HTMLProps<HTMLHeadElement>) => (
    <HeadingComponent type="h2">{props.children}</HeadingComponent>
  ),
  h3: (props: React.HTMLProps<HTMLHeadElement>) => (
    <HeadingComponent type="h3">{props.children}</HeadingComponent>
  ),
  h4: (props: React.HTMLProps<HTMLHeadElement>) => (
    <HeadingComponent type="h4">{props.children}</HeadingComponent>
  ),
};

const PostPage = ({ content, data, tocData }: PostProps) => {
  const { title, createdAt, category, summary, slug } = data;

  return (
    <div className="flex flex-col lg:flex-row">
      <PostSeo
        title={title}
        category={category}
        createdAt={createdAt}
        description={summary}
        slug={slug}
      />
      <Categories />
      <FloatingButtons />
      <div className="lg:pl-left-menu lg:w-[80%] lg:pb-[30px]">
        <PostTitle title={title} createdAt={createdAt} category={category} />
        <section className="prose rounded-[5px] p-[12px] dark:bg-dark-blue-dark dark:border-2 dark:border-dark-sky-200 bg-white lg:overflow-auto lg:p-[30px] lg:mt-[16px] lg:rounded-[10px] h-fit">
          <MDXRemote {...content} components={customMdxComponents} />
        </section>
        <Comments />
      </div>
      <div className="flex-1">
        {tocData.length > 0 && <TOC tocData={tocData} />}
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
  const tocData = await getHeadingForTOC(content);

  return {
    props: { content: mdxSource, data, tocData },
  };
};

export default PostPage;
