import { motion } from "framer-motion";
import React, { useCallback, useMemo } from "react";
import { RouteProps, useRouteMatch } from "react-router";
import { AutoSizer, InfiniteLoader, List, ListRowRenderer, WindowScroller } from "react-virtualized";
import 'react-virtualized/styles.css';
import { appBaseStyle, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { Post } from "../../components/Post";
import { PostDetail } from "../../components/PostDetail";
import { PostPlaceholder } from "../../components/PostPlaceholder";
import { useVirtualizedList } from "../../hooks/VirtualizedList.hooks";

const INFINITE_LOAD_THRESHOLD = 3;
const INFINITE_LOAD_MIN_BATCH_SIZE = 1;
const ROW_HEIGHT = 96;
const ROW_MARGIN = 8;

type Props = {} & RouteProps;

export const VirtualizedList: React.FC<Props> = (props) => {
  const { posts, totalCount, fetchMorePosts } = useVirtualizedList();
  const matches = useRouteMatch<{ id: string }>("/virtualized-list/:id");
  const postId = matches ? parseInt(`${matches.params.id}`, 10) : null;

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
