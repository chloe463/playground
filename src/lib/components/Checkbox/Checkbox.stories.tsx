import { Checkbox } from "./Checkbox";
// import { Radio } from "./Radio";
import { CheckboxGroup } from "./CheckboxGroup";

export default {
  title: "Checkbox",
};

const OPTIONS = [
  { label: "Option1", value: 1 },
  { label: "Option2", value: 2 },
  { label: "Option3", value: 3 },
  { label: "Option4", value: 4 },
];

export const Normal = () => {
  return (
    <CheckboxGroup label={"Foo"}>
      {OPTIONS.map((option) => {
        return (
          <Checkbox value={`${option.value}`} isDisabled={option.value === 4}>
            {option.label}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

// export const WithSomeStyle = () => {
//   return (
//     <RadioGroup label={"Foo"} name={"bar"}>
//       <div style={{ marginTop: "16px" }}>
//         {OPTIONS.map((option) => {
//           return (
//             <div key={option.value} style={{ marginTop: "8px" }}>
//               <Radio value={`${option.value}`}>
//                 <span style={{ fontSize: "14px", lineHeight: "24px", color: colors.blackAlpha800 }}>
//                   {option.label}
//                 </span>
//               </Radio> 
//             </div>
//           );
//         })}
//       </div>
//     </RadioGroup>
//   );
// };
