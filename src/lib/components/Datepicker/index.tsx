import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles";
import { Popper } from "../Popper";
import { Calendar } from "./Calendar";

type DatepickerProps = {
  value: Date | null;
  placeholder?: string;
  name?: string;
  format?: "YYYY/MM/DD" | "MM/DD/YYYY";
  disabled?: boolean;
  onChange: (v: Date) => void;
};

export const Datepicker: React.VFC<DatepickerProps> = ({
  placeholder,
  value,
  name,
  format = "YYYY/MM/DD",
  disabled,
  onChange,
}) => {
  const baseRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Base ref={baseRef} onClick={() => disabled || setIsOpen(v => !v)} $focus={isOpen} $disabled={disabled}>
        <VisuallyHiddenInput
          type="date"
          name={name}
          defaultValue={value ? dayjs(value).format(format) : ""}
          disabled={disabled}
        />
        <Placeholder $focus={isOpen} $hasValue={Boolean(value)}>{placeholder}</Placeholder>
        {value && (
          <SelectedValue>{dayjs(value).format(format)}</SelectedValue>
        )}
        <BottomBorder $focus={isOpen} />
      </Base>
      {isOpen && (
        <Popper shouldCloseClickOverlay shouldCloseOnKeyupEscape onClose={() => setIsOpen(v => !v)}>
          <Calendar placeholder={placeholder} baseRef={baseRef} onSelectDate={onChange} />
        </Popper>
      )}
    </>
  );
};

const Base = styled.div<{ $focus: boolean, $disabled?: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  background-color: ${colors.blackAlpha50};
  border-bottom: 1px solid ${colors.blackAlpha500};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  ${({ $focus }) => $focus && css`
    background-color: ${colors.blackAlpha100};
    &:after {
      background-color: ${colors.brand};
      transform: rotate(180deg);
    }
  `}

  ${({ $disabled }) => $disabled && css`
    background-color: ${colors.blackAlpha100};
    cursor: initial;
  `}
`;

const VisuallyHiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0;
  height: 0;
  opacity: 0;
`;

type PlaceholderProps = {
  $focus: boolean;
  $hasValue: boolean;
};

const Placeholder = styled.p<PlaceholderProps>`
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

  ${({ $focus }) => $focus && css`
    transform: translateY(-12px) scale(.75);
    color: ${colors.brand};
  `}

  ${({ $hasValue }) => $hasValue && css`
    transform: translateY(-12px) scale(.75);
  `}
`;

const SelectedValue = styled.p`
  position: absolute;
  top: 20px;
  left: 16px;
  color: ${colors.blackAlpha800};
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  pointer-events: none;
`;

const BottomBorder = styled.span<{ $focus: boolean }>`
  opacity: 0;
  transform-origin: 50% 50%;
  transform: scaleX(.5) translateY(-2px);
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);

  ${({ $focus }) => $focus && css`
    opacity: 1;
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.brand};
    transform: scaleX(1) translateY(-2px);
  `}
`;

