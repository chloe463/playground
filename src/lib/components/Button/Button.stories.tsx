import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ComponentProps } from "react";
import { BaseButton } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Button/Base",
  component: BaseButton,
  args: {
    label: "BaseButton",
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
} as ComponentMeta<typeof BaseButton>;

type Args = Partial<ComponentProps<typeof BaseButton>> & {
  label: string;
};

export const Button = (args: Args) => (
  <BaseButton disabled={args.disabled} onClick={action("onClick")}>
    {args.label}
  </BaseButton>
);
