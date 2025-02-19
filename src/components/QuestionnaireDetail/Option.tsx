import { FragmentType, getFragmentData, graphql } from "../../__generated__/gql-masking";
import { Checkbox, Radio, Dropdown } from "../../lib";

export const OPTION_FRAGMENT = graphql(/* GraphQL */ `
  fragment OptionFragment on Option {
    id
    text
  }
`);

export type OptionVariant = "checkbox" | "radio" | "select" | "text";
export const OPTION_VARIANTS: Record<number, OptionVariant> = {
  0: "checkbox",
  1: "radio",
  2: "select",
  3: "text",
};

interface Props {
  data: FragmentType<typeof OPTION_FRAGMENT>;
}

export const OptionComponent = (props: Props) => {
  const option = getFragmentData(OPTION_FRAGMENT, props.data);
  return (
    <div>
      <Checkbox value={`${option.id}`}>
        {option.text}
      </Checkbox>
    </div>
  );
};
OptionComponent.Fragment = OPTION_FRAGMENT;

export const CheckboxOption = (props: Props) => {
  const option = getFragmentData(OPTION_FRAGMENT, props.data);
  return (
    <div>
      <Checkbox value={`${option.id}`}>
        {option.text}
      </Checkbox>
    </div>
  );
};

export const RadioOption = (props: Props) => {
  const option = getFragmentData(OPTION_FRAGMENT, props.data);
  return (
    <div>
      <Radio value={`${option.id}`}>
        {option.text}
      </Radio>
    </div>
  );
};


interface DropwdownOptionsProps {
  // data: FragmentType<typeof OPTION_FRAGMENT>[];
  data: (FragmentType<typeof OPTION_FRAGMENT> | null)[];
}

export const DropdownOptions = (props: DropwdownOptionsProps) => {
  const { data: _data } = props;
  const data = _data.filter((item): item is FragmentType<typeof OPTION_FRAGMENT> => Boolean(item));

  const options = getFragmentData(OPTION_FRAGMENT, data);
  return (
    <Dropdown
      placeholder=""
      options={options.map((item) => item?.text ?? "")}
      value={""}
      itemToString={(v) => v}
    />
  );
}
