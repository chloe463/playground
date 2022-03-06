import React from "react";
import { Questionnaire } from "../Questionnaire";
import { QuestionnaireFragment } from "../Questionnaire/__generated__/index.generated";

type Props = {
  questionnaires: QuestionnaireFragment[];
  onClickEdit: (id: number) => void;
};

export const QuestionnaireList: React.VFC<Props> = ({ questionnaires, onClickEdit }) => {
  return (
    <div>
      <div>
        {questionnaires.map((questionnaire) => {
          return (<Questionnaire key={questionnaire.id} questionnaire={questionnaire} onClickEdit={onClickEdit} />);
        })}
      </div>
    </div>
  );
};