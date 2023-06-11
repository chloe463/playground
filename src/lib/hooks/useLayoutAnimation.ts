"use client";
import { useCallback, useRef } from "react";
import { AnimationParams, Delta } from "../types";
import { useIsomorphicLayoutEffect } from "./useIsomarphicLayoutEffect";

type useLayoutAnimationParams = AnimationParams;

export const useLayoutAnimation = (params: useLayoutAnimationParams) => {
  const { duration, timingFunction, axis } = params;
  const animationTargetRef = useRef<HTMLSpanElement | null>(null);
  const prevPosition = useRef<DOMRect | null>(null);

  const translate = useCallback(
    (delta: Delta) => {
      window.requestAnimationFrame(() => {
        if (animationTargetRef.current) {
          const { x, y } = delta;
          animationTargetRef.current.style.transform = `translate(-${x}px, -${y}px)`;
          animationTargetRef.current.style.transformOrigin = `50%, 50%, 0`;
          animationTargetRef.current.style.transition = `transform`;

          window.requestAnimationFrame(() => {
            if (animationTargetRef.current) {
              animationTargetRef.current.style.transform = `translate(0, 0)`;
              animationTargetRef.current.style.transformOrigin = `50%, 50%, 0`;
              animationTargetRef.current.style.transitionDuration = `${duration}ms`;
              animationTargetRef.current.style.transitionTimingFunction =
                timingFunction || `cubic-bezier(.3, .3, .3, 1)`;
            }
          });
        }
      });
    },
    [duration, timingFunction]
  );

  useIsomorphicLayoutEffect(() => {
    if (animationTargetRef.current && prevPosition.current) {
      const x =
        axis !== "Y"
          ? animationTargetRef.current.getBoundingClientRect().left - prevPosition.current.left
          : 0;
      const y =
        axis !== "X"
          ? animationTargetRef.current.getBoundingClientRect().top - prevPosition.current.top
          : 0;
      translate({ x, y });
    }
    if (animationTargetRef.current) {
      prevPosition.current = animationTargetRef.current.getBoundingClientRect();
    }
  });

  return animationTargetRef;
};
