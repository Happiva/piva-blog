import { forwardRef } from 'react';
import { Post } from '@/types';
import PostItem from './PostItem';
import EmptyList from '../shared/EmptyList';

interface PostListProps {
  posts: Post[];
}

const PostList = forwardRef<HTMLDivElement, PostListProps>(({ posts }, ref) => {
  const listStyle = `flex flex-1 flex-col items-center lg:place-items-center lg:w-full lg:items-end lg:pl-left-menu`;
  return (
    <div ref={ref} className={listStyle}>
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
