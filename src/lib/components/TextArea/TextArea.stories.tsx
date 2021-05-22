import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { TextArea } from "./index";
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