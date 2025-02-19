import { useQuery } from "@apollo/client";
import { useCallback, useMemo } from "react";
import { FragmentType, graphql } from "../../__generated__/gql-masking";
import { PageInfo } from "../../__generated__/types";

export type QuestionnaireConnection = {
  loading: boolean;
  questionnaires: FragmentType<typeof QUESTIONNAIRE_FRAGMENT>[];
  pageInfo: PageInfo | undefined;
  loadMore: () => void;
};

export const QUESTIONNAIRE_FRAGMENT = graphql(/* GraphQL */ `
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
`);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GET_QUESTIONNAIRE_CONNECTION_QUERY = graphql(/* GraphQL */ `
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
`);

const PER = 10;

export const useQuestionnaireConnection = (): QuestionnaireConnection => {
  const { data, loading, fetchMore } = useQuery(GET_QUESTIONNAIRE_CONNECTION_QUERY, {
    variables: {
      first: PER,
      after: "0",
    },
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
    });
  }, [data, fetchMore]);

  return {
    loading,
    questionnaires,
    pageInfo: data?.questionnaireConnection.pageInfo,
    loadMore,
  };
};
