"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Snackbar, Tooltip, useDialog } from "../../lib";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";
import { Chart } from "./Chart";
import { Pencil } from "./Pencil";
import { Trash } from "./Trash";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { useDeleteQuestionnaire } from "./useDeleteQuestionnaire";
import { useCancelToQuestionnaire } from "./useCancelToDeleteQuestionnaire";

interface Props {
  questionnaire: QuestionnaireFragment;
}

export const QuestionnaireAction: React.FC<Props> = ({ questionnaire }) => {
  const { id } = questionnaire;
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);
  const { ref, open: openModal, close: closeModal } = useDialog({});
  const { deleteQuestionnaire } = useDeleteQuestionnaire();
  const { cancelToDeleteQuestionnaire } = useCancelToQuestionnaire();

  const onClickDelete = () => {
    openModal();
  }

  const onClickSubmitDeletion = async (id: number) => {
    closeModal();
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
    const { id } = questionnaire;
    setSnackbarIsVisible(false);
    await cancelToDeleteQuestionnaire(id);
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <Tooltip delay={50} offset={{ y: 8 }} content={<span>Edit</span>}>
          <div>
            <Link
              href={{ pathname: `/questionnaires/${id}/edit` }}
              aria-label={`Edit a questionnaire ${id}`}
            >
              <Pencil className="block w-8 h-8 text-black-alpha400 hover:text-black-alpha500 transition-colors duration-200 ease-in" />
            </Link>
          </div>
        </Tooltip>
        <Tooltip
          delay={50}
          offset={{ y: 8 }}
          content={<span className="whitespace-nowrap">See result</span>}
        >
          <button
            // onClick={onClickAnswers}
            aria-label={`See result of questionnaire ${id}`}
          >
            <Chart className="block w-8 h-8 text-black-alpha400 hover:text-black-alpha500 transition-colors duration-200 ease-in" />
          </button>
        </Tooltip>
        <Tooltip delay={50} offset={{ y: 8 }} content={<span>Delete</span>}>
          <button
            onClick={() => onClickDelete()}
            aria-label={`Delete a questionnaire ${id}`}
            data-cy={`delete-button-${id}`}
          >
            <Trash className="block w-8 h-8 text-black-alpha400 hover:text-black-alpha500 transition-colors duration-200 ease-in" />
          </button>
        </Tooltip>
      </div>
      <DeleteConfirmationModal
        dialogRef={ref}
        questionnaire={questionnaire}
        onClose={closeModal}
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
    </>
  );
};
