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
      className="rounded-[50px] w-fit py-[10px] px-[12px] shadow text-center hover:bg-sun card"
    >
      {categoryName}
    </Link>
  );
};

export default CategoryItem;
