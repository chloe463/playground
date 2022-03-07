import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { TextArea } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TextArea",
};

export const Normal = () => {
  const [value, setValue] = useState("");
  return (
    <TextArea
      id="description"
      label={"Description"}
      name="description"
      value={value}
      onChange={(s) => {
        setValue(s);
        action("onChange")(s);
      }}
    />
  );
};
