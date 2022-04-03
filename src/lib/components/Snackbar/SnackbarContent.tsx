import { motion, MotionStyle } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { getElevation } from "../elevation";

export type SnackbarContentProps = {
  position: MotionStyle;
  children: React.ReactNode;
};

export const SnackbarContent: React.VFC<SnackbarContentProps> = (props) => {
  const { position } = props;
  return createPortal(
    <motion.div
      style={{
        position: "fixed",
        ...position,
      }}
      initial={{
        opacity: 0,
        transform: `scale(.9) ${position.transform}`,
      }}
      animate={{
        opacity: 1,
        transform: `scale(1) ${position.transform}`,
        transition: {
          duration: 0.2,
          ease: [0.3, 0, 0.3, 1],
        },
      }}
      exit={{
        opacity: 0,
        transform: `scale(.9) ${position.transform}`,
        transition: {
          duration: 0.2,
          ease: [0.3, 0, 0.3, 1],
        },
      }}
    >
      <Content>{props.children}</Content>
    </motion.div>,
    document.body
  );
};

const Content = styled.div`
  background-color: #323232;
  padding: 12px 24px;
  color: white;
  border-radius: 2px;
  box-shadow: ${getElevation(6)};
`;
