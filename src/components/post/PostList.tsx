import { forwardRef } from 'react';
import { Post } from '@/types';
import PostItem from './PostItem';
import EmptyList from '../shared/EmptyList';

interface PostListProps {
  posts: Post[];
}

const PostList = forwardRef<HTMLDivElement, PostListProps>(({ posts }, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center lg:h-dvh lg:place-items-center lg:w-full lg:items-end lg:pl-[300px]"
    >
      {posts.length > 0 ? (
        posts.map((post) => {
          const { title } = post;
          return <PostItem key={`post item-${title}`} post={post} />;
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
});

PostList.displayName = 'PostList';

export default PostList;
