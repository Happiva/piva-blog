import React from 'react';
import { Category } from '@/types';
import CategoryItem from './Category';

const Categories = () => {
  return (
    <div className="flex flex-col space-y-4 w-[300px] h-full lg:fixed">
      <CategoryItem text="전체" />
      {Object.keys(Category).map((el) => (
        <CategoryItem
          key={el}
          category={Category[el as keyof typeof Category]}
        />
      ))}
    </div>
  );
};

export default Categories;
