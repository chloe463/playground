import React, { createContext } from "react";
import { CheckboxGroupState, useCheckboxGroupState } from "@react-stately/checkbox";
import { useCheckboxGroup } from "@react-aria/checkbox";
import { CheckboxGroupProps } from "@react-types/checkbox";
import styled from "styled-components";
import { colors } from "../../styles/colors";

type CheckboxProps = {
  children: React.ReactNode;
} & CheckboxGroupProps;

export const CheckboxGroupContext = createContext<CheckboxGroupState>({
  value: [],
  isDisabled: false,
  isReadOnly: false,
  isSelected: (value: string) => false,
  setValue: (value: string[]) => {},
  addValue: (value: string) => {},
  removeValue: (value: string) => {},
  toggleValue: (value: string) => {},
});

export const CheckboxGroup: React.VFC<CheckboxProps> = (props) => {
  const { label, children } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);
  return (
    <Base {...groupProps}>
      <Label {...labelProps}>{label}</Label>
      <CheckboxGroupContext.Provider value={state}>{children}</CheckboxGroupContext.Provider>
    </Base>
  );
};

const Base = styled.div``;

const Label = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;
