import { motion } from "framer-motion";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostFragment } from "../hooks/__generated__/PostFragment";

const AVATAR_URL = "https://dummyimage.com/64x64/b3b3b3/ffffff";

type Props = {
  post: PostFragment;
};

export const PostDetail: React.VFC<Props> = (props) => {
  const { post } = props;

  useEffect(() => {
    const body = document.querySelector("body")

    let original = "scroll";
    if (body) {
      original = body.style.overflow;
      body.style.overflow = "hidden";
    }
    return () => {
      if (body) {
        body.style.overflow = original;
      }
    }
  }, []);

  return ReactDOM.createPortal(
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to={`/virtualized-list`} />
        {/* <Card layoutId={`post-${post.id}`}> */}
        <Card>
          <AvatarImage src={AVATAR_URL} layoutId={`avatarImage-${post.id}`}/>
          <PostTitle layoutId={`postTitle-${post.id}`}>
            {post.id}. {post.title}
          </PostTitle>
          <PostBody layoutId={`postId-${post.id}`}>
            <PostBodyText>
              {post.body}
            </PostBodyText>
          </PostBody>
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
  width: 640px;
  padding: 40px 24px;
  background-color: white;
  border-radius: 12px;
  z-index: 1;
`;

const AvatarImage = styled(motion.img)`
  border-radius: 50%;
`;

const PostTitle = styled(motion.h3)``;

const PostBody = styled(motion.div)``

const PostBodyText = styled.p``;
