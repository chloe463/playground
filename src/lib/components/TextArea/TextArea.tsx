import { AriaTextFieldOptions, useTextField } from "@react-aria/textfield";
import React, { useRef } from "react";
import styled from "styled-components";
import { colors } from "../../styles";

type TextAreaProps = {} & AriaTextFieldOptions<"textarea">;

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { inputProps, labelProps } = useTextField(props, ref) as {
    inputProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  };

  return (
    <Base>
      <StyledTextArea {...inputProps} placeholder="&nbsp;" ref={ref} />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <Label {...labelProps} className="placeholder">
        {props.label}
      </Label>
      <BottomBorder />
    </Base>
  );
};

const Base = styled.div`
  position: relative;
  display: block;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
`;

const StyledTextArea = styled.textarea`
  appearance: none;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  background-color: ${colors.blackAlpha50};
  box-sizing: border-box;
  width: 100%;
  padding: 20px 16px 6px 16px;

  border-top: 1px solid transparent;
  border-bottom: 1px solid ${colors.blackAlpha500};
  font-family: inherit;
  font-size: 16px;
  line-height: 28px;
  transition: all 150ms cubic-bezier(0.3, 0.3, 0.3, 1);

  &:hover {
    background-color: ${colors.blackAlpha100};
  }

  &:focus {
    background-color: ${colors.blackAlpha100};
  }

  &:placeholder-shown + .placeholder {
    display: block;
  }

  &:not(:placeholder-shown) + .placeholder {
    transform: translateY(-12px) scale(0.75);
  }

  &:focus + .placeholder {
    transform: translateY(-12px) scale(0.75);
    color: ${colors.brand};
  }

  &:not(:placeholder-shown) ~ .bottom-border {
  }

  &:focus ~ .bottom-border {
    opacity: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.brand};
    transform: scaleX(1) translateY(-6px);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 16px;
  color: ${colors.blackAlpha500};
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);
  transform-origin: 0 0;
  pointer-events: none;
`;

const BottomBorder = styled.span.attrs({ className: "bottom-border" })`
  opacity: 0;
  transform-origin: 50% 50%;
  transform: scaleX(0.5) translateY(-2px);
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);
`;
