import { FocusScope } from "@react-aria/focus";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles";
import { Popper } from "../Popper";
import { Calendar, DateString } from "./Calendar";

type DatepickerProps = {
  value: Date | null;
  id?: string;
  name?: string;
  placeholder?: string;
  format?: "YYYY/MM/DD" | "MM/DD/YYYY";
  disabled?: boolean;
  min?: Date | DateString;
  max?: Date | DateString;
  calendarEntryPoint?: string;
  onChange: (v: Date | null) => void;
  onBlur?: () => void;
};

const DEFAULT_MAX = "2100/12/31";
const DEFAULT_MIN = "1900/01/01";

export const Datepicker: React.VFC<DatepickerProps> = ({
  id,
  name,
  placeholder,
  value,
  format = "YYYY/MM/DD",
  disabled,
  min: _min,
  max: _max,
  calendarEntryPoint,
  onChange,
  onBlur,
}) => {
  const baseRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value);
  const [innerValue, setInnerValue] = useState<Date | null>(value);

  const min = useMemo(
    () => (typeof _min === "string" ? dayjs(_min) : _min ? dayjs(_min) : dayjs(DEFAULT_MIN)),
    [_min]
  );
  const max = useMemo(
    () => (typeof _max === "string" ? dayjs(_max) : _max ? dayjs(_max) : dayjs(DEFAULT_MAX)),
    [_max]
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.target === baseRef.current) {
        setIsOpen((v) => !v);
      }
    };
    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  }, []);

  const onClickCancel = useCallback(() => {
    setInnerValue(defaultValue);
    onChange(defaultValue);
    onBlur?.();
    setIsOpen(false);
  }, [defaultValue, onChange, onBlur]);

  const onClickOk = useCallback(() => {
    const input = baseRef.current?.querySelector("input");
    const nextValue = dayjs(input?.value).toDate();
    setDefaultValue(nextValue);
    onChange(nextValue);
    setIsOpen(false);
    onBlur?.();
  }, [onChange, onBlur]);

  const onClosePopper = onClickCancel;

  return (
    <>
      <Base
        ref={baseRef}
        $focus={isOpen}
        $disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen((v) => !v)}
        aria-disabled={disabled}
      >
        <Label
          htmlFor={id}
          className={"datepicker-label"}
          $focus={isOpen}
          $hasValue={Boolean(value)}
        >
          {placeholder}
        </Label>
        <VisuallyHiddenInput
          id={id}
          type="hidden"
          name={name}
          value={innerValue ? dayjs(innerValue).format("YYYY-MM-DD") : ""}
          disabled={disabled}
        />
        {value && innerValue && (
          <SelectedValue $disabled={disabled}>{dayjs(innerValue).format(format)}</SelectedValue>
        )}
        <BottomBorder className={"datepicker-bottom-border"} $focus={isOpen} />
      </Base>
      <AnimatePresence>
        {isOpen && (
          <Popper
            shouldCloseClickOverlay
            shouldCloseOnKeyupEscape
            scrollLock
            entryPointId={calendarEntryPoint}
            onClose={onClosePopper}
          >
            <FocusScope contain restoreFocus autoFocus>
              <Calendar
                name={name}
                placeholder={placeholder}
                baseRef={baseRef}
                innerValue={innerValue}
                min={min}
                max={max}
                onSelectDate={setInnerValue}
                onClickCancel={onClickCancel}
                onClickOk={onClickOk}
              />
            </FocusScope>
          </Popper>
        )}
      </AnimatePresence>
    </>
  );
};

const Base = styled.div<{ $focus: boolean; $disabled?: boolean }>`
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
  transition: all 150ms ease-out;

  &:hover {
    background-color: ${colors.blackAlpha100};
  }

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:focus {
        outline: none;
        background-color: ${colors.blackAlpha100};

        & > .datepicker-label {
          color: ${colors.brand};
        }
        & > .datepicker-bottom-border {
          opacity: 1;
          position: absolute;
          bottom: -2px;
          left: 0;
          display: block;
          width: 100%;
          height: 2px;
          background-color: ${colors.brand};
          transform: scaleX(1) translateY(-2px);
        }
      }
    `}

  ${({ $focus }) =>
    $focus &&
    css`
      background-color: ${colors.blackAlpha100};
      &:after {
        background-color: ${colors.brand};
        transform: rotate(180deg);
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
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

const Label = styled.label<PlaceholderProps>`
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

  ${({ $focus }) =>
    $focus &&
    css`
      transform: translateY(-12px) scale(0.75);
      color: ${colors.brand};
    `}

  ${({ $hasValue }) =>
    $hasValue &&
    css`
      transform: translateY(-12px) scale(0.75);
    `}
`;

const SelectedValue = styled.span<{ $disabled?: boolean }>`
  position: absolute;
  top: 20px;
  left: 16px;
  color: ${({ $disabled }) => ($disabled ? colors.blackAlpha500 : colors.blackAlpha800)};
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  pointer-events: none;
`;

const BottomBorder = styled.span<{ $focus: boolean }>`
  opacity: 0;
  transform-origin: 50% 50%;
  transform: scaleX(0.5) translateY(-2px);
  transition: all 180ms cubic-bezier(0.3, 0.3, 0.3, 1);

  ${({ $focus }) =>
    $focus &&
    css`
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
