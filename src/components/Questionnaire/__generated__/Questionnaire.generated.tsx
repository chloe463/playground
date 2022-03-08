import * as Types from "../../../__generated__/types";

import { gql } from "@apollo/client";
export type QuestionnaireFragment = { __typename?: "Questionnaire" } & Pick<
  Types.Questionnaire,
  "id" | "title" | "description" | "state" | "startAt" | "endAt"
> & {
    questions: Array<
      Types.Maybe<{ __typename?: "Question" } & Pick<Types.Question, "id">>
    >;
  };

export const QuestionnaireFragmentDoc = gql`
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
