import React from "react";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { Questionnaire } from "../Questionnaire";

type Props = {
  questionnaires: QuestionnaireFragment[];
  onClickDelete: (id: number) => void;
};

export const QuestionnaireList: React.VFC<Props> = ({ questionnaires, onClickDelete }) => {
  return (
    <div>
      <ul>
        {questionnaires.map((questionnaire) => {
          return (<Questionnaire key={questionnaire.id} questionnaire={questionnaire} onClickDelete={onClickDelete} />);
        })}
      </ul>
    </div>
  );
};
