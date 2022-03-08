import * as Types from "../../__generated__/types";

import { PostFragment } from "../../components/Post/__generated__/Post.generated";
import { gql } from "@apollo/client";
import { PostFragmentDoc } from "../../components/Post/__generated__/Post.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type GetPostConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars["Int"]>;
  after?: Types.Maybe<Types.Scalars["String"]>;
  query?: Types.Maybe<Types.Scalars["String"]>;
}>;

export type GetPostConnectionQuery = { __typename?: "Query" } & {
  postConnection: { __typename?: "QueryPostConnection_Connection" } & Pick<
    Types.QueryPostConnection_Connection,
    "totalCount"
  > & {
      pageInfo: { __typename?: "PageInfo" } & Pick<
        Types.PageInfo,
        "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
      >;
      edges: Array<
        { __typename?: "PostEdge" } & Pick<Types.PostEdge, "cursor"> & {
            node: { __typename?: "Post" } & PostFragment;
          }
      >;
    };
};

export const GetPostConnectionDocument = gql`
  query GetPostConnection($first: Int, $after: String, $query: String) {
    postConnection(first: $first, after: $after, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          ...Post
        }
        cursor
      }
    }
  }
  ${PostFragmentDoc}
`;

/**
 * __useGetPostConnectionQuery__
 *
 * To run a query within a React component, call `useGetPostConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetPostConnectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPostConnectionQuery,
    GetPostConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPostConnectionQuery,
    GetPostConnectionQueryVariables
  >(GetPostConnectionDocument, options);
}
export function useGetPostConnectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostConnectionQuery,
    GetPostConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPostConnectionQuery,
    GetPostConnectionQueryVariables
  >(GetPostConnectionDocument, options);
}
export type GetPostConnectionQueryHookResult = ReturnType<
  typeof useGetPostConnectionQuery
>;
export type GetPostConnectionLazyQueryHookResult = ReturnType<
  typeof useGetPostConnectionLazyQuery
>;
export type GetPostConnectionQueryResult = Apollo.QueryResult<
  GetPostConnectionQuery,
  GetPostConnectionQueryVariables
>;
