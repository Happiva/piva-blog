import { Category } from '@/types';
import { getCategoryName } from '@/utils/utility';

interface CategoryTagProps extends React.HTMLProps<HTMLDivElement> {
  category: Category;
}

const CategoryTag = ({ category, ...props }: CategoryTagProps) => {
  const categoryName = getCategoryName(category);
  const tagStyle = `${props.className} bg-sand-dark rounded-[7px] px-[6px] py-[4px] text-end font-bold italic h-fit w-fit dark:text-dark-black`;
  return <div className={tagStyle}>{categoryName}</div>;
};

export default CategoryTag;
