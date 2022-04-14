import { useTooltip } from "@react-aria/tooltip";
import { mergeProps } from "@react-aria/utils";
import { TooltipTriggerState } from "@react-stately/tooltip";
import { AriaTooltipProps } from "@react-types/tooltip";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Offset, Placement } from "./types";
import { useTooltipPosition } from "./useTooltipPosition";

export type TooltipBodyProps = AriaTooltipProps & {
  state?: TooltipTriggerState | undefined;
  content: React.ReactElement;
  placement?: Placement;
  offset?: Offset;
  anchorSizeAndPosition: { x: number; y: number; width: number; height: number };
};

export const TooltipBody: React.VFC<TooltipBodyProps> = ({
  state,
  content,
  placement = "top-center",
  offset = { x: 0, y: 0 },
  anchorSizeAndPosition,
  ...rest
}) => {
  const { tooltipProps } = useTooltip(rest, state);
  const ref = useRef<HTMLSpanElement | null>(null);

  useTooltipPosition({
    ref,
    placement,
    offset,
    anchorSizeAndPosition,
  });

  if (!content) return null;

  return ReactDOM.createPortal(
    <motion.span
      style={{position: "fixed", top: 0, left: 0 }}
      initial={{
        opacity: 0,
        transformOrigin: "center center",
      }}
      animate={{
        opacity: 1,
        transformOrigin: "center center",
        transition: {
          duration: 0.1,
          ease: [0.3, 0, 0.3, 1],
        },
      }}
      exit={{
        opacity: 0,
        transformOrigin: "center center",
        transition: {
          duration: 0.05,
          ease: [0.3, 0, 0.3, 1],
        },
      }}
    >
      <Content {...mergeProps(rest, tooltipProps)} ref={ref}>
        {React.cloneElement(content)}
      </Content>
    </motion.span>,
    document.body
  );
};

const Content = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.blackAlpha500};
  color: white;
  min-height: 24px;
  padding: 0 8px;
  border-radius: 4px;
`;
