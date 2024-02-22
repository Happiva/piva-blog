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
    <div className="card flex justify-between mb-[8px] rounded-[5px] px-[10px] py-[6px] lg:rounded-[10px] lg:px-[20px] lg:py-[12px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[8px]">
        <CategoryTag className="hidden lg:block" category={category} />
        <div className="text-xl font-bold lg:text-3xl lg:font-normal">
          {title}
        </div>
        <div className="place-self-end text-xs lg:hidden">{`by Piva ∙ ${createdAt}`}</div>
      </div>
      <div className="place-self-end hidden lg:block">{`by Piva ∙ ${createdAt}`}</div>
      <CategoryTag className="self-end lg:hidden" category={category} />
    </div>
  );
};

export default PostTitle;
