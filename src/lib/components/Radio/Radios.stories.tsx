import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

export default {
  title: "Radio",
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
          <Radio
            key={option.value}
            value={`${option.value}`}
          >
            <span>
              {option.label}
            </span>
          </Radio> 
        );
      })}
    </RadioGroup>
  );
};
