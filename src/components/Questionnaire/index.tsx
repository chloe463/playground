import { gql } from "@apollo/client";
import React from "react";
import { Link as _Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../lib/styles";
import { QuestionnaireFragment } from "./__generated__/index.generated";

const DUMMY_COVER_IMAGE_URL = "https://dummyimage.com/128x64/b3b3b3/ffffff";

export const QUESTIONNAIRE_FRAGMENT = gql`
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
`;

type Props = {
  questionnaire: QuestionnaireFragment;
  onClickEdit: (id: number) => void;
};

const STATES: string[] = [
  "Draft", "Published", "Hidden", "Expired"
];

const INDICATOR_COLORS: string[] = [
  colors.blackAlpha200,
  colors.brand,
  colors.blackAlpha400,
  colors.blackAlpha500,
];

export const Questionnaire: React.VFC<Props> = ({ questionnaire, onClickEdit }) => {

  const onClickPencil = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClickEdit(questionnaire.id);
  };

  const onClickAnswers = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("answers cliecked");
  };

  return (
    <ItemBase>
      <Link to={`/crud/${questionnaire.id}`}>
        <ItemContent>
          <CoverImage src={DUMMY_COVER_IMAGE_URL} />
          <KeyInfo>
            <Title>
              {questionnaire.title}
            </Title>
            <StateWrapper>
              <Indicator style={{ backgroundColor: INDICATOR_COLORS[questionnaire.state] }}/>
              <State>
                {STATES[questionnaire.state]}
              </State>
              <Delimiter>/</Delimiter>
              <QuestionCount>
                {questionnaire.questions.length} questions
              </QuestionCount>
              <Delimiter>/</Delimiter>
              <Period>
                {new Date(questionnaire.startAt).toISOString().substring(0, 19).replace("T", " ")} - {new Date(questionnaire.endAt).toISOString().substring(0, 19).replace("T", " ")}
              </Period>
            </StateWrapper>
          </KeyInfo>
          <FloatingButtons>
            <IconButton role="button" onClick={onClickPencil}>
              Edit
            </IconButton>
            <IconButton role="button" onClick={onClickAnswers}>
              Answers
            </IconButton>
          </FloatingButtons>
        </ItemContent>
      </Link>
    </ItemBase>
  );
};

const ItemBase = styled.li`
  &:hover .floating-buttons {
    opacity: 1;
    transform: none;
  }
`;

const Link = styled(_Link)`
  display: block;
  text-decoration: none;
  color: ${colors.blackAlpha800};

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
  &:visited {
    color: ${colors.blackAlpha800};
  }
`;

const ItemContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 24px;

  &:hover {
    background-color: ${colors.blackAlpha50};
  }
`;

const CoverImage = styled.img`
  border-radius: 4px;
`;

const KeyInfo = styled.div`
  margin-left: 16px;
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 36px;
  color: ${colors.blackAlpha800};
  letter-spacing: 0.2px;
`;

const StateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const State = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;

const Delimiter = styled.span`
  margin-left: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;

const QuestionCount = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;

const Period = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;

const FloatingButtons = styled.div.attrs({ className: "floating-buttons" })`
  position: absolute;
  right: 24px;

  transition: all 200ms ease-out;
  opacity: 0;
  transform: translateX(16px);
`;

const IconButton = styled.span`
  appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  font-size: 14px;
  line-height: 24px;
  padding: 12px 24px;
  border: 1px solid ${colors.blackAlpha200};
  border-radius: 9999vmax;

  & + & {
    margin-left: 8px;
  }
`;
