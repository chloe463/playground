import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useIsomorphicLayoutEffect } from "../../lib";
import { GetCommentsDocument, PostFragment } from "../../__generated__/graphqlOperationTypes";

const AVATAR_URL = "https://dummyimage.com/88x88/b3b3b3/ffffff";
const AVATAR_URL_36 = "https://dummyimage.com/36x36/b3b3b3/ffffff";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _GET_COMMENTS_FRAGMENT = gql`
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

type Props = {
  post: PostFragment;
};

export const PostDetail: React.FC<Props> = (props) => {
  const { post } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { data: commentsQueryRes, loading } = useQuery(GetCommentsDocument, {
    variables: { postId: post.id },
  });

  useIsomorphicLayoutEffect(() => {
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
  }, [post, commentsQueryRes]);

  useEffect(() => {
    let original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = original;
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto", overflow: "scroll" }}
        className="grid fixed inset-0 place-items-center bg-black-alpha300"
      >
        <Link href={`/virtualized-list`} className="block fixed inset-0"></Link>
        <motion.div
          initial={{ opacity: 0, transform: "scale(.9)" }}
          animate={{
            opacity: 1,
            transform: "scale(1)",
            transition: { delay: 0.1, duration: 0.2, ease: [0.3, 0.3, 0.3, 1] },
          }}
          exit={{
            opacity: 0,
            transform: "scale(.9)",
            transition: { duration: 0.2 },
          }}
          className="box-border block z-10 py-10 px-6 w-[640px] bg-white rounded-lg"
          ref={contentRef}
          data-cy="post-detail-card"
        >
          <div className="flex items-center">
            <motion.img
              src={AVATAR_URL}
              className="rounded-full"
              width="88"
              height="88"
              alt={`${post.title}' image`}
            />
            <motion.h3
              className="ml-4 text-heading1 text-black-alpha800"
              data-cy="post-detail-card-title"
            >
              {post.id}. {post.title}
            </motion.h3>
          </div>
          <motion.div className="mt-8">
            <p>{post.body}</p>
          </motion.div>
          {commentsQueryRes && (
            <ul className="mt-12 ml-16 space-y-4 list-none">
              {commentsQueryRes.comments.map((comment) => {
                return (
                  <li key={comment?.id} className="list-none">
                    <div className="flex items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={AVATAR_URL_36}
                        className="w-9 h-9 rounded-full"
                        width="36"
                        height="36"
                        alt={`${comment?.name}'s avatar'`}
                      />
                      <p className="ml-2 text-body2 text-black-alpha800">{comment?.name}</p>
                    </div>
                    <p className="mt-2 text-body2 text-black-alpha500">{comment?.body}</p>
                  </li>
                );
              })}
            </ul>
          )}
          {loading && (
            <ul className="mt-12 ml-16 space-y-4 list-none">
              {Array.from({ length: 5 }, (_, i) => i).map((key) => {
                return (
                  <li
                    key={key}
                    className="block w-[480px] h-6 list-none bg-black-alpha100 rounded-sm"
                  />
                );
              })}
            </ul>
          )}
        </motion.div>
      </motion.div>
    </>,
    document.querySelector("body") as HTMLElement
  );
};
