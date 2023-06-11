import Link from "next/link";
import React from "react";
import { graphql } from "../../__generated__/gql-masking";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import colors from "../../lib/styles/colors";
import { QuestionnaireAction } from "./QuestionnaireAction";

const DUMMY_COVER_IMAGE_URL = "https://dummyimage.com/128x64/b3b3b3/ffffff";

export const QUESTIONNAIRE_FRAGMENT = graphql(/* GraphQL */ `
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
`);

type Props = {
  questionnaire: QuestionnaireFragment;
};

const STATES: string[] = ["Draft", "Published", "Hidden", "Expired"];

const INDICATOR_COLORS: string[] = [
  colors.blackAlpha200,
  colors.brand,
  colors.blackAlpha400,
  colors.blackAlpha500,
];

export const QuestionnaireListItem: React.FC<Props> = (props) => {
  const { questionnaire } = props;

  return (
    <div className="group flex relative items-center py-3 px-6 hover:bg-black-alpha50 shape-r4">
      <Link href={`/questionnaires/${questionnaire.id}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={DUMMY_COVER_IMAGE_URL}
          className="rounded"
          width={128}
          height={64}
          alt="cover-image"
        />
      </Link>
      <div className="ml-4">
        <Link href={`/questionnaires/${questionnaire.id}`}>
          <h3 className="subheading text-black-alpha800 tracking-wide hover:underline">
            {questionnaire.title}
          </h3>
        </Link>
        <div className="flex items-center">
          <span
            className="inline-block w-[14px] h-[14px] rounded-full"
            style={{ backgroundColor: INDICATOR_COLORS[questionnaire.state] }}
          />
          <p className="ml-2 text-body2 text-black-alpha500">{STATES[questionnaire.state]}</p>
          <span className="ml-2 text-body1 text-black-alpha500">/</span>
          <p className="ml-2 text-body2 text-black-alpha500">
            {questionnaire.questions.length} questions
          </p>
        </div>
      </div>
      <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-transform duration-200 translate-x-4 group-hover:translate-x-0">
        <QuestionnaireAction questionnaire={questionnaire} />
      </div>
    </div>
  );
};
