import React from "react";
import styled from "styled-components";
import { AppBase } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { Post } from "../components/Post";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";

export const VirtualizedList = () => {
  const { posts } = useVirtualizedList();

  return (
    <AppBase>
      <PageHeader title={"Virtualized List example"} />
      <Contents>
        <PostList>
          {posts.map((post) => {
            return (
              <PostListItem key={post.id}>
                <Post post={post} />
              </PostListItem>
            );
          })}
        </PostList>
      </Contents>
    </AppBase>
  );
};

const Contents = styled.div`
  margin-top: 36px;
  margin-bottom: 96px;
`;

const PostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PostListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-radius: 4px;
  transition: all 50ms ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }

  & + & {
    margin-top: 8px;
  }
`;
