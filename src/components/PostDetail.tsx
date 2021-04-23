import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostFragment, useGetCommentsQuery } from "../generated/graphql";

const AVATAR_URL = "https://dummyimage.com/88x88/b3b3b3/ffffff";
const AVATAR_URL_36 = "https://dummyimage.com/36x36/b3b3b3/ffffff";

type Props = {
  post: PostFragment;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GET_COMMENTS_QUERY = gql`
  query GetComments($postId: Int!) {
    comments(postId: $postId) {
      id
      postId
      name
      email
      body
    }
  }
`;

export const PostDetail: React.VFC<Props> = (props) => {
  const { post } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { data: commentsQueryRes, loading } = useGetCommentsQuery({
    variables: {
      postId: post.id,
    },
  });

  useLayoutEffect(() => {
    if (!contentRef.current) {
      return;
    }
    if (contentRef.current.getBoundingClientRect().height > window.innerHeight * 0.6) {
      contentRef.current.style.position = "relative";
      contentRef.current.style.top = "15vh";
      contentRef.current.style.borderBottomLeftRadius = "0px";
      contentRef.current.style.borderBottomRightRadius = "0px";
      contentRef.current.style.paddingBottom = "96px";
    }
  }, []);

  useEffect(() => {
    let original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = original;
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto", overflow: "scroll" }}
        className="overlay"
      >
        <Link to={`/virtualized-list`} />
        <Card ref={contentRef}>
          <Header>
            <AvatarImage src={AVATAR_URL} layoutId={`avatarImage-${post.id}`}/>
            <PostTitle layoutId={`postTitle-${post.id}`}>
              {post.id}. {post.title}
            </PostTitle>
          </Header>
          <PostBody layoutId={`postId-${post.id}`}>
            <PostBodyText>
              {post.body}
            </PostBodyText>
          </PostBody>
          {commentsQueryRes && (
            <Comments>
              {commentsQueryRes.comments.map((comment) => {
                return (
                  <Comment key={comment?.id}>
                    <CommentUser>
                      <CommentUserAvatar src={AVATAR_URL_36} />
                      <CommentUserName>
                        {comment?.name}
                      </CommentUserName>
                    </CommentUser>
                    <CommentText>
                      {comment?.body}
                    </CommentText>
                  </Comment>
                );
              })}
            </Comments>
          )}
          {loading && (
            <Comments>
              {Array.from({ length: 5 }, (_, i) => i).map((key) => {
                return (
                  <CommentDummy key={key} />
                );
              })}
            </Comments>
          )}
        </Card>
      </Overlay>
    </>,
    document.querySelector("body") as HTMLElement
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  background: rgba(204, 204, 204, 0.64);
  will-change: opacity;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;

  a {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Card = styled(motion.div)`
  display: block;
  box-sizing: border-box;
  width: 80%;
  max-width: 1280px;
  min-width: 720px;
  padding: 40px 24px;
  background-color: white;
  border-radius: 12px;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarImage = styled(motion.img)`
  border-radius: 50%;
`;

const PostTitle = styled(motion.h3)`
  margin: 0;
  margin-left: 16px;
  padding: 0;
  font-size: 32px;
  line-height: 44px;
  color: rgba(0, 0, 0, 0.86);
`;

const PostBody = styled(motion.div)`
  margin-top: 32px;
`

const PostBodyText = styled.p``;

const Comments = styled.ul`
  list-style: none;
  margin-top: 48px;
  margin-left: 52px;
`;

const Comment = styled.li`
  list-style: none;
  & + & {
    margin-top: 16px;
  }
`;

const CommentUser = styled.div`
  display: flex;
  align-items: center;
`;

const CommentUserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const CommentUserName = styled.p`
  margin-left: 8px;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.74);
`;

const CommentDummy = styled.li`
  list-style: none;
  display: block;
  height: 24px;
  width: 480px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  & + & {
    margin-top: 16px;
  }
`;

const CommentText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
`;
