import * as Types from "../../../__generated__/types";

import { QuestionnaireFragment } from "./Questionnaire.generated";
import { gql } from "@apollo/client";
import { QuestionnaireFragmentDoc } from "./Questionnaire.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type QuestionnaireConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars["Int"]>;
  after?: Types.Maybe<Types.Scalars["String"]>;
}>;

export type QuestionnaireConnectionQuery = { __typename?: "Query" } & {
  questionnaireConnection: {
    __typename?: "QueryQuestionnaireConnection_Connection";
  } & Pick<Types.QueryQuestionnaireConnection_Connection, "totalCount"> & {
      pageInfo: { __typename?: "PageInfo" } & Pick<
        Types.PageInfo,
        "hasNextPage" | "hasPreviousPage" | "startCursor" | "endCursor"
      >;
      edges: Array<
        { __typename?: "QuestionnaireEdge" } & Pick<
          Types.QuestionnaireEdge,
          "cursor"
        > & { node: { __typename?: "Questionnaire" } & QuestionnaireFragment }
      >;
    };
};

export const QuestionnaireConnectionDocument = gql`
  query QuestionnaireConnection($first: Int, $after: String) {
    questionnaireConnection(first: $first, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          ...Questionnaire
        }
      }
    }
  }
  ${QuestionnaireFragmentDoc}
`;

/**
 * __useQuestionnaireConnectionQuery__
 *
 * To run a query within a React component, call `useQuestionnaireConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionnaireConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionnaireConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useQuestionnaireConnectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QuestionnaireConnectionQuery,
    QuestionnaireConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    QuestionnaireConnectionQuery,
    QuestionnaireConnectionQueryVariables
  >(QuestionnaireConnectionDocument, options);
}
export function useQuestionnaireConnectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QuestionnaireConnectionQuery,
    QuestionnaireConnectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    QuestionnaireConnectionQuery,
    QuestionnaireConnectionQueryVariables
  >(QuestionnaireConnectionDocument, options);
}
export type QuestionnaireConnectionQueryHookResult = ReturnType<
  typeof useQuestionnaireConnectionQuery
>;
export type QuestionnaireConnectionLazyQueryHookResult = ReturnType<
  typeof useQuestionnaireConnectionLazyQuery
>;
export type QuestionnaireConnectionQueryResult = Apollo.QueryResult<
  QuestionnaireConnectionQuery,
  QuestionnaireConnectionQueryVariables
>;
