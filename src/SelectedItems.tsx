import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pillVariants } from "./constants";
import { useLayoutAnimation } from "./hooks/useLayoutAnimation";
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

const SelectedItemPill = ({ item }: { item: Item }) => {
  const animationTargetRef = useLayoutAnimation({
    duration: 400,
    timingFunction: "ease-out",
    axis: "X"
  });

  return (
    <SelectedItemPillLayoutAnimator ref={animationTargetRef}>
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
