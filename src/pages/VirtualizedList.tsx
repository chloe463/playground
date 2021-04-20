import React, { useCallback, useMemo } from "react";
import { RouteProps, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { AutoSizer, InfiniteLoader, List, ListRowRenderer, WindowScroller } from "react-virtualized";
import 'react-virtualized/styles.css';
import styled from "styled-components";
import { AppBase, transition } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { Post } from "../components/Post";
import { PostPlaceholder } from "../components/PostPlaceholder";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";
import { PostDetail } from "./PostDetail";

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
        <PostListItem >
          {post ? <Post post={post} /> : <PostPlaceholder />}
        </PostListItem>
      </div>
    );
  }, [posts]);

  return (
    <AppBase
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <PageHeader title={"Virtualized List example"} />
      <Link to={`/layout-animation`}>Layout animation</Link>
      <Contents>
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
      </Contents>
    </AppBase>
  );
};

const Contents = styled.div`
  margin-top: 36px;
  margin-bottom: 96px;
`;

const PostListItem = styled.div<{ $loading?: boolean }>`
  &:hover {
    background-color: ${({ $loading }) => $loading ? "#ffffff" : "rgba(0, 0, 0, 0.03)"};
    cursor: ${({ $loading }) => $loading ?  "default" : "pointer"};
  }
`;
