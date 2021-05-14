import React, {
  useLayoutEffect,
  useRef
} from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles";

type OptionsProps<T = string> = {
  isOpen: boolean;
  baseRef: React.MutableRefObject<HTMLDivElement | null>;
  options: T[];
  selectedItem: T;
  onChange: (v: T) => void;
};

type GetItemType<Comp> = Comp extends React.VFC<OptionsProps<infer T>> ? T : unknown;
type ItemType = GetItemType<typeof Options>;

export const Options: React.VFC<OptionsProps> = ({
  baseRef,
  isOpen,
  options,
  selectedItem,
  onChange,
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (baseRef.current && listRef.current) {
      const selectedItemEl = Array.from(listRef.current.children).find((el) => el.getAttribute("aria-selected") === "true");
      if (selectedItemEl) {
        selectedItemEl.scrollIntoView({ block: "center" });
      }

      const { x, y, width, height } = baseRef.current.getBoundingClientRect();
      listRef.current.style.position = "fixed";
      listRef.current.style.width = `${width}px`;
      let transitionOrigin = "0 0";
      if (selectedItemEl) {
        const { y: selectedItemElY } = selectedItemEl.getBoundingClientRect();
        listRef.current.style.transform = `translate(${x}px, ${y + height - 44 - selectedItemElY}px)`;
        transitionOrigin = `0 ${selectedItemElY}px`;
      } else {
        listRef.current.style.transform = `translate(${x}px, ${y + height}px)`;
      }
      window.requestAnimationFrame(() => {
        if (listRef.current) {
          const transform = listRef.current.style.transform;
          listRef.current.style.transformOrigin = transitionOrigin;
          listRef.current.style.opacity = "0";
          listRef.current.style.transform = `${transform} scale(0.8)`;
          window.requestAnimationFrame(() => {
            if (listRef.current) {
              listRef.current.style.opacity = "1";
              listRef.current.style.transform = `${transform} scale(1)`;
              listRef.current.style.transitionDuration = "250ms";
              listRef.current.style.transitionTimingFunction= "cubic-bezier(0.3, 0.3, 0.3, 1)";
            }
          });
        }
      });
    }
  }, [baseRef, listRef]);

  if (!isOpen) {
    return null;
  }

  const onClickItem = (e: React.MouseEvent, v: ItemType) => {
    e.stopPropagation();
    e.preventDefault();
    onChange(v);
  };

  return (
    <OptionList ref={listRef}>
      {options.map((option) => {
        return (
          <OptionItem
            key={option}
            $selected={selectedItem === option}
            onClick={(e) => onClickItem(e, option)}
            aria-selected={selectedItem === option}
          >
            {option}
          </OptionItem>
        );
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
  background-color: ${colors.white};
  overflow-y: auto;
`;

const OptionItem = styled.li<{ $selected: boolean}>`
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

  &:before, &:after {
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

  ${({ $selected }) => $selected && css`
    &:before {
      background-color: ${colors.blackAlpha100};
    }
  `}
`;
