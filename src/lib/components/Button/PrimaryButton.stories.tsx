import { action } from "@storybook/addon-actions";
import { ComponentProps } from "react";
import { PrimaryButton } from "./PrimaryButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Button/Primary",
  component: PrimaryButton,
  args: {
    label: "Primary",
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
};

type Args = Partial<ComponentProps<typeof PrimaryButton>> & {
  label: string;
};

export const Button = (args: Args) => (
  <PrimaryButton disabled={args.disabled} onClick={action("onClick")}>
    {args.label}
  </PrimaryButton>
);
