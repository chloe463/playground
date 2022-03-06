import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
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
      href={{
        pathname: `/virtualized-list/${post.id}`,
      }}
      shallow={true}
      data-cy="link-to-post-detail"
    >
      <a className="flex items-center mb-2 py-4 px-6 transition duration-75 no-underline">
        <motion.img src={AVATAR_URL} className="rounded-full" width={64} height={64} />
        <div className="ml-4 w-[calc(100%-80px)]">
          <header>
            <motion.h3 className="text-subheading text-gray-800">
              {post.id}. {post.title}
            </motion.h3>
          </header>
          <motion.div className="mt-1">
            <p className="text-body2 text-gray-500 max-w-[1154px] min-w-[592px] overflow-x-hidden text-ellipsis whitespace-nowrap">
              {post.body}
            </p>
          </motion.div>
        </div>
      </a>
    </Link>
  );
}
