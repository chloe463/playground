import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../styles";

type TextAreaProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.VFC<TextAreaProps> = (props) => {
  const { placeholder, ...rest } = props;
  return (
    <Base>
      <StyledTextArea
        placeholder="&nbsp;"
        {...rest}
      />
      <Label>{props.placeholder}</Label>
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

  &:focus {
    background-color: ${colors.blackAlpha100};
  }

  &:placeholder-shown + .placeholder {
    display: block;
  }

  &:not(:placeholder-shown) + .placeholder {
    transform: translateY(-12px) scale(.75);
  }

  &:focus + .placeholder {
    transform: translateY(-12px) scale(.75);
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
    transform: scaleX(1) translateY(-2px);
  }
`;

const Label = styled.p.attrs({ className: "placeholder" })`
  position: absolute;
  top: 16px;
  left: 16px;
  color: ${colors.blackAlpha400};
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
  transform: scaleX(.5) translateY(-2px);
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);
`;
