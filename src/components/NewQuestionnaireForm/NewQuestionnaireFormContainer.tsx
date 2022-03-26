import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import {
  CreateQuestionnaireDocument
} from "../../__generated__/graphqlOperationTypes";
import { CreateQuestionnaireInput } from "../../__generated__/types";
import { NewQuestionnaireForm } from "./index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CREATE_NEW_QUESTIONNAIRE_MUTATION = gql`
  mutation CreateQuestionnaire($questionnaire: CreateQuestionnaireInput!) {
    createQuestionnaire(questionnaire: $questionnaire) {
      questionnaire {
        id
        title
        description
        state
        startAt
        endAt
      }
    }
  }
`;

type Props = {

};

export const NewQuestionnaireFormContainer: React.VFC<Props> = () => {
  const router = useRouter();
  const [mutate] = useMutation(CreateQuestionnaireDocument);

  const onSubmit = async (data: CreateQuestionnaireInput) => {
    console.log(data);
    try {
      const { data: res } = await mutate({
        variables: {
          questionnaire: data,
        }
      });
      if (res?.createQuestionnaire?.questionnaire?.id) {
        router.push({
          pathname: `/questionnaires/${res.createQuestionnaire.questionnaire.id}/edit`,
        })
      }
    } catch (e) {
      console.error("An error occurred");
      // Display a toast
    }
  };

  return (
    <NewQuestionnaireForm onSubmit={onSubmit} />
  );
}
