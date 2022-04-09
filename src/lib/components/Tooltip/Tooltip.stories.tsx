import React, { ComponentProps } from "react";
import { Tooltip } from "./Tooltip";

export default {
  title: "lib/Tooltip",
};

type TooltipStoryArgs = Partial<ComponentProps<typeof Tooltip>>;

export const _Default = (args: TooltipStoryArgs) => {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <Tooltip delay={100} placement={args.placement} content={<span>Hello!</span>}>
        <span>I have a tooltip!</span>
      </Tooltip>
    </div>
  );
};

_Default.args = {
  placement: "top-center",
} as TooltipStoryArgs;
_Default.argTypes = {
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
