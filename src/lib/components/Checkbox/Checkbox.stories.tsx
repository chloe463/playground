import { colors } from "../../styles";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup } from "./CheckboxGroup";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Checkbox",
};

const OPTIONS = [
  { label: "Option1", value: 1, state: "default" },
  { label: "Option2", value: 2, state: "checked" },
  { label: "Option3", value: 3, state: "indeterminate" },
  { label: "Option4", value: 4, state: "disabled" },
];

export const Normal = () => {
  return (
    <CheckboxGroup label={"Foo"}>
      {OPTIONS.map((option) => {
        return (
          <Checkbox key={option.label} value={`${option.value}`} isDisabled={option.value === 4}>
            {option.label}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

export const WithSomeStyle = () => {
  return (
    <CheckboxGroup label={"Foo"}>
      <div style={{ marginTop: "16px" }}>
        {OPTIONS.map((option) => {
          return (
            <div key={option.value} style={{ marginTop: "8px" }}>
              <Checkbox value={`${option.value}`} isDisabled={option.value === 4}>
                <span style={{ fontSize: "14px", lineHeight: "24px", color: colors.blackAlpha800 }}>
                  {option.label}
                </span>
              </Checkbox> 
            </div>
          );
        })}
      </div>
    </CheckboxGroup>
  );
};

export const Variants = () => {
  return (
    <CheckboxGroup label={"Foo"}>
      <div style={{ marginTop: "16px" }}>
        {OPTIONS.map((option) => {
          return (
            <div key={option.value} style={{ marginTop: "8px" }}>
              <Checkbox
                value={`${option.value}`}
                isIndeterminate={option.state === "indeterminate"}
                isDisabled={option.state === "disabled"}
              >
                <span style={{ fontSize: "14px", lineHeight: "24px", color: colors.blackAlpha800 }}>
                  {option.label}
                </span>
              </Checkbox> 
            </div>
          );
        })}
      </div>
    </CheckboxGroup>
  );
};
