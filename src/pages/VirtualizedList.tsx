import React, { useCallback } from "react";
import { AutoSizer, InfiniteLoader, List, ListRowRenderer, WindowScroller } from "react-virtualized";
import 'react-virtualized/styles.css';
import styled from "styled-components";
import { AppBase } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { Post } from "../components/Post";
import { PostPlaceholder } from "../components/PostPlaceholder";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";

export const VirtualizedList = () => {
  const { posts, totalCount, fetchMorePosts } = useVirtualizedList();

  const isRowLoaded = useCallback(({ index }: { index: number }) => {
    return Boolean(posts[index]);
  }, [posts]);

  const rowRenderer: ListRowRenderer = useCallback(({ key, index, style }) => {
    const post = posts[index];
    if (!post) {
      return null;
    }
    return (
      <div key={key} style={style}>
        <PostListItem >
          <Post post={post} />
        </PostListItem>
      </div>
    );
  }, [posts]);

  return (
    <AppBase>
      <PageHeader title={"Virtualized List example"} />
      <Contents>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={fetchMorePosts}
          rowCount={totalCount}
          threshold={3}
          minimumBatchSize={1}
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
                            rowHeight={96 + 8}
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
        {posts.length < totalCount && Array.from({length:3}, (_, i) => i).map((v) => {
          return (
            <PostListItem key={v} $loading={true}>
              <PostPlaceholder />
            </PostListItem>
          );
        })}
      </Contents>
    </AppBase>
  );
};

const Contents = styled.div`
  margin-top: 36px;
  margin-bottom: 96px;
`;

const PostListItem = styled.div<{ $loading?: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 16px 24px;
  border-radius: 4px;
  transition: all 50ms ease-out;

  &:hover {
    background-color: ${({ $loading }) => $loading ? "#ffffff" : "rgba(0, 0, 0, 0.03)"};
    cursor: ${({ $loading }) => $loading ?  "default" : "pointer"};
  }
`;
