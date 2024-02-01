import { Post } from '@/types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useIsDesktop from '@/hook/useIsDesktop';
import CategoryTag from '../shared/CategoryTag';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, thumbnail: thumbnailPath, createdAt, category, slug } = post;
  const { isDesktop } = useIsDesktop();

  return (
    <Link
      href={`/post/${slug}`}
      className="bg-white dark:bg-dark-blue-dark rounded-[5px] p-[12px] max-w-[343px] shadow mb-[16px] dark:border-2 dark:border-dark-sky-200 sm:flex sm:flex-row sm:max-w-[750px] sm:w-full sm:p-[10px]"
    >
      <Image
        alt="Thumbnail for blog post"
        className="rounded-[5px] sm:mr-[20px]"
        width={isDesktop ? 233 : 328}
        height={isDesktop ? 133 : 180}
        src={thumbnailPath}
      />
      <div className="justify-between mt-[8px] flex sm:flex-col sm:m-0 sm:py-[8px]">
        <div className="w-full">
          <div className="text-start font-bold text-2xl line-clamp-1 sm:text-3xl">
            {title}
          </div>
          <div className="text-start text-gray-base italic font-bold dark:text-dark-sky-100">
            {createdAt}
          </div>
        </div>
        <CategoryTag category={category} />
      </div>
    </Link>
  );
};

export default PostItem;
