export type AnimationParams = {
  readonly duration?: number;
  readonly delay?: number;
  readonly timingFunction?: CSSStyleDeclaration["animationTimingFunction"];
  readonly axis?: "X" | "Y" | "XY";
};

export type AnimationListContainerProps = {
  readonly animationParams: AnimationParams;
};

export type Delta = { x: number; y: number };
