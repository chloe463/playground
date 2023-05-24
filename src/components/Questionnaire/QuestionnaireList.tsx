import React from "react";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { QuestionnaireListItem } from "./QuestionnaireListItem";

type Props = {
  questionnaires: readonly QuestionnaireFragment[];
  onClickDelete: (id: number) => void;
};

export const QuestionnaireList: React.FC<Props> = ({ questionnaires, onClickDelete }) => {
  return (
    <div>
      <ul>
        {questionnaires.map((questionnaire) => {
          return (
            <li key={questionnaire.id} data-cy="questionnaire-list-item">
              <QuestionnaireListItem
                key={questionnaire.id}
                questionnaire={questionnaire}
                onClickDelete={onClickDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
