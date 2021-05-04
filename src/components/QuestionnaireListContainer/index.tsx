import { gql } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { QUESTIONNAIRE_FRAGMENT } from "../Questionnaire";
import { QuestionnaireList } from "../QuestionnaireList";
import { useQuestionnaireConnectionQuery } from "./__generated__/index.generated";

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

export const QuestionnaireListContainer: React.VFC = () => {
  const { data, loading, error } = useQuestionnaireConnectionQuery({
    variables: {
      first: 10,
      after: "0",
    },
  });
  if (loading || !data) {
    return null;
  }
  const questionnaires = data.questionnaireConnection.edges.map((edge) => edge.node);
  return (
    <Base>
      <QuestionnaireList questionnaires={questionnaires} />
    </Base>
  );
};

const Base = styled.div``;
