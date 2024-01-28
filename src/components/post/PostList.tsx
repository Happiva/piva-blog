import { Post } from '@/types';
import PostItem from './PostItem';
import EmptyList from '../shared/EmptyList';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="flex flex-col items-center lg:place-items-center lg:w-[85%] lg:items-end lg:pl-left-menu">
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
};

PostList.displayName = 'PostList';

export default PostList;
