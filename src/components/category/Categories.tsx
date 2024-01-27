import React from 'react';
import { Category } from '@/types';
import CategoryItem from './Category';

const Categories = () => {
  return (
    <div className="flex-col space-y-4 w-left-menu h-full hidden lg:fixed lg:flex">
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
