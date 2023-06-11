"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { graphql } from "../../__generated__/gql-masking";
import {
  CreateQuestionnaireDocument,
  CreateQuestionnaireMutationVariables,
} from "../../__generated__/graphqlOperationTypes";
import { initializeApollo } from "../../hooks/useAplloClient";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CREATE_NEW_QUESTIONNAIRE_MUTATION = graphql(/* GraphQL */ `
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
`);

export async function submitAction(formData: FormData) {
  const client = initializeApollo();
  const variables: CreateQuestionnaireMutationVariables = {
    questionnaire: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      startAt: formData.get("startAt"),
      endAt: formData.get("endAt"),
    },
  };
  const response = await client.mutate({
    mutation: CreateQuestionnaireDocument,
    variables,
  });
  const id = response.data?.createQuestionnaire?.questionnaire?.id;
  if (id) {
    revalidatePath("/questionnaires");
    redirect(`/questionnaires/${id}/edit`);
  }
  throw new Error("Failed to create a new questionnaire!");
}
