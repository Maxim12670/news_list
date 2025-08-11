import { useEffect, useState } from "react";
import { List } from "antd";
import { useGetPostsQuery } from "./store/postApi";
import Post from "./component/post/post";
import { useInfinityScroll } from "./hooks/infinityScroll";
import type { IPost } from "./interface/IPost";

const App = () => {
  const [page, setPage] = useState<number>(0);
  const { data: posts = [], isLoading, isFetching } = useGetPostsQuery(page);
  const [viewPosts, setViewPosts] = useState<IPost[]>(posts);

  const sentinelRef = useInfinityScroll(() => {
    if (!isFetching) {
      setPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    if (viewPosts.length) {
      setViewPosts((prev) => [...prev, ...posts]);
    }
  }, [posts]);

  return (
    <>
      <List
        itemLayout="vertical"
        loading={isLoading || isFetching}
        dataSource={posts || []}
        renderItem={(post) => (
          <List.Item>
            <Post {...post} />
          </List.Item>
        )}
      />
      <div ref={sentinelRef}></div>
    </>
  );
};

export default App;
