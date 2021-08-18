import { motion } from "framer-motion";
import React, {
  useCallback,
  useEffect,

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

const SelectedItemPill = ({ item, length }: { item: Item; length: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prevPositionX = useRef<number | null>(null);
  const prevLength = useRef<number | null>(0);

  const translate = useCallback(
    (distance: number, duration: number, name?: string) => {
      const v = distance / duration;
      const origin = -distance;
      const startTime = performance.now();
      const step = (time: number) => {
        const t = Math.floor(time - startTime);
        if (t > duration) {
          if (ref.current) {
            ref.current.style.transform = `none`;
            ref.current.style.transformOrigin = `50% 50% 0px`;
            ref.current.style.opacity = "1";
            ref.current.style.visibility = "visible";
          }
          return;
        }

        if (ref.current) {
          const x = v * t;
          ref.current.style.visibility = "visible";
          ref.current.style.transform = `translateX(${origin + x}px)`;
          ref.current.style.transformOrigin = `50% 50% 0px`;
          ref.current.style.opacity = "1";
          prevPositionX.current = ref.current.getBoundingClientRect().x;
        }
        window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    },
    []
  );

  useEffect(() => {
    // debugger;
    if (ref.current && prevPositionX.current) {
      ref.current.style.visibility = "hidden";
      ref.current.style.opacity = "0";
      const distance =
        ref.current.getBoundingClientRect().x - prevPositionX.current;

      ref.current.style.transform = `translateX(${-distance}px)`;
      translate(distance, 300, item.name);
    }

    prevLength.current = length;
    if (ref.current) {
      prevPositionX.current = ref.current.getBoundingClientRect().x;
    }
  });

  // useLayoutEffect(() => {
  //   if (ref.current) {
  //     ref.current.style.opacity = "1";
  //     ref.current.style.visibility = "visible";
  //     ref.current.style.transformOrigin = "50%, 50%, 0px";
  //     ref.current.style.transform = "scale(1)";
  //   }
  // });

  return (
    <SelectedItemPillLayoutAnimator
      ref={ref}
    >
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
        <SelectedItemPill key={item.key} item={item} length={items.length} />
      ))}
    </SelectedItemsContainer>
  );
};
