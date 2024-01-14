import { Post } from '@/types';
import React from 'react';
import Image from 'next/image';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, thumbnail: thumbnailPath, createdAt, category } = post;

  return (
    <button
      type="button"
      className="bg-white rounded-[5px] p-[8px] max-w-[343px] shadow mb-[16px]"
    >
      <Image
        alt="Thumbnail for blog post"
        className="rounded-[5px]"
        width={328}
        height={180}
        src={thumbnailPath}
      />
      <div className="justify-between mt-[8px] flex">
        <div className="w-full">
          <div className="text-start font-bold text-2xl line-clamp-1">
            {title}
          </div>
          <div className="text-start text-gray-base italic font-bold">
            {createdAt}
          </div>
        </div>
        <div className="bg-sand-dark rounded-[7px] px-[6px] py-[4px] font-bold italic h-fit">
          {category}
        </div>
      </div>
    </button>
  );
};

export default PostItem;
