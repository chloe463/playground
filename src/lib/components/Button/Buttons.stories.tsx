import { action } from "@storybook/addon-actions";
import { ComponentMeta } from "@storybook/react";
import { ComponentProps } from "react";
import { BaseButton } from "./Button";
import { DangerButton } from "./DangerButton";
import { PrimaryButton } from "./PrimaryButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Buttons",
  args: {
    label: "Button",
    disabled: false,
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof DangerButton>;

type Args = Partial<ComponentProps<typeof DangerButton>> & {
  label: string;
};

export const Button = (args: Args) => (
  <div className="flex space-x-4">
    <BaseButton disabled={args.disabled} onClick={action("onClick - BaseButton")}>
      {args.label}
    </BaseButton>
    <PrimaryButton disabled={args.disabled} onClick={action("onClick - PrimaryButton")}>
      {args.label}
    </PrimaryButton>
    <DangerButton disabled={args.disabled} onClick={action("onClick - DangerButton")}>
      {args.label}
    </DangerButton>
  </div>
);
