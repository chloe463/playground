import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
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

export const Card = styled(motion.div)`
  display: block;
  box-sizing: border-box;
  width:640px;
  padding: 40px 24px;
  background-color: white;
  border-radius: 12px;
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarImage = styled(motion.img)`
  border-radius: 50%;
`;

export const PostTitle = styled(motion.h3)`
  margin: 0;
  margin-left: 16px;
  padding: 0;
  font-size: 32px;
  line-height: 44px;
  color: rgba(0, 0, 0, 0.86);
`;

export const PostBody = styled(motion.div)`
  margin-top: 32px;
`

export const PostBodyText = styled.p``;

export const Comments = styled.ul`
  list-style: none;
  margin-top: 48px;
  margin-left: 52px;
`;

export const Comment = styled.li`
  list-style: none;
  & + & {
    margin-top: 16px;
  }
`;

export const CommentUser = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const CommentUserName = styled.p`
  margin-left: 8px;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.74);
`;

export const CommentDummy = styled.li`
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

export const CommentText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
`;
