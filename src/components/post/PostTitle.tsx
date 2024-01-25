import { Category } from '@/types';
import React from 'react';
import CategoryTag from '../shared/CategoryTag';

interface PostTitleProps {
  title: string;
  createdAt: string;
  category: Category;
}

const PostTitle = ({ title, createdAt, category }: PostTitleProps) => {
  return (
    <div className="flex justify-between bg-white dark:bg-dark-blue-dark dark:border-2 dark:border-dark-sky-200 mb-[8px] rounded-[5px] lg:rounded-[10px] lg:px-[20px] lg:py-[12px]">
      <div className="flex gap-[8px] items-center">
        <CategoryTag className="hidden lg:block" category={category} />
        <div className="lg:text-3xl">{title}</div>
      </div>
      <div className="place-self-end hidden lg:block">{`by Piva ∙ ${createdAt}`}</div>
    </div>
  );
};

export default PostTitle;
