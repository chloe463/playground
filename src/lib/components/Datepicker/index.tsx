import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import React, { useCallback, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles";
import { Popper } from "../Popper";
import { Calendar, DateString } from "./Calendar";

type DatepickerProps = {
  value: Date | null;
  placeholder?: string;
  name?: string;
  format?: "YYYY/MM/DD" | "MM/DD/YYYY";
  disabled?: boolean;
  min?: Date | DateString;
  max?: Date | DateString;
  onChange: (v: Date | null) => void;
};

const DEFAULT_MAX = "2100/12/31";
const DEFAULT_MIN = "1900/01/01";

export const Datepicker: React.VFC<DatepickerProps> = ({
  placeholder,
  value,
  name,
  format = "YYYY/MM/DD",
  disabled,
  min: _min,
  max: _max,
  onChange,
}) => {
  const baseRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value);
  const [innerValue, setInnerValue] = useState<Date | null>(value);

  const min = useMemo(() => typeof _min === "string" ? dayjs(_min) : _min ? dayjs(_min) : dayjs(DEFAULT_MIN), [_min]);
  const max = useMemo(() => typeof _max === "string" ? dayjs(_max) : _max ? dayjs(_max) : dayjs(DEFAULT_MAX), [_max]);

  const onClickCancel = useCallback(() => {
    setInnerValue(defaultValue);
    onChange(defaultValue);
    setIsOpen(false);
  }, [defaultValue, onChange]);

  const onClickOk = useCallback(() => {
    const input = baseRef.current?.querySelector("input");
    const nextValue = dayjs(input?.value).toDate();
    setDefaultValue(nextValue);
    onChange(nextValue);
    setIsOpen(false);
  }, [onChange]);

  return (
    <>
      <Base ref={baseRef} onClick={() => disabled || setIsOpen(v => !v)} $focus={isOpen} $disabled={disabled}>
        <VisuallyHiddenInput
          type="hidden"
          name={name}
          value={innerValue ? dayjs(innerValue).format("YYYY-MM-DD") : ""}
          disabled={disabled}
        />
        <Placeholder $focus={isOpen} $hasValue={Boolean(value)}>{placeholder}</Placeholder>
        {value && innerValue && (
          <SelectedValue>{dayjs(innerValue).format(format)}</SelectedValue>
        )}
        <BottomBorder $focus={isOpen} />
      </Base>
      <AnimatePresence>
        {isOpen && (
          <Popper
            shouldCloseClickOverlay
            shouldCloseOnKeyupEscape
            scrollLock
            onClose={() => setIsOpen(false)}
          >
            <Calendar
              placeholder={placeholder}
              baseRef={baseRef}
              innerValue={innerValue}
              min={min}
              max={max}
              onSelectDate={setInnerValue}
              onClickCancel={onClickCancel}
              onClickOk={onClickOk}
            />
          </Popper>
        )}
      </AnimatePresence>
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

