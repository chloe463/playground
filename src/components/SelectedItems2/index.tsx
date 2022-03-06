import { motion } from "framer-motion";
import React, { createRef, forwardRef } from "react";
import { pillVariants } from "../../constants";
import { AnimationListContainer } from "../../lib/components/AnimationListContainer";
import { Item } from "../../types";
import { selectedItemPillBaseStyle, selectedItemPillLayoutAnimatorStyle, selectedItemsContainerStyle } from "../layout";

const SelectedItemPill = forwardRef<HTMLSpanElement, { item: Item, removeItem: () => void }>((props, ref) => {
  const { item, removeItem } = props;
  return (
    <span className={selectedItemPillLayoutAnimatorStyle} ref={ref}>
      <motion.span
        variants={pillVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.3,
          duration: 0.3
        }}
      >
        <span className={`selected-pill ${selectedItemPillBaseStyle}`} onClick={() => removeItem()} data-cy="selected-pill">{item.name}</span>
      </motion.span>
    </span>
  );
});

type Props = {
  items: Item[];
  removeItem: (item: Item) => void;
};

export const SelectedItems2: React.FC<Props> = (props)=> {
  const { items, removeItem } = props;

  return (
    <div className={selectedItemsContainerStyle}>
      <AnimationListContainer animationParams={{
        duration: 400,
        delay: 100,
        timingFunction: "ease-out",
        axis: "X",
      }}>
        {items.map((item) => (
          <SelectedItemPill key={item.key} item={item} removeItem={() => removeItem(item)} ref={createRef()} />
        ))}
      </AnimationListContainer>
    </div>
  );
};
