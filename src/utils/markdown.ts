import { Post } from '@/types';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

const PATH = 'posts/';

export const getFileContent = (fileName: string) => {
  const FILE_PATH = PATH + fileName;
  return readFileSync(FILE_PATH, 'utf-8');
};

export const getPost = (fileName: string) => {
  const source = getFileContent(fileName);
  const { content, data } = matter(source);

  return { content, data };
};

export const getAllPosts = () => {
  const files = readdirSync(PATH);
  const markdownFiles = files.filter((file) => file.includes('.mdx'));

  const metaDatas = markdownFiles
    .map((file) => {
      const source = getFileContent(file);
      const { data } = matter(source);

      return {
        slug: file.replace('.mdx', ''),
        ...data,
      } as Post;
    })
    .filter((file) => file?.draft === false);

  return metaDatas;
};

export const serializeMdx = async (source: string) => {
  return serialize(source, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
  });
};
