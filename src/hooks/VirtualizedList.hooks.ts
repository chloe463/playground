import { gql, useQuery } from "@apollo/client";
import { useCallback, useMemo } from "react";
import { GetPostConnectionQuery, GetPostConnectionQueryVariables, GetPostConnectionQuery_postConnection as PostConnection } from "./__generated__/GetPostConnectionQuery";
import { PostFragment as Post } from "./__generated__/PostFragment";

const PostFragment = gql`
  fragment PostFragment on Post {
    id
    userId
    title
    body
  }
`;

const GET_POSTS_QUERY = gql`
  query GetPostConnectionQuery($first: Int, $after: String) {
    postConnection(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          ...PostFragment
        }
        cursor
      }
    }
  }
  ${PostFragment}
`;

const DEFAULT_FETCH_SIZE = 10;
const FIRST_CURSOR = "0";
const EMPTY_POSTS: Post[] = [];

const isPost = (node: Post | null | undefined): node is Post => Boolean(node);

type State = {
 posts: Post[];
 lastCursor: string;
}

export const mergePostConnections = (existing: PostConnection, incoming: PostConnection): PostConnection => {
  if (existing === undefined) {
    return incoming;
  }
  const next: PostConnection = {
    edges: [...(existing.edges || []), ...(incoming.edges || [])],
    pageInfo: {
      hasNextPage: Boolean(incoming.pageInfo.hasNextPage),
      hasPreviousPage: Boolean(incoming.pageInfo.hasPreviousPage),
      startCursor: null,
      endCursor: null,
      __typename: "PageInfo"
    },
    __typename: "PostConnection",
  };
  return next;
};

export const useVirtualizedList = () => {
  const { data, loading, fetchMore } = useQuery<GetPostConnectionQuery, GetPostConnectionQueryVariables>(GET_POSTS_QUERY, {
    variables: {
      first: DEFAULT_FETCH_SIZE,
      after: FIRST_CURSOR,
    },
  });

  const { posts, lastCursor } = useMemo<State>(() => {
    if (!data || !data.postConnection || !data.postConnection.edges) {
      return { posts: EMPTY_POSTS, lastCursor: "0" };
    }
    const posts = data.postConnection.edges.map((edge) => edge?.node).filter(isPost) || EMPTY_POSTS;
    const lastCursor = data.postConnection.edges[data.postConnection.edges.length - 1]?.cursor || `${posts[posts.length - 1].id}`;

    return { posts, lastCursor };
  }, [data]);

  const fetchMorePosts = useCallback(() => {
    fetchMore({
      query: GET_POSTS_QUERY,
      variables: {
        first: DEFAULT_FETCH_SIZE,
        after: lastCursor,
      },
    })
  }, [fetchMore, lastCursor]);

  return {
    posts,
    postsLoading: loading,
    fetchMorePosts,
  };
};
