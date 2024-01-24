import { Category } from '@/types';
import { getCategoryName } from '@/utils/utility';

interface CategoryProps {
  text?: string;
  category?: Category;
}

const CategoryItem = ({ text, category }: CategoryProps) => {
  const categoryName =
    text ?? (category != null ? getCategoryName(category) : '');
  return (
    <li>
      <button
        type="button"
        className="rounded-[50px] py-[10px] px-[12px] shadow text-center bg-white dark:border-2 dark:border-dark-sky-200 dark:bg-dark-blue-dark"
      >
        {categoryName}
      </button>
    </li>
  );
};

export default CategoryItem;
