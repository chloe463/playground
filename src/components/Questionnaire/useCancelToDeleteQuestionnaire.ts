import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  CancelToDeleteQuestionnaireDocument,
  QuestionnaireConnectionDocument,
  QuestionnaireConnectionQuery
} from "../../__generated__/graphqlOperationTypes";

export type CancelToDeleteQuestionnaire = {
  cancelToDeleteQuestionnaire: (id: number) => Promise<void>;
};

export const QUESTIONNAIRE_FRAGMENT = gql`
  fragment Questionnaire on Questionnaire {
    id
    title
    description
    state
    startAt
    endAt
    questions {
      id
    }
  }
`;

const _CANCEL_TO_DELETE_QUESTIONNAIRE_MUTATION = gql`
  mutation CancelToDeleteQuestionnaire($id: Int!) {
    cancelToDeleteQuestionnaire(id: $id) {
      questionnaire {
        ...Questionnaire
      }
    }
  }
  ${QUESTIONNAIRE_FRAGMENT}
`;

export const useCancelToQuestionnaire = (): CancelToDeleteQuestionnaire => {
  const [cancelToDeleteQuestionnaireMutation] = useMutation(CancelToDeleteQuestionnaireDocument, {
    update: (cache, result) => {
      const questionnaire = result?.data?.cancelToDeleteQuestionnaire?.questionnaire;
      if (!questionnaire) return;
      const existing = cache.readQuery({ query: QuestionnaireConnectionDocument });
      const newEdges: QuestionnaireConnectionQuery["questionnaireConnection"]["edges"] = [
        ...existing?.questionnaireConnection.edges || [],
        {
          __typename: "QuestionnaireEdge" as const,
          cursor: questionnaire.id.toString(),
          node: questionnaire,
        },
      ].sort((a, b) => {
        if (a.node.id > b.node.id) return 1;
        if (a.node.id < b.node.id) return -1;
        return 0;
      });
      cache.modify({
        fields: {
          questionnaireConnection(existing: QuestionnaireConnectionQuery["questionnaireConnection"]) {
            return {
              ...existing,
              edges: newEdges,
            };
          }
        },
      })
    },
  });

  const cancelToDeleteQuestionnaire = useCallback(async (id: number) => {
    await cancelToDeleteQuestionnaireMutation({
      variables: { id }
    });
  }, [cancelToDeleteQuestionnaireMutation]);

  return {
    cancelToDeleteQuestionnaire,
  };
};
