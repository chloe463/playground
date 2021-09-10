import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import React from "react";
import { Link as _Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../lib/styles";
import { PostFragment } from "./__generated__/index.generated";

const AVATAR_URL = "https://dummyimage.com/64x64/b3b3b3/ffffff";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const _POST_FRAGMENT = gql`
  fragment Post on Post {
    id
    userId
    title
    body
  }
`;

type Props = {
  post: PostFragment;
};

export const Post: React.VFC<Props> = ({ post }) => {
  return (
    <Link to={`/virtualized-list/${post.id}`} data-cy="link-to-post-detail">
      <DummyAvatar src={AVATAR_URL} layoutId={`avatarImage-${post.id}`} />
      <PostListItemContent>
        <ItemHeader>
          <ItemTitle layoutId={`postTitle-${post.id}`}>
            {post.id}. {post.title}
          </ItemTitle>
        </ItemHeader>
        <ItemBody layoutId={`postId-${post.id}`}>
          <ItemText>
            {post.body}
          </ItemText>
        </ItemBody>
      </PostListItemContent>
    </Link>
  );
}

const Link = styled(_Link)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 16px 24px;
  border-radius: 4px;
  transition: all 50ms ease-out;
  text-decoration: none;

  &:hover {
    background-color: ${colors.blackAlpha50};
    cursor: pointer;
  }
`;

const DummyAvatar = styled(motion.img)`
  border-radius: 50%;
`;

const PostListItemContent = styled.div`
  margin-left: 16px;
  width: calc(100% - 64px - 16px);
`;

const ItemHeader = styled.header``;

const ItemTitle = styled(motion.h3)`
  margin: 0;
  padding: 0;
  font-size: 22px;
  line-height: 32px;
  color: ${colors.blackAlpha800};
`;

const ItemBody = styled(motion.div)`
  margin-top: 4px;
`;

const ItemText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.blackAlpha500};

  max-width: calc(1280px - 64px - 16px - 48px);
  min-width: calc(720px - 64px - 16px - 48px);
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
