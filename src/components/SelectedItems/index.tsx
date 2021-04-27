import { AnimatePresence } from "framer-motion";
import React from "react";
import { pillVariants } from "../../constants";
import { useLayoutAnimation } from "../../lib/hooks/useLayoutAnimation";
import { Item } from "../../types";
import { SelectedItemPillBase, SelectedItemPillFadeInAnimator, SelectedItemPillLayoutAnimator, SelectedItemsContainer } from "../layout";

type Props = {
  items: Item[];
  removeItem: (item: Item) => void;
};

const SelectedItemPill = ({ item, removeItem }: { item: Item, removeItem: () => void }) => {
  const animationTargetRef = useLayoutAnimation({
    duration: 400,
    delay: 50,
    timingFunction: "ease-out",
    axis: "X",
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
        <SelectedItemPillBase onClick={() => removeItem()}>{item.name}</SelectedItemPillBase>
      </SelectedItemPillFadeInAnimator>
    </SelectedItemPillLayoutAnimator>
  );
};

export const SelectedItems = (props: Props) => {
  const { items } = props;

  return (
    <AnimatePresence initial={true}>
      <SelectedItemsContainer>
        {items.map((item) => (
          <SelectedItemPill key={item.key} item={item} removeItem={() => props.removeItem(item)} />
        ))}
      </SelectedItemsContainer>
    </AnimatePresence>
  );
};
