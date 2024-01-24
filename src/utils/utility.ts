import { CATEGORY_NAME } from '@/constants';
import { Category } from '@/types';

export const getFormattedDate = (date: Date) => {
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const formattedDate = `${date.getFullYear()}-${month}-${day}`;

  return formattedDate;
};

export const getCategoryName = (category: Category) => {
  return CATEGORY_NAME.find((el) => el.key === category)?.text;
};

export const debounce = (callback: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: []) => {
    let result;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      result = callback(...args);
    }, delay);
    return result;
  };
};
