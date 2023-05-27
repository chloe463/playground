import React from "react";

import { FragmentType, getFragmentData, graphql } from "../../__generated__/gql-masking";
import { QuestionComponent } from "./Question";

export const QEUSTIONAIRE_FRAGMENT = graphql(/* GraphQL */ `
  fragment QuestionnaireDetailFragment on Questionnaire {
    id
    title
    description
    state
    startAt
    endAt
    questions {
      ...QuestionFragment
    }
  }
`);

type Props = {
  data: FragmentType<typeof QEUSTIONAIRE_FRAGMENT>;
};

export const QuestionnaireDetail: React.FC<Props> = (props) => {
  const questionnaire = getFragmentData(QEUSTIONAIRE_FRAGMENT, props.data);
  const { questions } = questionnaire;
  return (
    <div>
      <h2 className="font-heading text-heading2 font-bold text-black-alpha800">
        {questionnaire.title}
      </h2>
      <p className="mt-2">{questionnaire.description}</p>
      <div className="mt-8 space-y-4">
        {questions.map((question) => {
          if (!question) return null;
          const q = getFragmentData(QuestionComponent.Fragment, question);
          return <QuestionComponent key={q.id} data={question} />;
        })}
      </div>
    </div>
  );
};
