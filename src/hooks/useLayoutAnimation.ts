import { useCallback, useLayoutEffect, useRef } from "react";

type Delta = { x: number, y : number };

type LayoutAnimationParams = {
  duration: number;
  axis?: "X" | "Y" | "XY";
};

export const useLayoutAnimation = (params: LayoutAnimationParams) => {
  const { duration, axis } = params;
  const animationTargetRef = useRef<HTMLSpanElement | null>(null);
  const prevPosition = useRef<DOMRect | null>(null);

  const translate = useCallback(
    (delta: Delta) => {
      window.requestAnimationFrame(() => {
        if (animationTargetRef.current) {
          const { x, y } = delta;
          animationTargetRef.current.style.transform = `translate(-${x}px, -${y}px)`;
          animationTargetRef.current.style.transition = `transform`;

          window.requestAnimationFrame(() => {
            if (animationTargetRef.current) {
              animationTargetRef.current.style.transform = `translate(0, 0)`;
              animationTargetRef.current.style.transition = `${duration}ms cubic-bezier(.3, .3, .3, 1)`;
            }
          });
        }
      });
    },
    [duration]
  );

  useLayoutEffect(() => {
    if (animationTargetRef.current && prevPosition.current) {
      const x = axis !== "Y" ? animationTargetRef.current.getBoundingClientRect().left - prevPosition.current.left : 0;
      const y = axis !== "X" ? animationTargetRef.current.getBoundingClientRect().top - prevPosition.current.top : 0;
      translate({ x, y });
    }
    if (animationTargetRef.current) {
      prevPosition.current = animationTargetRef.current.getBoundingClientRect();
    }
  });

  return animationTargetRef;
}
