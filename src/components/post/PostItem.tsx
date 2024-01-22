import { Post } from '@/types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CategoryTag from '../shared/CategoryTag';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, thumbnail: thumbnailPath, createdAt, category, slug } = post;

  return (
    <Link
      href={`/post/${slug}`}
      className="bg-white dark:bg-dark-blue-dark rounded-[5px] p-[8px] max-w-[343px] shadow mb-[16px] dark:border-2 dark:border-dark-sky-200 lg:flex lg:flex-row lg:max-w-none lg:w-full lg:p-[10px]"
    >
      <Image
        alt="Thumbnail for blog post"
        className="rounded-[5px] lg:mr-[20px]"
        width={328}
        height={180}
        src={thumbnailPath}
      />
      <div className="justify-between mt-[8px] flex lg:flex-col lg:m-0 lg:py-[8px]">
        <div className="w-full">
          <div className="text-start font-bold text-2xl line-clamp-1 lg:text-3xl">
            {title}
          </div>
          <div className="text-start text-gray-base italic font-bold dark:text-dark-sky-200">
            {createdAt}
          </div>
        </div>
        <CategoryTag category={category} />
      </div>
    </Link>
  );
};

export default PostItem;
