import { AnimatePresence, MotionStyle } from "framer-motion";
import React, { useEffect, useMemo } from "react";
import { SnackbarContent } from "./SnackbarContent";

export type VerticalPosition = "top" | "bottom";
export type HorizontalPosition = "left" | "center" | "right";
export type SnackbarPosition = `${VerticalPosition}-${HorizontalPosition}`;

export type SnackbarProps = {
  visible: boolean;
  children: React.ReactNode;
  position?: SnackbarPosition;
  duration?: number;
  onHide?: () => void;
};

export const Snackbar: React.VFC<SnackbarProps> = (props) => {
  useEffect(() => {
    if (props.duration) {
      const timerId = setTimeout(() => {
        props.onHide?.();
      }, props.duration);
      return () => clearTimeout(timerId);
    }
  }, [props]);

  const position = useMemo<MotionStyle>(() => {
    switch (props.position) {
      case "top-center": {
        return { top: 24, left: "50%", transform: "translateX(-50%)" };
      }
      case "top-right": {
        return { top: 24, right: 24 };
      }
      case "bottom-right": {
        return { bottom: 24, right: 24 };
      }
      case "bottom-center": {
        return { bottom: 24, left: "50%", transform: "translateX(-50%)" };
      }
      case "bottom-left": {
        return { bottom: 24, left: 24 };
      }
      case "top-left": {
        return { top: 24, left: 24 };
      }
      default: {
        return { bottom: 24, left: 24 };
      }
    }
  }, [props.position]);

  return (
    <AnimatePresence>
      {props.visible && <SnackbarContent position={position}>{props.children}</SnackbarContent>}
    </AnimatePresence>
  );
};
