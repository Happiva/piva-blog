import { Post } from '@/types';
import PostItem from './PostItem';
import EmptyList from '../shared/EmptyList';
import Pagination from './Pagination';

interface PostListProps {
  posts: Post[];
  pageIndex?: number;
}

const PostList = ({ posts, pageIndex }: PostListProps) => {
  return (
    <div className="flex flex-col items-center lg:place-items-center lg:w-[85%] lg:items-end lg:pl-left-menu">
      {posts.length > 0 ? (
        <>
          {posts.map((post, index) => {
            const { title } = post;
            // eslint-disable-next-line react/no-array-index-key
            return <PostItem key={`post item-${title}${index}`} post={post} />;
          })}
          <Pagination currentPage={pageIndex} />
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

PostList.displayName = 'PostList';

export default PostList;
