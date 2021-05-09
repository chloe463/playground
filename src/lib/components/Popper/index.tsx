import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type PopperProps = {
  onClose: (args?: any) => void;
  shouldCloseClickOverlay?: boolean;
  children: React.ReactNode;
};

export const Popper: React.VFC<PopperProps> = ({ onClose, shouldCloseClickOverlay, children }) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", listener);
    return () => document.removeEventListener("keyup", listener);
  }, [onClose]);

  const onClickOverlay = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (shouldCloseClickOverlay) {
      onClose();
    }
  }, [onClose, shouldCloseClickOverlay]);

  return ReactDOM.createPortal(
    <Overlay onClick={onClickOverlay}>
      {children}
    </Overlay>,
    document.querySelector("body") as Element
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
`;