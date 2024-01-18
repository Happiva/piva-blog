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
    <div className="flex justify-between bg-white rounded-[5px] lg:rounded-[10px] lg:px-[20px] lg:py-[12px]">
      <div className="flex gap-[8px] items-center">
        <CategoryTag category={category} />
        <div className="lg:text-3xl">{title}</div>
      </div>
      <div className="place-self-end">{`by Piva ∙ ${createdAt}`}</div>
    </div>
  );
};

export default PostTitle;
