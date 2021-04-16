import React from "react";
import styled from "styled-components";
import { AppBase } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";

const avatarUrl = "https://dummyimage.com/64x64/b3b3b3/ffffff";

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
                <DummyAvatar src={avatarUrl} />
                <PostListItemContent>
                  <ItemHeader>
                    <ItemTitle>
                      {post.id}. {post.title}
                    </ItemTitle>
                  </ItemHeader>
                  <ItemBody>
                    <ItemText>
                      {post.body}
                    </ItemText>
                  </ItemBody>
                </PostListItemContent>
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

const DummyAvatar = styled.img`
  border-radius: 50%;
`;

const PostListItemContent = styled.div`
  margin-left: 16px;
`;

const ItemHeader = styled.header``;

const ItemTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.86);
`;

const ItemBody = styled.div`
  margin-top: 4px;
`;

const ItemText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.56);

  max-width: calc(1280px - 64px - 16px - 48px);
  min-width: calc(720px - 64px - 16px - 48px);
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
