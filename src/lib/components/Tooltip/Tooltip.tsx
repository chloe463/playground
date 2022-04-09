import { useTooltip, useTooltipTrigger } from "@react-aria/tooltip";
import { mergeProps } from "@react-aria/utils";
import { TooltipTriggerState, useTooltipTriggerState } from "@react-stately/tooltip";
import { AriaTooltipProps, TooltipTriggerProps } from "@react-types/tooltip";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

type Placement = `${"top" | "right" | "bottom" | "left"}-${"start" | "center" | "end"}`;

type Props = TooltipTriggerProps & {
  content: React.ReactElement;
  placement?: Placement;
  children: React.ReactElement;
};

export const Tooltip: React.VFC<Props> = (props) => {
  const { content, placement, children, ...rest } = props;
  const state = useTooltipTriggerState(rest);
  const ref = useRef<HTMLElement | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const { width, height } = ref.current?.getBoundingClientRect() || { width: 0, height: 0 };
    setWidth(width);
    setHeight(height);
  }, []);

  // Get props for the trigger and its tooltip
  const { triggerProps, tooltipProps } = useTooltipTrigger(rest, state, ref);

  if (!children) return null;

  return (
    <span style={{ position: "relative" }}>
      {React.cloneElement(children, { ...triggerProps, ref })}
      {state.isOpen && (
        <TooltipBody
          state={state}
          content={content}
          anchorSize={{ width, height }}
          placement={placement}
          {...tooltipProps}
        />
      )}
    </span>
  );
};

type TooltipBodyProps = AriaTooltipProps & {
  state?: TooltipTriggerState | undefined;
  content: React.ReactElement;
  placement?: Placement;
  anchorSize: { width: number; height: number };
};

const TooltipBody: React.VFC<TooltipBodyProps> = ({
  state,
  content,
  placement = "top-center",
  anchorSize,
  ...rest
}) => {
  const { tooltipProps } = useTooltip(rest, state);
  const ref = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      switch (placement) {
        case "top-start": {
          const x = -anchorSize.width;
          const y = -height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "top-center": {
          const x = -((anchorSize.width + width) / 2);
          const y = -height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "top-end": {
          const x = -(anchorSize.width - width);
          const y = -height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-start": {
          const x = 0;
          const y = -height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-center": {
          const x = 0;
          const y = 0;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-end": {
          const x = 0;
          const y = anchorSize.height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-end": {
          const x = -(anchorSize.width - width);
          const y = anchorSize.height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-center": {
          const x = -((anchorSize.width + width) / 2);
          const y = anchorSize.height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-start": {
          const x = -anchorSize.width;
          const y = anchorSize.height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-start": {
          const x = -(anchorSize.width + width);
          const y = -height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-center": {
          const x = -(anchorSize.width + width);
          const y = 0;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-end": {
          const x = -(anchorSize.width + width);
          const y = anchorSize.height;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
      }
    }
  }, [anchorSize, placement]);

  if (!content) return null;

  return (
    <motion.span
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
    </motion.span>
  );
};

const Content = styled.span`
  position: absolute;
  background-color: ${colors.blackAlpha500};
  color: white;
  min-height: 24px;
  padding: 0 8px;
  border-radius: 4px;
`;
