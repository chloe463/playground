import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { PostFragment } from "../../__generated__/graphqlOperationTypes";

const AVATAR_URL = "https://dummyimage.com/64x64/b3b3b3/ffffff";

type Props = {
  post: PostFragment;
};

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex items-center py-4 px-6 mb-2 hover:bg-black-alpha50 transition duration-75">
      <motion.img src={AVATAR_URL} className="rounded-full" width={64} height={64} />
      <div className="ml-4 w-[calc(100%-80px)]">
        <header>
          <Link
            href={{ pathname: `/virtualized-list/${post.id}` }}
            shallow
            className="hover:underline"
            data-cy="link-to-post-detail"
          >
            <h3 className="inline text-subheading text-gray-800">
              {post.id}. {post.title}
            </h3>
          </Link>
        </header>
        <motion.div className="mt-1">
          <p className="overflow-x-hidden min-w-[592px] max-w-[1154px] text-body2 text-gray-500 text-ellipsis whitespace-nowrap">
            {post.body}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
