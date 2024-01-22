import { Category } from '@/types';

interface CategoryTagProps extends React.HTMLProps<HTMLDivElement> {
  category: Category;
}

const CategoryTag = ({ category, ...props }: CategoryTagProps) => {
  const tagStyle = `${props.className} bg-sand-dark rounded-[7px] px-[6px] py-[4px] font-bold italic h-fit w-fit dark:text-dark-black`;
  return <div className={tagStyle}>{category}</div>;
};

export default CategoryTag;
