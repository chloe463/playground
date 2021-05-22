import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { TextField } from "./index";
export default {
  title: "TextField",
};

export const Normal = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      id="title"
      label={"Title"}
      name="title"
      value={value}
      autoComplete="off"
      onChange={(s) => {
        setValue(s);
        action("onChange")(s);
      }}
    />
  );
};
