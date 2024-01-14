import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

const PATH = 'posts/';

export const getFileContent = (fileName: string) => {
  const FILE_PATH = PATH + fileName;
  return readFileSync(FILE_PATH, 'utf-8');
};

export const getAllPosts = () => {
  const files = readdirSync(PATH);
  const markdownFiles = files.filter((file) => file.includes('.md'));

  const metaDatas = markdownFiles.map((file) => {
    const source = getFileContent(file);
    const { data } = matter(source);

    return data;
  });

  return metaDatas;
};
