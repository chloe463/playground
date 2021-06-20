import { useCheckboxGroupItem } from "@react-aria/checkbox";
import { useFocusRing } from "@react-aria/focus";
import { useFocusWithin } from "@react-aria/interactions";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { AriaCheckboxGroupItemProps } from "@react-types/checkbox";
import React, { useContext, useMemo, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import { CheckboxGroupContext } from "./CheckboxGroup";

type CheckboxProps = {
  children: React.ReactNode;
} & AriaCheckboxGroupItemProps;

const FOCUS_RIPPLE_DURATION_MS = 250;
const CLICK_RIPPLE_DURATION_MS = 800;

export const Checkbox: React.VFC<CheckboxProps> = (props) => {
  const { children, isIndeterminate } = props;
  const ref = useRef<HTMLInputElement>(null);
  const state = useContext(CheckboxGroupContext);
  const { inputProps } = useCheckboxGroupItem(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { focusWithinProps } = useFocusWithin({
    onBlurWithin: (e) => props.onBlur?.(e),
  });

  const isDisabled = state.isDisabled || props.isDisabled;
  const isSelected = state.isSelected(props.value);

  const [isRippleVisible, setIsRippleVisible] = useState(false);
  const onClickRadioButton = () => {
    setIsRippleVisible(true);
    setTimeout(() => {
      setIsRippleVisible(false);
    }, CLICK_RIPPLE_DURATION_MS);
  };

  const strokeColor = useMemo(() => {
    if (isDisabled) {
      return colors.blackAlpha200;
    }
    if (isSelected || isIndeterminate) {
      return colors.brand;
    }
    return colors.blackAlpha400;
  }, [isIndeterminate, isSelected, isDisabled]);

  return (
    <Label $disabled={isDisabled} {...focusWithinProps}>
      <CheckboxButton
        $selected={isSelected}
        $disabled={isDisabled}
        onClick={() => !isDisabled && onClickRadioButton()}
      >
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={ref} />
        </VisuallyHidden>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 4 }}
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="2"
            fill={isSelected || isIndeterminate ? colors.brand : "none"}
            stroke={strokeColor}
            strokeWidth={2}
          />
          <path
            d="M5 11L10.3846 17L19 7"
            stroke="white"
            strokeWidth="2"
            strokeDasharray={22}
            strokeDashoffset={isSelected ? 0 : 22}
            style={{
              transition: "all 200ms linear"
            }}
          />
          {isIndeterminate && (
            <path d="M4 12H20" stroke="white" stroke-width="2"/>
          )}
        </svg>
        <RippleRoot>
          {!isDisabled && <MouseOverRing />}
          {isFocusVisible && <FocusRipple />}
          {isRippleVisible && <ClickRipple />}
        </RippleRoot>
      </CheckboxButton>
      {children}
    </Label>
  );
};

const Label = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => $disabled ? "default" : "pointer"};
  color: ${({ $disabled }) => $disabled ? colors.blackAlpha400 : colors.blackAlpha800};
`;

const CheckboxButton = styled.span<{
  $selected: boolean,
  $disabled?: boolean,
}>`
  position: relative;
  display: inline-grid;
  place-items: center;
  cursor: ${({ $disabled }) => $disabled ? "normal" : "pointer"};

  .inner-circle {
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.5, 0.5, 0.5, 1);
    transform-origin: 50% 50%;
  }

  ${({ $selected }) => $selected ? css`
    .inner-circle {
      transform: scale(1);
      fill-opacity: 1;
    }
  ` : css`
    .inner-circle {
      transform: scale(0);
      fill-opacity: 0;
    }
  `}
`;

const RippleRoot = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const MouseOverRing = styled.span`
  position: absolute;
  top: -12px;
  right: 0;
  bottom: 0;
  left: -12px;
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  opacity: 0;
  background-color: ${colors.brand};
  transition-property: opacity;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.3, 0.3, 0.3, 1);
  &:hover {
    opacity: 0.1;
  }
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
  top: -12px;
  right: 0;
  bottom: 0;
  left: -12px;
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: ${colors.brand};
  border-radius: 50%;
  opacity: 0.2;

  animation-name: ${rippleEntering};
  animation-duration: ${FOCUS_RIPPLE_DURATION_MS}ms;
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 1);
`;

const rippleExiting = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  40% {
    transform: scale(1);
    opacity: 0.2;
  }
  90% {
    transform: scale(1);
    opacity: 0.05;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const ClickRipple = styled.span`
  position: absolute;
  top: -12px;
  right: 0;
  bottom: 0;
  left: -12px;
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: ${colors.brand};
  border-radius: 50%;
  opacity: 0;

  animation-name: ${rippleExiting};
  animation-duration: ${CLICK_RIPPLE_DURATION_MS}ms;
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 1);
`;
