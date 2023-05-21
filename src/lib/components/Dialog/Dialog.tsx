import type { ReactElement } from "react";
import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { getElevation } from "../elevation";

interface Props {
  children: ReactElement;
}

export const Dialog = forwardRef<HTMLDialogElement, Props>((props, ref) => {
  return (
    <Base ref={ref}>
      {props.children}
    </Base>
  );
});
Dialog.displayName = "Dialog";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(10%);
  }
`;

const Base = styled.dialog`
  padding: 0;
  border-radius: 4px;
  box-shadow: ${getElevation(4)};
  &::backdrop {
    background-color: rgba(204, 204, 204, 0.64);
  }

  &.closing {
    animation-name: ${fadeOut};
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.3, 0, 0.3, 1);
  }

  &[open] {
    animation-name: ${fadeIn};
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.3, 0, 0.3, 1);
  }
`;
