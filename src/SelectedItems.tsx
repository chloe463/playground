import { motion } from "framer-motion";
import React, {
  useCallback,

  useLayoutEffect,
  useRef
} from "react";
import styled from "styled-components";
import { pillVariants } from "./constants";
import { Item } from "./types";

type Props = {
  items: Item[];
};

const SelectedItemsContainer = styled.div`
  display: flex;
  margin: 64px auto;
  padding: 24px;
  width: 720px;
  overflow-x: scroll;
  line-height: 48px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.03);
  &:empty {
    height: 48px;
  }
`;
// const SelectedItemPillLayoutAnimator = styled(motion.span)`
const SelectedItemPillLayoutAnimator = styled.span`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition-property: all;
  & + & {
    margin-left: 8px;
  }
`;

const SelectedItemPillFadeInAnimator = styled(motion.span)``;

const SelectedItemPillBase = styled.span`
  background: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  padding: 8px 24px;
  border-radius: 9999vmax;
  color: white;
  word-break: keep-all;
  cursor: pointer;
`;

type Delta = { x: number, y : number };

const SelectedItemPill = ({ item }: { item: Item }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prevPosition = useRef<DOMRect | null>(null);

  const translate = useCallback(
    (delta: Delta, duration: number) => {
      window.requestAnimationFrame(() => {
        if (ref.current) {
          const { x, y } = delta;
          ref.current.style.transform = `translate(-${x}px, -${y}px)`;
          ref.current.style.transition = `transform`;

          window.requestAnimationFrame(() => {
            if (ref.current) {
              ref.current.style.transform = `translate(0, 0)`;
              ref.current.style.transition = `${duration}ms cubic-bezier(.3, .3, .3, 1)`;
            }
          });
        }
      });
    },
    []
  );

  useLayoutEffect(() => {
    if (ref.current && prevPosition.current) {
      const x =
        ref.current.getBoundingClientRect().left - prevPosition.current.left;
      const y =
        ref.current.getBoundingClientRect().top - prevPosition.current.top;
      // translate({ x, y }, 400);
      translate({ x, y: 0 }, 400);
    }
    if (ref.current) {
      prevPosition.current = ref.current.getBoundingClientRect();
    }
  });

  return (
    <SelectedItemPillLayoutAnimator ref={ref}>
      <SelectedItemPillFadeInAnimator
        variants={pillVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.3,
          duration: 0.3
        }}
      >
        <SelectedItemPillBase>{item.name}</SelectedItemPillBase>
      </SelectedItemPillFadeInAnimator>
    </SelectedItemPillLayoutAnimator>
  );
};

export const SelectedItems = (props: Props) => {
  const { items } = props;

  return (
    <SelectedItemsContainer>
      {items.map((item) => (
        <SelectedItemPill key={item.key} item={item} />
      ))}
    </SelectedItemsContainer>
  );
};
