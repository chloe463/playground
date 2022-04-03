import { motion } from "framer-motion";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef } from "react";
import { IS_SERVER } from "../../common/isServer";
import { appBaseStyle, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { PostDetail } from "../../components/PostList";
import { PostList } from "../../components/PostList/PostList";
import { usePostList } from "../../components/PostList/usePostList";
import { addApolloStateToPageProps, initializeApollo } from "../../hooks/useAplloClient";
import {
  GetPostConnectionDocument,
  GetPostConnectionQuery,
} from "../../__generated__/graphqlOperationTypes";

type Props = {
  posts: GetPostConnectionQuery;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const client = initializeApollo();

  const { data: posts } = await client.query({
    query: GetPostConnectionDocument,
    variables: {
      first: 10,
      after: "0",
      query: "",
    },
  });

  return addApolloStateToPageProps(client, { props: { posts } });
};

const VirtualizedList: React.FC<Props> = () => {
  const { posts, totalCount, fetchMorePosts } = usePostList();
  const scrollPosCache = useRef<number>(0);
  const router = useRouter();
  const postId = useMemo(() => {
    if (router.query.slug) {
      return Number(router.query.slug[0]);
    }
    return null;
  }, [router]);

  const post = useMemo(() => {
    if (posts) {
      return posts.find((post) => post.id === postId);
    }
    return null;
  }, [postId, posts]);

  useEffect(() => {
    const listener = (path: string) => {
      if (IS_SERVER) return;
      if (/[\d]+$/.test(path)) {
        scrollPosCache.current = window.scrollY;
      } else {
        window.scrollTo(0, scrollPosCache.current);
      }
    };
    router.events.on("routeChangeComplete", listener);
    return () => {
      router.events.off("routeChangeComplete", listener);
    };
  }, [router.events]);

  return (
    <>
      <motion.div
        className={appBaseStyle}
        initial={{ opacity: 1, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={transition}
      >
        <PageHeader title={"Virtualized List example"} />
        <div className="mt-9 mb-24">
          <PostList totalCount={totalCount} posts={posts} fetchMorePosts={fetchMorePosts} />
        </div>
      </motion.div>
      {!IS_SERVER && postId && post && <PostDetail post={post} />}
    </>
  );
};

export default VirtualizedList;
