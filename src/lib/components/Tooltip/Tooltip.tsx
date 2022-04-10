import { useTooltipTrigger } from "@react-aria/tooltip";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { TooltipTriggerProps } from "@react-types/tooltip";
import React, { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomarphicLayoutEffect";
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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
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
          offset={offset}
          {...tooltipProps}
        />
      )}
    </span>
  );
};
