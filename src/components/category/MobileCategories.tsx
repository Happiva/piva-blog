import { Category } from '@/types';
import { getCategoryName } from '@/utils/utility';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

interface MobileCategoriesProps {
  defaultCategory?: string;
}

const MobileCategories = ({ defaultCategory }: MobileCategoriesProps) => {
  const router = useRouter();
  const selectedCategory = defaultCategory as Category;

  let defaultValue = 'all';

  if (selectedCategory != null) {
    const index = Object.values(Category).indexOf(selectedCategory);
    defaultValue = Object.keys(Category)[index];
  }

  const onChangeSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === 'all') {
      router.push('/');
    } else {
      const category = Category[value as keyof typeof Category];
      router.push(`/categories/${category}`);
    }
  };

  return (
    <div className="mb-[8px] lg:hidden">
      <select
        className="rounded-[5px] p-[8px]"
        onChange={onChangeSelection}
        defaultValue={defaultValue}
      >
        <option value="all">전체</option>
        {Object.keys(Category).map((el) => (
          <option key={el} value={el}>
            {getCategoryName(Category[el as keyof typeof Category])}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MobileCategories;
