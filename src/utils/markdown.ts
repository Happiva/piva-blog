import { Post } from '@/types';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

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
    .sort((file1, file2) => {
      const date1 = new Date(file1.createdAt);
      const date2 = new Date(file2.createdAt);

      if (date1.getFullYear() === date2.getFullYear()) {
        if (date1.getMonth() === date2.getMonth())
          return date2.getDate() - date1.getDate();
        return date2.getMonth() - date1.getMonth();
      }
      return date2.getFullYear() - date1.getFullYear();
    })
    .filter((file) => file?.draft === false);

  return metaDatas;
};

export const serializeMdx = async (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      format: 'mdx',
    },
  });
};

export const getHeadingForTOC = async (source: string) => {
  const headings = source.split('\n').filter((str) => str.match(/^#+/));

  return headings.map((str) => {
    const headingText = str.replace(/^#+/, '');
    const level = 6 - str.slice(0, 6).replace(/^#+/, '').length;

    return { text: headingText, level };
  });
};
