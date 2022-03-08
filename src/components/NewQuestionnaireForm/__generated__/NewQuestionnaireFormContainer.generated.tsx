import * as Types from "../../../__generated__/types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type CreateQuestionnaireMutationVariables = Types.Exact<{
  questionnaire: Types.CreateQuestionnaireInput;
}>;

export type CreateQuestionnaireMutation = { __typename?: "Mutation" } & {
  createQuestionnaire?: Types.Maybe<
    { __typename?: "CreateQuestionnairePayload" } & {
      questionnaire?: Types.Maybe<
        { __typename?: "Questionnaire" } & Pick<
          Types.Questionnaire,
          "id" | "title" | "description" | "state" | "startAt" | "endAt"
        >
      >;
    }
  >;
};

export const CreateQuestionnaireDocument = gql`
  mutation CreateQuestionnaire($questionnaire: CreateQuestionnaireInput!) {
    createQuestionnaire(questionnaire: $questionnaire) {
      questionnaire {
        id
        title
        description
        state
        startAt
        endAt
      }
    }
  }
`;
export type CreateQuestionnaireMutationFn = Apollo.MutationFunction<
  CreateQuestionnaireMutation,
  CreateQuestionnaireMutationVariables
>;

/**
 * __useCreateQuestionnaireMutation__
 *
 * To run a mutation, you first call `useCreateQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionnaireMutation, { data, loading, error }] = useCreateQuestionnaireMutation({
 *   variables: {
 *      questionnaire: // value for 'questionnaire'
 *   },
 * });
 */
export function useCreateQuestionnaireMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateQuestionnaireMutation,
    CreateQuestionnaireMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateQuestionnaireMutation,
    CreateQuestionnaireMutationVariables
  >(CreateQuestionnaireDocument, options);
}
export type CreateQuestionnaireMutationHookResult = ReturnType<
  typeof useCreateQuestionnaireMutation
>;
export type CreateQuestionnaireMutationResult = Apollo.MutationResult<CreateQuestionnaireMutation>;
export type CreateQuestionnaireMutationOptions = Apollo.BaseMutationOptions<
  CreateQuestionnaireMutation,
  CreateQuestionnaireMutationVariables
>;
