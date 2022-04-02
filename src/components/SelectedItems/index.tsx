import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { pillVariants } from "../../constants";
import { useLayoutAnimation } from "../../lib";
import { Item } from "../../types";
import { selectedItemPillBaseStyle, selectedItemPillLayoutAnimatorStyle, selectedItemsContainerStyle } from "../layout";

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
    <span className={selectedItemPillLayoutAnimatorStyle} ref={animationTargetRef}>
      <motion.span
        variants={pillVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.3,
          duration: 0.3
        }}
      >
        <button className={selectedItemPillBaseStyle} onClick={() => removeItem()}>{item.name}</button>
      </motion.span>
    </span>
  );
};

export const SelectedItems = (props: Props) => {
  const { items } = props;

  return (
    <AnimatePresence initial={true}>
      <div className={selectedItemsContainerStyle}>
        {items.map((item) => (
          <SelectedItemPill key={item.key} item={item} removeItem={() => props.removeItem(item)} />
        ))}
      </div>
    </AnimatePresence>
  );
};
