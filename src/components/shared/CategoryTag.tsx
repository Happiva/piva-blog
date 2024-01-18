import { Category } from '@/types';

interface CategoryTagProps {
  category: Category;
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  return (
    <div className="bg-sand-dark rounded-[7px] px-[6px] py-[4px] font-bold italic h-fit">
      {category}
    </div>
  );
};

export default CategoryTag;
