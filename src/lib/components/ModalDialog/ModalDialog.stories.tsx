import { OverlayContainer, OverlayProvider } from "@react-aria/overlays";
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
      <button onClick={() => state.open()}>toggle</button>
      <OverlayContainer>
        <ModalDialog title={"Title"} isOpen={state.isOpen} onClose={state.close} isDismissable>
          <div className="mx-10 mt-4">Content goes here.</div>
          <div className="flex justify-end px-8 mt-8 mb-5">
            <button onClick={() => state.close()}>close</button>
          </div>
        </ModalDialog>
      </OverlayContainer>
    </OverlayProvider>
  );
};
