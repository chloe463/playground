import { gql } from "@apollo/client";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { PageInfo } from "../../__generated__/types";
import { useCancelToQuestionnaire } from "./useCancelToDeleteQuestionnaire";
import { useDeleteQuestionnaire } from "./useDeleteQuestionnaire";
import { useQuestionnaireConnection } from "./useQuestionnaireConnection";

export type Questionnaire = {
  loading: boolean;
  questionnaires: QuestionnaireFragment[];
  pageInfo: PageInfo | undefined;
  loadMore: () => void;
  deleteQuestionnaire: (id: number) => Promise<void>;
  cancelToDeleteQuestionnaire: (id: number) => Promise<void>;
};

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

export const useQuestionnaire = (): Questionnaire => {
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
