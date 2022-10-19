import { useInfiniteQuery } from 'react-query';
import { useRef, useCallback } from 'react';
import { getPostsPage } from '../api/axios';
import NavBar from '../components/NavBar/NavBar';
import Articles from '../components/Articles/Articles';

export default function Home() {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery(
    '/articles',
    ({ pageParam = 1 }) => getPostsPage(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    },
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log('We are near the last post!');
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage],
  );

  if (status === 'error')
    return <p className="center">Error: {error.message}</p>;

  const content = data?.pages.map((pg) => {
    return pg.map((post, i) => {
      if (pg.length === i + 1) {
        return <Articles ref={lastPostRef} key={post.id} props={post} />;
      }
      return <Articles key={post.id} props={post} />;
    });
  });

  return (
    <div className="home">
      <NavBar />
      <div className="articles__container">
        {content}
        {isFetchingNextPage && <p className="center">Loading More Posts...</p>}
      </div>
    </div>
  );
}
