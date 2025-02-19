import React, { useCallback } from "react";
import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import "react-virtualized/styles.css";
import { Post, PostPlaceholder } from ".";
import { PostFragment } from "../../__generated__/graphqlOperationTypes";

const INFINITE_LOAD_THRESHOLD = 3;
const INFINITE_LOAD_MIN_BATCH_SIZE = 1;
const ROW_HEIGHT = 96;
const ROW_MARGIN = 8;

type Props = {
  totalCount: number;
  posts: PostFragment[];
  fetchMorePosts: () => Promise<void>;
};

export const PostList: React.FC<Props> = (props) => {
  const { totalCount, posts } = props;
  const isRowLoaded = useCallback(
    ({ index }: { index: number }) => {
      return Boolean(posts[index]);
    },
    [posts]
  );

  const rowRenderer: ListRowRenderer = useCallback(
    ({ key, index, style }) => {
      const post = posts[index];
      return (
        <div key={key} style={style}>
          {post ? <Post post={post} /> : <PostPlaceholder />}
        </div>
      );
    },
    [posts]
  );

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={props.fetchMorePosts}
      rowCount={totalCount}
      threshold={INFINITE_LOAD_THRESHOLD}
      minimumBatchSize={INFINITE_LOAD_MIN_BATCH_SIZE}
    >
      {({ onRowsRendered, registerChild }) => {
        return (
          <WindowScroller>
            {({ height, isScrolling, scrollTop, onChildScroll }) => {
              return (
                <AutoSizer disableHeight={true}>
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
  );
};
