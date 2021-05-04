import { gql } from "@apollo/client";
import React from "react";
import { Link as _Link } from "react-router-dom";
import styled from "styled-components";
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
};

const STATES: string[] = [
  "Draft", "Published", "Hidden", "Expired"
];

const INDICATOR_COLORS: string[] = [
  "rgba(0, 0, 0, 0.12)",
  "#7b2ff7",
  "rgba(0, 0, 0, 0.40)",
  "rgba(0, 0, 0, 0.56)",
];

export const Questionnaire: React.VFC<Props> = ({ questionnaire }) => {

  const onClickEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("edit cliecked");
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
            <IconButton type="button" onClick={onClickEdit}>
              Edit
            </IconButton>
            <IconButton type="button" onClick={onClickAnswers}>
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
  color: rgba(0, 0, 0, 0.86);

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
  &:visited {
    color: rgba(0, 0, 0, 0.86);
  }
`;

const ItemContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
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
  color: rgba(0, 0, 0, 0.86);
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
  color: rgba(0, 0, 0, 0.56);
`;

const Delimiter = styled.span`
  margin-left: 8px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
`;

const QuestionCount = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
`;

const Period = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
`;

const FloatingButtons = styled.div.attrs({ className: "floating-buttons" })`
  position: absolute;
  right: 24px;

  transition: all 200ms ease-out;
  opacity: 0;
  transform: translateX(16px);
`;

const IconButton = styled.button`
  appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  font-size: 14px;
  line-height: 24px;
  padding: 12px 24px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 9999vmax;

  & + & {
    margin-left: 8px;
  }
`;
