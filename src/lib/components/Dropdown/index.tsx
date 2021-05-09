import React, {
  useRef,
  useState
} from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles";
import { Popper } from "../Popper";
import { Options } from "./Options";

type DropdownProps<T = string> = {
  options: T[];
  value: T,
  onChange?: (v: T) => void;
  placeholder?: string;
};

export const Dropdown: React.VFC<DropdownProps> = (props) => {
  const { placeholder, value, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const baseRef = useRef<HTMLDivElement | null>(null);
  return (
    <DropdownBase ref={baseRef} onClick={() => setIsOpen(v => !v)} $focus={isOpen}>
      <Placeholder $focus={isOpen} $hasValue={Boolean(value)}>{placeholder}</Placeholder>
      <SelectedValue>{value}</SelectedValue>
      <BottomBorder $focus={isOpen} />
      {isOpen && (
        <Popper onClose={() => setIsOpen(false)} shouldCloseClickOverlay>
          <Options options={props.options} baseRef={baseRef} isOpen={isOpen} onChange={(v) => onChange?.(v)}/>
        </Popper>
      )}
    </DropdownBase>
  );
};

const DropdownBase = styled.div<{ $focus: boolean }>`
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

  &:after {
    content: "";
    position: absolute;
    right: 24px;
    top: 24px;
    width: 8px;
    height: 6px;
    background-color: ${colors.blackAlpha400};
    clip-path: polygon(0 0, 100% 0%, 50% 100%);
    /* transition: all 100ms ease-out; */
  }

  ${({ $focus }) => $focus && css`
    background-color: ${colors.blackAlpha100};
    &:after {
      background-color: ${colors.brand};
      transform: rotate(180deg);
    }
  `}
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

