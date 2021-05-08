import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

type TextFieldProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const TextField: React.VFC<TextFieldProps> = (props) => {
  const { placeholder, ...rest } = props;
  return (
    <Base>
      <TextInput
        type="text"
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

const TextInput = styled.input`
  appearance: none;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 100%;
  padding: 20px 16px 6px 16px;

  border-top: 1px solid transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.54);
  font-size: 16px;
  line-height: 28px;

  &:focus {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:placeholder-shown + .placeholder {
    display: block;
  }

  &:not(:placeholder-shown) + .placeholder {
    transform: translateY(-12px) scale(.75);
  }

  &:focus + .placeholder {
    transform: translateY(-12px) scale(.75);
    color: #66327c;
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
    background-color: #66327c;
    transform: scaleX(1);
  }
`;

const Label = styled.p.attrs({ className: "placeholder" })`
  position: absolute;
  top: 16px;
  left: 16px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);
  transform-origin: 0 0;
`;

const BottomBorder = styled.span.attrs({ className: "bottom-border" })`
  opacity: 0;
  transform-origin: 50% 50%;
  transform: scaleX(.5);
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);
`;
