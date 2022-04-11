/* eslint-disable tailwindcss/no-custom-classname */
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "lib/Radio",
};

const OPTIONS = [
  { label: "Option1", value: 1 },
  { label: "Option2", value: 2 },
  { label: "Option3", value: 3 },
];

export const Normal = () => {
  return (
    <RadioGroup label={"Foo"} name={"bar"}>
      {OPTIONS.map((option) => {
        return (
          <Radio key={option.value} value={`${option.value}`}>
            <span className="text-body2 text-black-alaph800">{option.label}</span>
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export const WithSomeStyle = () => {
  return (
    <RadioGroup label={"Foo"} name={"bar"}>
      <div className="mt-4">
        {OPTIONS.map((option) => {
          return (
            <div key={option.value} className="mt-2">
              <Radio value={`${option.value}`}>
                <span className="text-body2 text-black-alpha800">{option.label}</span>
              </Radio>
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};
