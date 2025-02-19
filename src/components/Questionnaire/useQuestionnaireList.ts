import { FragmentType, graphql } from "../../__generated__/gql-masking";
import { PageInfo } from "../../__generated__/types";
import { useCancelToQuestionnaire } from "./useCancelToDeleteQuestionnaire";
import { useDeleteQuestionnaire } from "./useDeleteQuestionnaire";
import { useQuestionnaireConnection } from "./useQuestionnaireConnection";

export type QuestionnaireList = {
  loading: boolean;
  // questionnaires: QuestionnaireFragment[];
  questionnaires: FragmentType<typeof QUESTIONNAIRE_FRAGMENT>[];
  pageInfo: PageInfo | undefined;
  loadMore: () => void;
  deleteQuestionnaire: (id: number) => Promise<void>;
  cancelToDeleteQuestionnaire: (id: number) => Promise<void>;
};

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

export const useQuestionnaireList = (): QuestionnaireList => {
  const { loading, questionnaires, pageInfo, loadMore } = useQuestionnaireConnection();
  const { deleteQuestionnaire } = useDeleteQuestionnaire();
  const { cancelToDeleteQuestionnaire } = useCancelToQuestionnaire();

  return {
    loading,
    questionnaires,
    pageInfo,
    loadMore,
    deleteQuestionnaire,
    cancelToDeleteQuestionnaire,
  };
};
