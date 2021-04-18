import React from "react";
import styled from "styled-components";
import { PostFragment } from "../hooks/__generated__/PostFragment";

const AVATAR_URL = "https://dummyimage.com/64x64/b3b3b3/ffffff";

type Props = {
  post: PostFragment;
};

export const Post: React.VFC<Props> = ({ post }) => {
  return (
    <>
      <DummyAvatar src={AVATAR_URL} />
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
    </>
  );
}

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
