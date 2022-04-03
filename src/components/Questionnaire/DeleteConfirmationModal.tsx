import { OverlayContainer } from "@react-aria/overlays";
import React from "react";
import { BaseButton, PrimaryButton } from "../../lib/components/Button";
import { ModalDialog } from "../../lib/components/ModalDialog";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";

type Props = {
  isOpen: boolean;
  questionnaire: QuestionnaireFragment | null;
  onClose: () => void;
  submit: (id: number) => void;
};

export const DeleteConfirmationModal: React.VFC<Props> = (props) => {
  if (!props.questionnaire) return null;
  return (
    <OverlayContainer>
      <ModalDialog
        title={"Are you sure to delete this questionnaire?"}
        isOpen={props.isOpen}
        onClose={props.onClose}
        isDismissable
      >
        <div className="mt-4 mx-10">
          <p className="text-body2 text-black-alpha800">
            <b>
              {props.questionnaire.title}
            </b>
            &nbsp;
            is going to be deleted.
          </p>
        </div>
        <div className="my-6 mx-8 flex justify-end space-x-4">
          <BaseButton onClick={() => props.onClose()}>
            Cancel
          </BaseButton>
          <PrimaryButton onClick={() => props.submit(props.questionnaire.id)} data-cy="submit-deletion">
            OK
          </PrimaryButton>
        </div>
      </ModalDialog>
    </OverlayContainer>
  );
}
