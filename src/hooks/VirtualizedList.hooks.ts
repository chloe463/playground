import { gql, useQuery } from "@apollo/client";

const GET_POSTS_QUERY = gql`
  query GetPostConnectionQuery {
    postConnection(first:10, after:"0") {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          userId
          title
          body
        }
        cursor
      }
    }
  }
`;

export const useVirtualizedList = () => {
  const { data, loading } = useQuery(GET_POSTS_QUERY);

  return {
    posts: data,
    postsLoading: loading,
  };
};
