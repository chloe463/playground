import { useRadioGroup as useRadioGroup_reactAria } from "@react-aria/radio";
import { RadioGroupState, useRadioGroupState } from "@react-stately/radio";
import { RadioGroupProps } from "@react-types/radio";
import React, { createContext, useContext } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

type RadioProps = RadioGroupProps;

export const RadioContext = createContext<RadioGroupState | null>(null);

export const RadioGroup: React.FC<React.PropsWithChildren<RadioProps>> = (props) => {
  const { label, children } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup_reactAria(props, state);
  return (
    <Base {...radioGroupProps}>
      <Label {...labelProps}>{label}</Label>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </Base>
  );
};

export const useRadioGroup = () => {
  const context = useContext(RadioContext);
  if (!context) throw new Error("useRadioGroup is needed to be inside RadioGroup");
  return context;
};

const Base = styled.div``;

const Label = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;
