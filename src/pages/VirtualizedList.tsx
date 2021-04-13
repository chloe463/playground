import React, { useState } from "react";
import styled from "styled-components";
import { AppBase } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";

export const VirtualizedList = () => {
  const [query, setQuery] = useState("");
  const {
    posts,
    postsLoading,
    fetchMorePosts,
    refetchPosts,
  } = useVirtualizedList();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetchPosts(query);
  };

  return (
    <AppBase>
      <form onSubmit={onSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
      </form>
      <button onClick={fetchMorePosts} disabled={postsLoading}>fetchMore</button>
      <PageHeader title={"Virtualized List example"} />
      <Contents>
        <PostList>
          {posts.map((post) => {
            return (
              <PostListItem key={post.id}>
                {post.id}. {post.title}
              </PostListItem>
            );
          })}
        </PostList>
      </Contents>
    </AppBase>
  );
};

const Contents = styled.div``;

const PostList = styled.ul``;

const PostListItem = styled.li``;
