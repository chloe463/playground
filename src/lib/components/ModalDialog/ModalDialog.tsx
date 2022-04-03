// ref: https://react-spectrum.adobe.com/react-aria/useDialog.html
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import {
  OverlayProps, useModal, useOverlay,
  usePreventScroll
} from "@react-aria/overlays";
import { AriaDialogProps } from "@react-types/dialog";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles";
import { getElevation } from "../elevation";


type Props = {
  title: string;
  children: React.ReactNode;
}
& OverlayProps
& AriaDialogProps;

export const ModalDialog: React.VFC<Props> = (props) => {
  const { isOpen, title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = useRef<HTMLDivElement | null>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll({ isDisabled: !isOpen });
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, ref);

  if (!isOpen) return null;

  return (
    <Overlay {...underlayProps}>
      <FocusScope contain autoFocus restoreFocus>
        <Content
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          <h3
            {...titleProps}
            style={{ margin: "40px 40px 0 40px" }}
            className="text-heading2 text-black-alpha800 font-bold"
          >
            {title}
          </h3>
          {children}
        </Content>
      </FocusScope>
    </Overlay>
  );
}

const bgFadeIn = keyframes`
  from {
    opacity: 0.8;
    background-color: ${colors.white};
  }
  to {
    opacity: 1;
    background-color: #CCCCCCA3;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: #CCCCCCA3;

  animation: ${bgFadeIn};
  animation-duration: 250ms;
  animation-timing-function: linear;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.9);
    /* transform: translate3D(0, 24px, 0); */
    /* transform: scale(.9) translate3D(0, 20px, 0); */
  }
  to {
    opacity: 1;
    transform: scale(1);
    /* transform: translate3D(0, 0, 0); */
    /* transform: scale(1) translate3D(0, 0, 0); */
  }
`;

const Content = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: ${getElevation(24)};

  animation: ${fadeIn};
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.3, 0, 0.3, 1);
`;
