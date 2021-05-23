import { useFocusRing } from "@react-aria/focus";
import { useRadio } from "@react-aria/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { AriaRadioProps } from "@react-types/radio";
import React, { useContext, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import { RadioContext } from "./RadioGroup";

type RadioProps = {
  children: React.ReactNode;
} & AriaRadioProps;

const FOCUS_RIPPLE_DURATION_MS = 250;
const CLICK_RIPPLE_DURATION_MS = 300;

export const Radio: React.VFC<RadioProps> = (props) => {
  const { children } = props;
  const ref = useRef<HTMLInputElement>(null);
  const state = useContext(RadioContext);
  const { inputProps } = useRadio(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const isSelected = state.selectedValue === props.value;

  const [isRippleVisible, setIsRippleVisible] = useState(false);
  const onClickRadioButton = () => {
    setIsRippleVisible(true);
    setTimeout(() => {
      setIsRippleVisible(false);
    }, CLICK_RIPPLE_DURATION_MS);
  };

  return (
    <Label>
      <RadioButton onClick={() => onClickRadioButton()}>
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={ref} />
        </VisuallyHidden>
        <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
          <circle
            cx={12}
            cy={12}
            r={10}
            fill="none"
            stroke={isSelected ? colors.brand : colors.blackAlpha400}
            strokeWidth={2}
          />
          <circle
            cx={12}
            cy={12}
            r={5}
            fill={isSelected ? colors.brand : "none"}
            stroke="none"
          />
        </svg>
        <RippleRoot>
          {isFocusVisible && <FocusRipple />}
          {isRippleVisible && <ClickRipple />}
        </RippleRoot>
      </RadioButton>
      {children}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.span`
  position: relative;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
`;

const RippleRoot = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const rippleEntering = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 0.2;
    transform: scale(1);
  }
`;

const FocusRipple = styled.span`
  position: absolute;
  top: -6px;
  right: 0;
  bottom: 0;
  left: -6px;
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: ${colors.brand};
  border-radius: 50%;
  opacity: 0.2;

  animation-name: ${rippleEntering};
  animation-duration: ${FOCUS_RIPPLE_DURATION_MS}ms;
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 1);
`;


const rippleExiting = keyframes`
  from {
    opacity: 0.4;
    transform: scale(0.7);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
`;

const ClickRipple = styled.span`
  position: absolute;
  top: -6px;
  right: 0;
  bottom: 0;
  left: -6px;
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: ${colors.brand};
  border-radius: 50%;
  opacity: 0;

  animation-name: ${rippleExiting};
  animation-duration: ${CLICK_RIPPLE_DURATION_MS}ms;
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 1);
`;
