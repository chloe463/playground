import React from "react";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { QuestionnaireListItem } from "./QuestionnaireListItem";

type Props = {
  questionnaires: readonly QuestionnaireFragment[];
};

export const QuestionnaireList: React.FC<Props> = ({ questionnaires }) => {
  return (
    <ul>
      {questionnaires.map((questionnaire) => {
        return (
          <li key={questionnaire.id} data-cy="questionnaire-list-item">
            <QuestionnaireListItem questionnaire={questionnaire} />
          </li>
        );
      })}
    </ul>
  );
};
