import React from "react";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { Questionnaire } from "../Questionnaire";

type Props = {
  questionnaires: QuestionnaireFragment[];
  onClickEdit: (id: number) => void;
};

export const QuestionnaireList: React.VFC<Props> = ({ questionnaires, onClickEdit }) => {
  return (
    <div>
      <ul>
        {questionnaires.map((questionnaire) => {
          return (<Questionnaire key={questionnaire.id} questionnaire={questionnaire} onClickEdit={onClickEdit} />);
        })}
      </ul>
    </div>
  );
};
