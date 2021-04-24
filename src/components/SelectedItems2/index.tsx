import React, { createRef, forwardRef } from "react";
import { pillVariants } from "../../constants";
import { AnimationListContainer } from "../../lib/components/AnimationListContainer";
import { Item } from "../../types";
import { SelectedItemPillBase, SelectedItemPillFadeInAnimator, SelectedItemPillLayoutAnimator, SelectedItemsContainer } from "../layout";

const SelectedItemPill = forwardRef<HTMLSpanElement, { item: Item }>((props, ref) => {
  const { item } = props;
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
});

type Props = { items: Item[] };

export const SelectedItems2: React.FC<Props> = (props)=> {
  const { items } = props;

  return (
    <SelectedItemsContainer>
      <AnimationListContainer animationParams={{
        duration: 400,
        delay: 100,
        timingFunction: "ease-out",
        axis: "X",
      }}>
        {items.map((item) => (
          <SelectedItemPill key={item.key} item={item} ref={createRef()} />
        ))}
      </AnimationListContainer>
    </SelectedItemsContainer>
  );
};
