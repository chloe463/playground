import { useOverlayTriggerState } from "@react-stately/overlays";
import React, { useState } from "react";
import { Snackbar } from "../../lib";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { LoadMore } from "./LoadMore";
import { QuestionnaireList } from "./QuestionnaireList";
import { useQuestionnaireList } from "./useQuestionnaireList";

export const QuestionnaireListContainer: React.VFC = () => {
  const {
    loading,
    questionnaires,
    pageInfo,
    loadMore,
    deleteQuestionnaire,
    cancelToDeleteQuestionnaire,
  } = useQuestionnaireList();
  const modalState = useOverlayTriggerState({});
  const [questionnaireToDelete, setQuestionnaireToDelete] = useState<QuestionnaireFragment | null>(
    null
  );
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
    } catch (e) {
      console.error(e);
      // TODO: Show error snackbar
    }
  };

  const onClickUndo = async () => {
    const id = questionnaireToDelete?.id;
    if (!id) return;
    setSnackbarIsVisible(false);
    await cancelToDeleteQuestionnaire(id);
  };

  return (
    <div>
      <QuestionnaireList questionnaires={questionnaires} onClickDelete={onClickDelete} />
      <div className="mt-6" />
      <LoadMore pageInfo={pageInfo} loading={loading} onClickLoadMore={onClickLoadMore} />
      <DeleteConfirmationModal
        isOpen={modalState.isOpen}
        questionnaire={questionnaireToDelete}
        onClose={modalState.close}
        submit={onClickSubmitDeletion}
      />
      <Snackbar
        visible={snackbarIsVisible}
        duration={5000}
        position="bottom-left"
        onHide={() => setSnackbarIsVisible(false)}
      >
        <div className="flex items-center" data-cy="complete-snackbar">
          Questionnaire is successfully deleted.
          <button
            className="ml-6 font-bold text-red-bright400 hover:text-red-bright700"
            onClick={onClickUndo}
            data-cy="undo-button"
          >
            Undo
          </button>
        </div>
      </Snackbar>
    </div>
  );
};
