import React, { ComponentProps } from "react";
import { Tooltip } from "./Tooltip";

export default {
  title: "lib/Tooltip",
};

type TooltipStoryArgs = Partial<ComponentProps<typeof Tooltip>>;

export const _Default = (args: TooltipStoryArgs) => {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <Tooltip
        delay={args.delay}
        placement={args.placement}
        offset={args.offset}
        content={<span>Hello!</span>}
      >
        <span>I have a tooltip!</span>
      </Tooltip>
    </div>
  );
};

_Default.args = {
  delay: 50,
  placement: "top-center",
  offset: {
    x: 4,
    y: 4,
  },
} as TooltipStoryArgs;
_Default.argTypes = {
  delay: {
    control: "number",
  },
  placement: {
    control: {
      type: "select",
    },
    options: [
      "top-start",
      "top-center",
      "top-end",
      "right-start",
      "right-center",
      "right-end",
      "bottom-end",
      "bottom-center",
      "bottom-start",
      "left-end",
      "left-center",
      "left-start",
    ],
  },
};
