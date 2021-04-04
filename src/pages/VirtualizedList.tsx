import React from "react";
import styled from "styled-components";
import { AppBase } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";

export const VirtualizedList = () => {
  const { posts, postsLoading, fetchMorePosts } = useVirtualizedList();
  console.log({ posts, postsLoading });
  const onClickFetchMore = () => {
    fetchMorePosts();
  };
  return (
    <AppBase>
      <button onClick={onClickFetchMore} disabled={postsLoading}>fetchMore</button>
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
