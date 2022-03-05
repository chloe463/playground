import { gql } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();
  const { data, loading, error, fetchMore } = useQuestionnaireConnectionQuery({
    variables: {
      first: PER,
      after: "0",
    },
  });
  if (loading || !data) {
    return null;
  }

  const moveToEditPage = (id: number) => {
    history.push(`/crud/${id}/edit`);
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
    <div>
      <QuestionnaireList questionnaires={questionnaires} onClickEdit={moveToEditPage} />
      {data.questionnaireConnection.pageInfo.hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className={`
              relative inline-block py-2 px-6 appearance-none outline-none border-none bg-transparent
              text-black-alpha500 text-base uppercase rounded-full
              cursor-pointer overflow-hidden
              transition-all duration-200 ease-in
              hover:text-black-alpha700 focus:text-black-alpha700 active:text-black
            `}
            onClick={() => onClickLoadMore()}
            disabled={loading}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
