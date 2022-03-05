import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
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
    <Link
      to={`/virtualized-list/${post.id}`}
      className="flex items-center mb-2 py-4 px-6 transition duration-75 no-underline"
      data-cy="link-to-post-detail"
    >
      <motion.img src={AVATAR_URL} className="rounded-full" layoutId={`avatarImage-${post.id}`} />
      <div className="ml-4 w-[calc(100%-80px)]">
        <header>
          <motion.h3 className="text-subheading text-gray-800" layoutId={`postTitle-${post.id}`}>
            {post.id}. {post.title}
          </motion.h3>
        </header>
        <motion.div className="mt-1" layoutId={`postId-${post.id}`}>
          <p className="text-body2 text-gray-500 max-w-[1154px] min-w-[592px] overflow-x-hidden text-ellipsis whitespace-nowrap">
            {post.body}
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
