import { gql } from "@apollo/client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { colors } from "../../lib/styles";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { Chart } from "./Chart";
import { Pencil } from "./Pencil";
import { Trash } from "./Trash";

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
  const [isHovered, setIsHovered] = useState(false);

  const onMouseOver = useCallback((_e: React.MouseEvent) => {
    setIsHovered(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  const onClickPencil = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClickEdit(questionnaire.id);
  }, [onClickEdit, questionnaire.id]);

  const onClickAnswers = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("answers clicked");
  }, []);

  const onClickTrash = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("trash clicked");
  }, []);

  return (
    <li onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <Link href={`/questionnaires/${questionnaire.id}`}>
        <a className="block no-underline text-black-alpha800 cursor-pointer hover:no-underline visited:text-black-alpha800">
          <div className="relative flex items-center py-3 px-6 hover:bg-black-alpha50">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={DUMMY_COVER_IMAGE_URL} className="rounded" width={128} height={64} alt="cover-image" />
            <div className="ml-4">
              <h3 className="text-subheading text-black-alpha800 tracking-wide">
                {questionnaire.title}
              </h3>
              <div className="flex items-center">
                <span className="inline-block w-[14px] h-[14px] rounded-full" style={{ backgroundColor: INDICATOR_COLORS[questionnaire.state] }}/>
                <p className="ml-2 text-body2 text-black-alpha500">
                  {STATES[questionnaire.state]}
                </p>
                <span className="ml-2 text-body1 text-black-alpha500">/</span>
                <p className="ml-2 text-body2 text-black-alpha500">
                  {questionnaire.questions.length} questions
                </p>
              </div>
            </div>
            <div
              className="absolute flex items-center right-6 transition-transform duration-200 space-x-4"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateX(0)" : "translateX(16px)"
              }}
            >
              <span onClick={onClickPencil}>
                <Pencil className="block text-black-alpha400 hover:text-black-alpha500 w-8 h-8" />
              </span>
              <span onClick={onClickAnswers}>
                <Chart  className="block text-black-alpha400 hover:text-black-alpha500 w-8 h-8" />
              </span>
              <span onClick={onClickTrash}>
                <Trash  className="block text-black-alpha400 hover:text-black-alpha500 w-8 h-8" />
              </span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
