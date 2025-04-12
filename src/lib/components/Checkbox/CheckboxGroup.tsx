import { useCheckboxGroup as useCheckboxGroupReactAria } from "@react-aria/checkbox";
import { CheckboxGroupState, useCheckboxGroupState } from "@react-stately/checkbox";
import { CheckboxGroupProps } from "@react-types/checkbox";
import React, { createContext, useContext } from "react";
import { styled } from "styled-components";
import { colors } from "../../styles/colors";

type CheckboxProps = {
  children: React.ReactNode;
} & CheckboxGroupProps;

export const CheckboxGroupContext = createContext<CheckboxGroupState | null>(null);

export const CheckboxGroup: React.FC<CheckboxProps> = (props) => {
  const { label, children } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroupReactAria(props, state);
  return (
    <Base {...groupProps}>
      <Label {...labelProps}>{label}</Label>
      <CheckboxGroupContext.Provider value={state}>{children}</CheckboxGroupContext.Provider>
    </Base>
  );
};

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext);
  if (!context) throw new Error("useCheckboxGroup is needed to be inside CheckboxGroup");
  return context;
};

const Base = styled.div``;

const Label = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;
