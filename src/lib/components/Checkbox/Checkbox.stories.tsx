import { Checkbox } from "./Checkbox";
import { CheckboxGroup } from "./CheckboxGroup";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Checkbox",
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
      <div className="mt-4">
        {OPTIONS.map((option) => {
          return (
            <div key={option.value} className="mt-2">
              <Checkbox value={`${option.value}`} isDisabled={option.value === 4}>
                <span className="text-body2 text-black-alpha800">{option.label}</span>
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
    <CheckboxGroup label={"Foo"} value={["2"]}>
      <div className="mt-4 space-y-2">
        {OPTIONS.map((option) => {
          return (
            <div key={option.value}>
              <Checkbox
                value={`${option.value}`}
                isIndeterminate={option.state === "indeterminate"}
                isDisabled={option.state === "disabled"}
              >
                <span className="text-body2 text-black-alpha800">{option.label}</span>
              </Checkbox>
            </div>
          );
        })}
      </div>
    </CheckboxGroup>
  );
};
