// Supecial thahks to
// https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba

import React, { useEffect, useLayoutEffect, useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

type _ReactNode = React.ReactElement;

const isReaceNode = (c: React.ReactNode): c is _ReactNode => {
  if (c === undefined || c === null) {
    return false;
  }
  if (
    typeof c === "number" ||
    typeof c === "string" ||
    typeof c === "boolean"
  ) {
    return false;
  }
  // if (JSON.stringify(c) === "{}") {
  //   return false;
  // }

  return true;
};

type BoundingBox = {
  [key: string]: DOMRect;
};

const calculateBoundingBoxes = (children: React.ReactNode) => {
  const boundingBoxes: BoundingBox = {};

  React.Children.forEach(children, (child) => {
    if (!isReaceNode(child)) {
      return;
    }

    // TODO: any じゃなくしたい
    if (child && (child as any).ref.current) {
      const dom: HTMLElement = (child as any).ref.current;
      const nodeBoundingBox = dom.getBoundingClientRect();

      boundingBoxes[child.key as string] = nodeBoundingBox;
    }
  });

  return boundingBoxes;
};

type AnimationParams = {
  readonly duration?: number;
  readonly delay?: number;
  readonly timingFunction?: CSSStyleDeclaration["animationTimingFunction"];
  readonly axis?: "X" | "Y" | "XY";
};

type AnimationListContainerProps = {
  readonly animationParams: AnimationParams;
}

type Delta = { x: number, y : number };

export const AnimationListContainer: React.FC<AnimationListContainerProps> = (props) => {
  const { animationParams: params, children } = props;
  const [boundingBox, setBoundingBox] = useState<BoundingBox>({});
  const [prevBoudingBox, setPrevBoundingBox] = useState<BoundingBox>({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoudingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoudingBox);
  }, [prevChildren]);

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (!(child as any)?.ref?.current) {
        return;
      }
      const dom = (child as any).ref.current as HTMLElement;
      const start = prevBoudingBox[(child as any)?.key as string];
      const last = boundingBox[(child as any)?.key as string];
      const delta: Delta = {
        x: params.axis !== "Y" ? (start?.left || 0) - (last?.left || 0) : 0,
        y: params.axis !== "X" ? (start?.top || 0) - (last?.top || 0) : 0,
      }

      if (delta.x || delta.y) {
        window.requestAnimationFrame(() => {
          dom.style.transform = `translate(${delta.x}px, ${delta.y}px)`;
          dom.style.transformOrigin = `50%, 50%, 0`;
          dom.style.transition = "transform 0s";
          window.requestAnimationFrame(() => {
            dom.style.transform = "";
            dom.style.transformOrigin = `50%, 50%, 0`;
            dom.style.transitionProperty = "transform";
            dom.style.transitionDuration = `${params.duration}ms`;
            dom.style.transitionTimingFunction = params.timingFunction || `cubic-bezier(0.3, 0.3, 0.3, 1)`;
            dom.style.transitionDelay = `${params.delay}ms`;
          });
        });
      }
    });
  }, [params, boundingBox, prevBoudingBox, children]);

  return <>{children}</>;
};
