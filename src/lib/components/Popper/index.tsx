import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type PopperProps = {
  onClose: (args?: any) => void;
  shouldCloseClickOverlay?: boolean;
  shouldCloseOnKeyupEscape?: boolean;
  scrollLock?: boolean;
  children: React.ReactNode;
};

export const Popper: React.VFC<PopperProps> = ({
  onClose,
  shouldCloseClickOverlay,
  shouldCloseOnKeyupEscape,
  scrollLock,
  children
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape" && shouldCloseOnKeyupEscape) {
        onClose();
      }
    };
    document.addEventListener("keyup", listener);
    return () => document.removeEventListener("keyup", listener);
  }, [onClose, shouldCloseOnKeyupEscape]);

  useEffect(() => {
    if (scrollLock) {
      const origin = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = origin;
      }
    }
  }, [scrollLock]);

  const onClickOverlay = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      e.preventDefault();
      e.stopPropagation();
      if (shouldCloseClickOverlay) {
        onClose();
      }
    }
  }, [onClose, shouldCloseClickOverlay]);

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef} onClick={onClickOverlay}>
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
