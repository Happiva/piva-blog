import React from 'react';
import { Category, allCategories } from '@/types';
import CategoryItem from './Category';

const Categories = () => {
  return (
    <div className="flex-col space-y-4 w-left-menu h-full hidden lg:fixed lg:flex">
      <CategoryItem text="전체" />
      {Object.keys(allCategories).map((el) => (
        <CategoryItem key={el} category={el as Category} />
      ))}
    </div>
  );
};

export default Categories;
