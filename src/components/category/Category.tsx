import { Category } from '@/types';
import { getCategoryName } from '@/utils/utility';
import Link from 'next/link';

interface CategoryItemProps {
  text?: string;
  category?: Category;
}

const CategoryItem = ({ text, category }: CategoryItemProps) => {
  const categoryName =
    text ?? (category != null ? getCategoryName(category) : '');

  const link = category != null ? `/categories/${category}` : '/';

  return (
    <Link
      href={link}
      className="rounded-[50px] w-fit py-[10px] px-[12px] shadow text-center bg-white hover:bg-sun dark:border-2 dark:border-dark-sky-200 dark:bg-dark-blue-dark"
    >
      {categoryName}
    </Link>
  );
};

export default CategoryItem;
