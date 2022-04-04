import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Dropdown } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Dropdown",
};

const options = ["Option1", "Option2", "Option3", "Option4", "Option5"];

export const Normal = () => {
  const [value] = useState("");
  return (
    <Dropdown
      placeholder={"Dropdown"}
      options={options}
      value={value}
      itemToString={(v) => v}
      onChange={action("onChange")}
    />
  );
};

export const WithEntryPoint = () => {
  const [value] = useState("");
  return (
    <>
      <Dropdown
        placeholder={"Dropdown"}
        options={options}
        value={value}
        itemToString={(v) => v}
        onChange={action("onChange")}
        optionsEntryPoingId="options-entry-point"
      />
      <div id="options-entry-point" />
    </>
  );
};
