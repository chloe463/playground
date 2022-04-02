import { useOverlayTriggerState } from "@react-stately/overlays";
import React, { useState } from "react";
import {
  QuestionnaireFragment,
} from "../../__generated__/graphqlOperationTypes";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { QuestionnaireList } from "./QuestionnaireList";
import { useQuestionnaire } from "./useQuestionnaire";

export const QuestionnaireListContainer: React.VFC = () => {

  const { loading, questionnaires, pageInfo, loadMore, deleteQuestionnaire } = useQuestionnaire();
  const modalState = useOverlayTriggerState({});
  const [questionnaireToDelete, setQuestionnaireToDelete] = useState<QuestionnaireFragment | null>(null);

  if (loading || !questionnaires) {
    return null;
  }

  const onClickLoadMore = () => {
    loadMore();
  };

  const onClickDelete = (id: number) => {
    const q = questionnaires.find((questionnaire) => questionnaire.id === id);
    if (!q) return;
    setQuestionnaireToDelete(q);
    modalState.open();
  };

  const onClickSubmitDeletion = async (id: number) => {
    modalState.close();
    try {
      await deleteQuestionnaire(id);
      // TODO: Show snackbar
    } catch(e) {
      console.error(e);
      // TODO: Show snackbar
    }
  };

  return (
    <div>
      <QuestionnaireList questionnaires={questionnaires} onClickDelete={onClickDelete} />
      {pageInfo?.hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className={`
              relative inline-block py-2 px-6 appearance-none outline-none border-none bg-transparent
              text-black-alpha500 text-body2 uppercase rounded-full
              cursor-pointer overflow-hidden
              transition-all duration-200 ease-in
              hover:text-black-alpha700 focus:text-black-alpha700 active:text-black
            `}
            onClick={() => onClickLoadMore()}
            disabled={loading}
          >
            Load more
          </button>
        </div>
      )}
      {questionnaireToDelete && modalState.isOpen && (
        <DeleteConfirmationModal questionnaire={questionnaireToDelete} onClose={modalState.close} submit={onClickSubmitDeletion} />
      )}
    </div>
  );
};

