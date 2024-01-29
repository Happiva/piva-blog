import { MAX_CONTENTS_DISPLAY } from '@/constants';
import { Post } from '@/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePagination = (originalPosts: Post[]) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);

  useEffect(() => {
    const page = router.query?.page ?? '1';
    setCurrentPage(Number.parseInt(page as string, 10));
  }, [router.query?.page]);

  useEffect(() => {
    const startIdx = (currentPage - 1) * 5;
    const endIdx = startIdx + MAX_CONTENTS_DISPLAY;

    const selectedPosts = originalPosts.filter(
      (post, idx) => startIdx <= idx && idx < endIdx,
    );
    setVisiblePosts(selectedPosts);
  }, [currentPage, originalPosts]);

  return {
    pageIdx: currentPage,
    postsInPage: visiblePosts,
  };
};

export default usePagination;
