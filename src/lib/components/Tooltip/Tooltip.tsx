import { useTooltipTrigger } from "@react-aria/tooltip";
import { mergeProps } from "@react-aria/utils";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { TooltipTriggerProps } from "@react-types/tooltip";
import React, { useRef } from "react";
import { TooltipBody } from "./TooltipBody";
import type { Offset, Placement } from "./types";

type Props = TooltipTriggerProps & {
  content: React.ReactElement;
  placement?: Placement;
  offset?: Offset;
  children: React.ReactElement;
};

export const Tooltip: React.VFC<Props> = (props) => {
  const { content, placement = "top-center", offset = { x: 0, y: 0 }, children, ...rest } = props;
  const state = useTooltipTriggerState(rest);
  const ref = useRef<HTMLElement | null>(null);

  // Get props for the trigger and its tooltip
  const { triggerProps, tooltipProps } = useTooltipTrigger(rest, state, ref);

  if (!children) return null;

  const childrenProps = mergeProps(children.props, triggerProps);

  return (
    <>
      {React.cloneElement(children, { ...childrenProps, ref })}
      {state.isOpen && (
        <TooltipBody
          state={state}
          content={content}
          anchorSizeAndPosition={{
            x: ref.current?.getBoundingClientRect().x || 0,
            y: ref.current?.getBoundingClientRect().y || 0,
            width: ref.current?.getBoundingClientRect().width || 0,
            height: ref.current?.getBoundingClientRect().height || 0,
          }}
          placement={placement}
          offset={offset}
          {...tooltipProps}
        />
      )}
    </>
  );
};
