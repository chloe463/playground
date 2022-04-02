import { useOverlayTriggerState } from "@react-stately/overlays";
import React, { useState } from "react";
import { Snackbar } from "../../lib";
import {
  QuestionnaireFragment
} from "../../__generated__/graphqlOperationTypes";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { QuestionnaireList } from "./QuestionnaireList";
import { useQuestionnaire } from "./useQuestionnaire";

export const QuestionnaireListContainer: React.VFC = () => {

  const { loading, questionnaires, pageInfo, loadMore, deleteQuestionnaire, cancelToDeleteQuestionnaire } = useQuestionnaire();
  const modalState = useOverlayTriggerState({});
  const [questionnaireToDelete, setQuestionnaireToDelete] = useState<QuestionnaireFragment | null>(null);
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);

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
      // TODO: Show success snackbar
      setSnackbarIsVisible(true);
    } catch(e) {
      console.error(e);
      // TODO: Show error snackbar
    }
  };

  const onClickUndo = async () => {
    const id = questionnaireToDelete?.id;
    if (!id) return;
    setSnackbarIsVisible(false);
    await cancelToDeleteQuestionnaire(id);
  }

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
      <Snackbar
        visible={snackbarIsVisible}
        duration={5000}
        position="bottom-left"
        onHide={() => setSnackbarIsVisible(false)}
      >
        <div className="flex items-center">
          Questionnaire is successfully deleted.
          <button className="ml-6 font-bold text-red-bright400 hover:text-red-bright700" onClick={onClickUndo}>
            Undo
          </button>
        </div>
      </Snackbar>
    </div>
  );
};
