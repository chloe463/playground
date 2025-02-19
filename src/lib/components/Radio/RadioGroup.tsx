import { useRadioGroup } from "@react-aria/radio";
import { RadioGroupState, useRadioGroupState } from "@react-stately/radio";
import { RadioGroupProps } from "@react-types/radio";
import React, { createContext } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

type RadioProps = RadioGroupProps;

export const RadioContext = createContext<RadioGroupState>({
  name: "",
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  selectedValue: null,
  setSelectedValue: (_value: string) => {},
  lastFocusedValue: null,
  setLastFocusedValue: (_value: string) => {},
  validationState: null,
});

export const RadioGroup: React.FC<React.PropsWithChildren<RadioProps>> = (props) => {
  const { label, children } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);
  return (
    <Base {...radioGroupProps}>
      <Label {...labelProps}>{label}</Label>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </Base>
  );
};

const Base = styled.div``;

const Label = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.blackAlpha500};
`;
