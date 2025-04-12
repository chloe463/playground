import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useIsomorphicLayoutEffect } from "../../lib";
import { GetCommentsDocument, PostFragment } from "../../__generated__/graphqlOperationTypes";
import { graphql } from "../../__generated__/gql-masking";

const AVATAR_URL = "https://dummyimage.com/88x88/b3b3b3/ffffff";
const AVATAR_URL_36 = "https://dummyimage.com/36x36/b3b3b3/ffffff";

const _GET_COMMENTS_FRAGMENT = graphql(/* GraphQL */ `
  query GetComments($postId: Int!) {
    comments(postId: $postId) {
      id
      postId
      name
      email
      body
    }
  }
`);

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
    const original = document.documentElement.style.overflow;
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
        className="fixed inset-0 grid place-items-center bg-black-alpha300"
      >
        <Link href={`/virtualized-list`} className="fixed inset-0 block"></Link>
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
          className="z-10 box-border block w-[640px] rounded-lg bg-white px-6 py-10"
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
            <ul className="ml-16 mt-12 list-none space-y-4">
              {commentsQueryRes.comments.map((comment) => {
                return (
                  <li key={comment?.id} className="list-none">
                    <div className="flex items-center">
                      <img
                        src={AVATAR_URL_36}
                        className="size-9 rounded-full"
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
            <ul className="ml-16 mt-12 list-none space-y-4">
              {Array.from({ length: 5 }, (_, i) => i).map((key) => {
                return (
                  <li
                    key={key}
                    className="block h-6 w-[480px] list-none rounded-sm bg-black-alpha100"
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
