import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  CancelToDeleteQuestionnaireDocument,
  QuestionnaireConnectionDocument
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

      const existing = cache.readQuery({
        query: QuestionnaireConnectionDocument,
      });
      if (!existing) return;

      const newEdges: typeof existing.questionnaireConnection.edges = [
        ...existing.questionnaireConnection.edges,
        {
          __typename: "QuestionnaireEdge" as const,
          cursor: questionnaire.id.toString(),
          node: questionnaire,
        }
      ].sort((a, b) => {
        if (a.node.id > b.node.id) return 1;
        if (a.node.id < b.node.id) return -1;
        return 0;
      });

      cache.writeQuery({
        query: QuestionnaireConnectionDocument,
        data: {
          questionnaireConnection: {
            ...existing.questionnaireConnection,
            pageInfo: {
              ...existing.questionnaireConnection.pageInfo,
              startCursor: newEdges[0].cursor,
              endCursor: newEdges[newEdges.length - 1].cursor,
            },
            totalCount: existing.questionnaireConnection.totalCount,
            __typename: "QueryQuestionnaireConnection_Connection" as const,
            edges: newEdges,
          },
        },
      });

      // cache.modify({
      //   fields: {
      //     questionnaireConnection(r: Reference, { readField }) {
      //       const edges = readField("edges", r) as QuestionnaireConnectionQuery["questionnaireConnection"]["edges"];
      //       const newEdges = [
      //         ...edges,
      //         {
      //           __typename: "QuestionnaireEdge" as const,
      //           cursor: questionnaire.id.toString(),
      //           node: questionnaire,
      //         },
      //       ].sort((a, b) => {
      //         if (a.node.id > b.node.id) return 1;
      //         if (a.node.id < b.node.id) return -1;
      //         return 0;
      //       });
      //       console.log({edges, newEdges});
      //       return {
      //         ...r,
      //         edges: newEdges,
      //       };
      //     }
      //   }
      // });
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
