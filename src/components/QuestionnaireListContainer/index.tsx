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

const PER = 10;

export const QuestionnaireListContainer: React.VFC = () => {
  const { data, loading, error, fetchMore } = useQuestionnaireConnectionQuery({
    variables: {
      first: PER,
      after: "0",
    },
  });
  if (loading || !data) {
    return null;
  }

  const onClickLoadMore = async () => {
    await fetchMore({
      variables: {
        first: PER,
        after: data.questionnaireConnection.pageInfo.endCursor,
      },
    })
  };

  const questionnaires = data.questionnaireConnection.edges.map((edge) => edge.node);

  return (
    <Base>
      <QuestionnaireList questionnaires={questionnaires} />
      {data.questionnaireConnection.pageInfo.hasNextPage && (
        <LoadMoreWrapper>
          <LoadMoreButton type="button" onClick={() => onClickLoadMore()} disabled={loading}>Load more</LoadMoreButton>
        </LoadMoreWrapper>
      )}
    </Base>
  );
};

const Base = styled.div``;

const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const LoadMoreButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 24px;
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;

  color: rgba(0, 0, 0, 0.74);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 9999vmax;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.3, 0.3, 0.3, 1);
  overflow: hidden;

  &:hover, &:focus {
    color: rgba(0, 0, 0, 0.86);
  }
  &:active {
    color: rgba(0, 0, 0, 0.86);
  }
`;
