import { OverlayContainer } from "@react-aria/overlays";
import React from "react";
import { BaseButton, PrimaryButton } from "../../lib/components/Button";
import { ModalDialog } from "../../lib/components/ModalDialog";
import { Todo, TodoId } from "../../__generated__/types";

type Props = {
  isOpen: boolean;
  todo: Todo | undefined;
  onClose: () => void;
  onSubmit: (id: TodoId) => void;
};

export const DeleteConfirmationModal: React.VFC<Props> = (props) => {
  if (!props.todo) return null;
  return (
    <OverlayContainer>
      <ModalDialog
        title={"Are you sure to delete this todo?"}
        isOpen={props.isOpen}
        onClose={props.onClose}
        isDismissable
      >
        <div className="mx-10 mt-4">
          <p className="text-body2 text-black-alpha800">
            <b>{props.todo.task}</b>
            &nbsp; is going to be deleted.
          </p>
        </div>
        <div className="flex justify-end my-6 mx-8 space-x-4">
          <BaseButton onClick={() => props.onClose()}>Cancel</BaseButton>
          <PrimaryButton onClick={() => props.onSubmit(props.todo!.id)} data-cy="submit-deletion">
            OK
          </PrimaryButton>
        </div>
      </ModalDialog>
    </OverlayContainer>
  );
};
