import { useOverlay, usePreventScroll } from "@react-aria/overlays";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type PopperProps = {
  onClose: (args?: any) => void;
  shouldCloseClickOverlay?: boolean;
  shouldCloseOnKeyupEscape?: boolean;
  scrollLock?: boolean;
  children: React.ReactNode;
  entryPointId?: string;
};

export const Popper: React.VFC<PopperProps> = ({
  onClose,
  shouldCloseClickOverlay,
  shouldCloseOnKeyupEscape,
  scrollLock,
  entryPointId,
  children,
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { overlayProps } = useOverlay(
    {
      isOpen: true,
      onClose,
      isDismissable: true,
      shouldCloseOnBlur: shouldCloseClickOverlay,
      isKeyboardDismissDisabled: shouldCloseOnKeyupEscape,
    },
    overlayRef
  );
  usePreventScroll({ isDisabled: !scrollLock });

  const entryPoint = entryPointId
    ? document.getElementById(entryPointId)
    : document.querySelector("body");

  if (!entryPoint) {
    throw new Error(`Entry point dom is not found!! entryPointId: ${entryPointId}`);
  }

  return ReactDOM.createPortal(
    <Overlay {...overlayProps} ref={overlayRef}>
      {children}
    </Overlay>,
    entryPoint as Element
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
`;
