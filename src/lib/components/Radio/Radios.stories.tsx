import { colors } from "../../styles";
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

export const WithSomeStyle = () => {
  return (
    <RadioGroup label={"Foo"} name={"bar"}>
      <div style={{ marginTop: "16px" }}>
        {OPTIONS.map((option) => {
          return (
            <div key={option.value} style={{ marginTop: "8px" }}>
              <Radio value={`${option.value}`}>
                <span style={{ fontSize: "14px", lineHeight: "24px", color: colors.blackAlpha800 }}>
                  {option.label}
                </span>
              </Radio> 
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};
