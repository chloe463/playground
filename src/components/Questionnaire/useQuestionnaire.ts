import { gql, useMutation, useQuery } from "@apollo/client";
import { useCallback, useMemo } from "react";
import {
  DeleteQuestionnaireDocument,
  QuestionnaireConnectionDocument,
  QuestionnaireConnectionQuery,
  QuestionnaireFragment,
} from "../../__generated__/graphqlOperationTypes";
import { PageInfo } from "../../__generated__/types";

export type UseQuestionnaireOptions = {

};

export type Questionnaire = {
  loading: boolean;
  questionnaires: QuestionnaireFragment[];
  pageInfo: PageInfo | undefined;
  loadMore: () => void;
  deleteQuestionnaire: (id: number) => Promise<void>;
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GET_QUESTIONNAIRE_CONNECTION_QUERY = gql`
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
  ${QUESTIONNAIRE_FRAGMENT}
`;

const _DELETE_QUESTIONNAIRE_MUTATION = gql`
  mutation DeleteQuestionnaire($id: Int!) {
    deleteQuestionnaire(id: $id) {
      id
      result
    }
  }
`;

const PER = 10;

export const useQuestionnaire = (): Questionnaire => {
  const { data, loading, fetchMore } = useQuery(QuestionnaireConnectionDocument, {
    variables: {
      first: PER,
      after: "0",
    },
  });
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
      const filtered = d?.questionnaireConnection.edges.filter((edge) => edge.node.id !== result.data?.deleteQuestionnaire?.id);
      cache.modify({
        fields: {
          questionnaireConnection(existing: QuestionnaireConnectionQuery["questionnaireConnection"]) {
            return {
              ...existing,
              edges: filtered,
            };
          }
        }
      });
    }
  });

  const questionnaires = useMemo(() => {
    return data?.questionnaireConnection.edges.map((edge) => edge.node) || [];
  }, [data]);

  const loadMore = useCallback(() => {
    if (!data) return;
    fetchMore({
      variables: {
        first: PER,
        after: data.questionnaireConnection.pageInfo.endCursor,
      },
    })
  }, [data, fetchMore]);

  const deleteQuestionnaire = useCallback(async (id: number) => {
    const { data, errors } = await deleteQuestionnaireMutation({
      variables: { id }
    });

    if (errors) {
      throw new Error("Failed to delete questionnaire for unknown reason");
    }
    if (!data?.deleteQuestionnaire?.result) {
      throw new Error("Failed to delete questionnaire");
    }
  }, [deleteQuestionnaireMutation]);

  return {
    loading,
    questionnaires,
    pageInfo: data?.questionnaireConnection.pageInfo,
    loadMore,
    deleteQuestionnaire,
  };
};