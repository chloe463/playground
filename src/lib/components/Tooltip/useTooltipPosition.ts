import { useIsomorphicLayoutEffect } from "../../hooks/useIsomarphicLayoutEffect";
import type { Offset, Placement } from "./types";

type UseTooltipPositionOptions = {
  ref: React.MutableRefObject<HTMLSpanElement | null>;
  placement: Placement;
  offset: Offset;
  anchorSize: { width: number; height: number };
};

export const useTooltipPosition = (options: UseTooltipPositionOptions) => {
  const { ref, anchorSize, placement, offset } = options;
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      switch (placement) {
        case "top-start": {
          const x = 0 - offset.x;
          const y = -height - offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "top-center": {
          const x = anchorSize.width / 2;
          const y = -height - offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateX(-50%)`;
          break;
        }
        case "top-end": {
          const x = anchorSize.width - width + offset.x;
          const y = -height - offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-start": {
          const x = anchorSize.width + offset.x;
          const y = -height - offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-center": {
          const x = anchorSize.width + offset.x;
          const y = anchorSize.height / 2;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateY(-50%)`;
          break;
        }
        case "right-end": {
          const x = anchorSize.width + offset.x;
          const y = anchorSize.height + offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-end": {
          const x = anchorSize.width - width + offset.x;
          const y = anchorSize.height + offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-center": {
          const x = anchorSize.width / 2;
          const y = anchorSize.height + offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateX(-50%)`;
          break;
        }
        case "bottom-start": {
          const x = 0 - offset.x;
          const y = anchorSize.height + offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-end": {
          const x = -width - offset.x;
          const y = anchorSize.height + offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-center": {
          const x = -width - offset.x;
          const y = anchorSize.height / 2;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateY(-50%)`;
          break;
        }
        case "left-start": {
          const x = -width - offset.x;
          const y = -height - offset.y;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
      }
    }
  }, [anchorSize, placement, offset]);
};
