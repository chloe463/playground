import React, {
  useLayoutEffect,
  useRef
} from "react";
import styled from "styled-components";
import { colors } from "../../styles";

type OptionsProps<T = string> = {
  isOpen: boolean;
  baseRef: React.MutableRefObject<HTMLDivElement | null>;
  options: T[];
  onChange: (v: T) => void;
};

export const Options: React.VFC<OptionsProps> = ({
  baseRef,
  isOpen,
  options,
  onChange,
}) => {
  const listRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    if (baseRef.current && listRef.current) {
      const { x, y, width, height } = baseRef.current.getBoundingClientRect();
      listRef.current.style.position = "fixed";
      listRef.current.style.width = `${width}px`;
      listRef.current.style.transform = `translate(${x}px, ${y + height}px)`;
    }
  }, [baseRef, listRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <OptionList ref={listRef}>
      {options.map((option) => {
        return <OptionItem key={option} onClick={() => onChange(option)}>{option}</OptionItem>;
      })}
    </OptionList>
  );
}

const OptionList = styled.ul`
  z-index: 1;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  padding: 8px 0;
  display: block;
  border-radius: 4px;
  max-height: calc((44px * 8) + 16px);
  overflow-y: auto;
`;

const OptionItem = styled.li`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: 8px 16px;
  width: 100%;
  font-size: 16px;
  line-height: 28px;
  height: 44px;
  background-color: white;
  cursor: pointer;

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
  }

  &:hover {
    &:after {
      background-color: ${colors.blackAlpha50};
    }
  }
`;
