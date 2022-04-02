import { OverlayContainer } from "@react-aria/overlays";
import React from "react";
import { BaseButton, PrimaryButton } from "../../lib/components/Button";
import { ModalDialog } from "../../lib/components/ModalDialog";
import { QuestionnaireFragment } from "../../__generated__/graphqlOperationTypes";

type Props = {
  questionnaire: QuestionnaireFragment;
  onClose: () => void;
  submit: (id: number) => void;
};

export const DeleteConfirmationModal: React.VFC<Props> = (props) => {
  return (
    <OverlayContainer>
      <ModalDialog
        title={"Are you sure to delete this questionnaire?"}
        isOpen
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
          <PrimaryButton onClick={() => props.submit(props.questionnaire.id)}>
            OK
          </PrimaryButton>
        </div>
      </ModalDialog>
    </OverlayContainer>
  );
}
