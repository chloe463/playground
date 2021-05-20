import React from "react";
import styled from "styled-components";
import { Questionnaire } from "../Questionnaire";
import { QuestionnaireFragment } from "../Questionnaire/__generated__/index.generated";

type Props = {
  questionnaires: QuestionnaireFragment[];
};

export const QuestionnaireList: React.VFC<Props> = ({ questionnaires }) => {
  return (
    <Base>
      <List>
        {questionnaires.map((questionnaire) => {
          return (<Questionnaire key={questionnaire.id} questionnaire={questionnaire} />);
        })}
      </List>
    </Base>
  );
};

const Base = styled.div``;

const List = styled.ul``;
