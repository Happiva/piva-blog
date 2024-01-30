import { Post } from '@/types';
import usePagination from '@/hook/usePagination';
import PostItem from './PostItem';
import EmptyList from '../shared/EmptyList';
import Pagination from './Pagination';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const { pageIdx, postsInPage, prevEnabled, nextEnabled } =
    usePagination(posts);

  return (
    <div className="flex flex-col items-center lg:place-items-center lg:w-[85%] lg:items-end lg:pl-left-menu lg:pb-[20px]">
      {postsInPage.length > 0 ? (
        <>
          {postsInPage.map((post, index) => {
            const { title } = post;
            // eslint-disable-next-line react/no-array-index-key
            return <PostItem key={`post item-${title}${index}`} post={post} />;
          })}
          <Pagination
            currentPage={pageIdx}
            prevEnabled={prevEnabled}
            nextEnabled={nextEnabled}
          />
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

PostList.displayName = 'PostList';

export default PostList;
