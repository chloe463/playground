import {
  OverlayContainer,
  OverlayProvider
} from "@react-aria/overlays";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { ModalDialog } from "./ModalDialog";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/ModalDialog",
};

export const _Default = () => {
  const state = useOverlayTriggerState({});
  return (
    <OverlayProvider>
      <button onClick={() => state.open()}>
        toggle
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <ModalDialog
            title={"Title"}
            isOpen
            onClose={state.close}
            isDismissable
          >
            <div className="mt-4 mx-10">
              Content goes here.
            </div>
            <div className="flex justify-end mt-8 mb-5 px-8">
              <button onClick={() => state.close()}>
                close
              </button>
            </div>
          </ModalDialog>
        </OverlayContainer>
      )}
    </OverlayProvider>
  );
};

