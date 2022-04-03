import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  DeleteQuestionnaireDocument,
  QuestionnaireConnectionDocument,
  QuestionnaireConnectionQuery,
} from "../../__generated__/graphqlOperationTypes";

export type DeleteQuestionnaire = {
  deleteQuestionnaire: (id: number) => Promise<void>;
};

const _DELETE_QUESTIONNAIRE_MUTATION = gql`
  mutation DeleteQuestionnaire($id: Int!) {
    deleteQuestionnaire(id: $id) {
      id
      result
    }
  }
`;

export const useDeleteQuestionnaire = (): DeleteQuestionnaire => {
  const [deleteQuestionnaireMutation] = useMutation(DeleteQuestionnaireDocument, {
    optimisticResponse: (variables) => {
      return {
        deleteQuestionnaire: {
          __typename: "DeleteQuestionnairePayload" as const,
          id: variables.id,
          result: true,
        },
      };
    },
    update: (cache, result) => {
      if (!result.data?.deleteQuestionnaire?.result) {
        return;
      }
      const d = cache.readQuery({ query: QuestionnaireConnectionDocument });
      const filtered = d?.questionnaireConnection.edges.filter(
        (edge) => edge.node.id !== result.data?.deleteQuestionnaire?.id
      );
      cache.modify({
        fields: {
          questionnaireConnection(
            existing: QuestionnaireConnectionQuery["questionnaireConnection"]
          ) {
            return {
              ...existing,
              edges: filtered,
            };
          },
        },
      });
    },
  });

  const deleteQuestionnaire = useCallback(
    async (id: number) => {
      const { data, errors } = await deleteQuestionnaireMutation({
        variables: { id },
      });

      if (errors) {
        throw new Error("Failed to delete questionnaire for unknown reason");
      }
      if (!data?.deleteQuestionnaire?.result) {
        throw new Error("Failed to delete questionnaire");
      }
    },
    [deleteQuestionnaireMutation]
  );

  return {
    deleteQuestionnaire,
  };
};
