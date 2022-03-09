import { motion } from "framer-motion";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import { AutoSizer, InfiniteLoader, List, ListRowRenderer, WindowScroller } from "react-virtualized";
import 'react-virtualized/styles.css';
import { appBaseStyle, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { Post, PostDetail, PostPlaceholder } from "../../components/Post";
import { addApolloStateToPageProps, initializeApollo } from "../../hooks/useAplloClient";
import { useVirtualizedList } from "../../hooks/VirtualizedList.hooks";
import { GetPostConnectionDocument, GetPostConnectionQuery } from "../../__generated__/graphqlOperationTypes";

const INFINITE_LOAD_THRESHOLD = 3;
const INFINITE_LOAD_MIN_BATCH_SIZE = 1;
const ROW_HEIGHT = 96;
const ROW_MARGIN = 8;

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
  const { posts, totalCount, fetchMorePosts } = useVirtualizedList();
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

  const isRowLoaded = useCallback(({ index }: { index: number }) => {
    return Boolean(posts[index]);
  }, [posts]);

  const rowRenderer: ListRowRenderer = useCallback(({ key, index, style }) => {
    const post = posts[index];
    return (
      <div key={key} style={style}>
        <div className="hover:bg-gray-50 cursor-pointer">
          {post ? <Post post={post} /> : <PostPlaceholder />}
        </div>
      </div>
    );
  }, [posts]);

  return (
    <motion.div
      className={appBaseStyle}
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <PageHeader title={"Virtualized List example"} />
      <div className="mt-9 mb-24">
        {postId && post && <PostDetail post={post} />}
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={fetchMorePosts}
          rowCount={totalCount}
          threshold={INFINITE_LOAD_THRESHOLD}
          minimumBatchSize={INFINITE_LOAD_MIN_BATCH_SIZE}
        >
          {({ onRowsRendered, registerChild }) => {
            return (
              <WindowScroller>
                {({ height, isScrolling, scrollTop, onChildScroll }) => {
                  return (
                    <AutoSizer disableHeight={true} >
                      {({ width }) => {
                        return (
                          <List
                            autoHeight
                            height={height}
                            width={width}
                            isScrolling={isScrolling}
                            scrollTop={scrollTop}
                            onScroll={onChildScroll}
                            onRowsRendered={onRowsRendered}
                            ref={registerChild}
                            rowCount={totalCount}
                            rowHeight={ROW_HEIGHT + ROW_MARGIN}
                            rowRenderer={rowRenderer}
                          />
                        );
                      }}
                    </AutoSizer>
                  );
                }}
              </WindowScroller>
            );
          }}
        </InfiniteLoader>
      </div>
    </motion.div>
  );
};

export default VirtualizedList;
