import * as Types from "../../../../__generated__/types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type GetQuestionnaireQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetQuestionnaireQuery = { __typename?: "Query" } & {
  questionnaire?: Types.Maybe<
    { __typename?: "Questionnaire" } & Pick<
      Types.Questionnaire,
      "id" | "title" | "description" | "state" | "startAt" | "endAt"
    > & {
        questions: Array<
          Types.Maybe<
            { __typename?: "Question" } & Pick<
              Types.Question,
              "id" | "type" | "text"
            > & {
                options: Array<
                  Types.Maybe<
                    { __typename?: "Option" } & Pick<
                      Types.Option,
                      "id" | "text"
                    >
                  >
                >;
              }
          >
        >;
      }
  >;
};

export const GetQuestionnaireDocument = gql`
  query GetQuestionnaire($id: Int!) {
    questionnaire(id: $id) {
      id
      title
      description
      state
      startAt
      endAt
      questions {
        id
        type
        text
        options {
          id
          text
        }
      }
    }
  }
`;

/**
 * __useGetQuestionnaireQuery__
 *
 * To run a query within a React component, call `useGetQuestionnaireQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionnaireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionnaireQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionnaireQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetQuestionnaireQuery,
    GetQuestionnaireQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>(
    GetQuestionnaireDocument,
    options
  );
}
export function useGetQuestionnaireLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetQuestionnaireQuery,
    GetQuestionnaireQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetQuestionnaireQuery,
    GetQuestionnaireQueryVariables
  >(GetQuestionnaireDocument, options);
}
export type GetQuestionnaireQueryHookResult = ReturnType<
  typeof useGetQuestionnaireQuery
>;
export type GetQuestionnaireLazyQueryHookResult = ReturnType<
  typeof useGetQuestionnaireLazyQuery
>;
export type GetQuestionnaireQueryResult = Apollo.QueryResult<
  GetQuestionnaireQuery,
  GetQuestionnaireQueryVariables
>;
