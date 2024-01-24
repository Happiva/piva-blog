import React from 'react';
import { Category } from '@/types';
import CategoryItem from './Category';

const Categories = () => {
  return (
    <ul className="space-y-4 w-[300px] lg:fixed">
      <CategoryItem text="전체" />
      {Object.keys(Category).map((el) => (
        <CategoryItem
          key={el}
          category={Category[el as keyof typeof Category]}
        />
      ))}
    </ul>
  );
};

export default Categories;
