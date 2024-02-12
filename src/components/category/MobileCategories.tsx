import { Category, allCategories } from '@/types';
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
    defaultValue = defaultCategory as Category;
  }

  const onChangeSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === 'all') {
      router.push('/');
    } else {
      router.push(`/categories/${value}`);
    }
  };

  return (
    <div className="mb-[8px] lg:hidden">
      <select
        className="rounded-[5px] p-[6px] bg-white dark:bg-transparent dark:border-2 dark:border-dark-sky-200"
        onChange={onChangeSelection}
        defaultValue={defaultValue}
      >
        <option value="all">전체</option>
        {Object.keys(allCategories).map((el) => (
          <option key={el} value={el}>
            {getCategoryName(el as Category)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MobileCategories;
