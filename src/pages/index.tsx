import React from 'react';
import { DUMMY_POST } from '@/DUMMY';
import PostItem from '@/components/post/PostItem';

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-2">
      {DUMMY_POST.length > 0 ? (
        DUMMY_POST.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <PostItem key={`post item-${index}`} post={post} />
        ))
      ) : (
        <>no items!</>
      )}
    </div>
  );
}
