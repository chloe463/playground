import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GetPostConnectionQuery, GetPostConnectionQueryVariables } from "./__generated__/GetPostConnectionQuery";
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

export const useVirtualizedList = () => {
  const { data, loading } = useQuery<GetPostConnectionQuery, GetPostConnectionQueryVariables>(GET_POSTS_QUERY, {
    variables: {
      first: DEFAULT_FETCH_SIZE,
      after: FIRST_CURSOR,
    },
  });

  const posts = useMemo<Post[]>(() => {
    if (!data || !data.postConnection || !data.postConnection.edges) {
      return EMPTY_POSTS;
    }
    return data.postConnection.edges.map((edge) => edge?.node).filter(isPost) || EMPTY_POSTS;
  }, [data]);

  return {
    posts,
    postsLoading: loading,
  };
};
