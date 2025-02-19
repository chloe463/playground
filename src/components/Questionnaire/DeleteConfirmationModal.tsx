import React from "react";
import { BaseButton, PrimaryButton } from "../../lib/components/Button";
import { Dialog } from "../../lib/components/Dialog";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";

type Props = {
  questionnaire: QuestionnaireFragment | null;
  dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
  onClose: () => void;
  submit: (id: number) => void;
};

export const DeleteConfirmationModal: React.FC<Props> = (props) => {
  // if (!props.questionnaire) return null;
  return (
    <Dialog ref={props.dialogRef}>
      <div className="w-[720px]">
        <h3
          style={{ margin: "40px 40px 0 40px" }}
          className="text-heading2 font-bold text-black-alpha800"
        >
          Are you sure to delete this questionnaire?
        </h3>
        <div className="mx-10 mt-4">
          <p className="text-body2 text-black-alpha800">
            <b>{props.questionnaire?.title}</b>
            &nbsp; is going to be deleted.
          </p>
        </div>
        <div className="flex justify-end my-6 mx-8 space-x-4">
          <BaseButton onClick={() => props.onClose()}>Cancel</BaseButton>
          <PrimaryButton
            onClick={() => props.submit(props.questionnaire!.id)}
            data-cy="submit-deletion"
          >
            OK
          </PrimaryButton>
        </div>
      </div>
    </Dialog>
  );
};
