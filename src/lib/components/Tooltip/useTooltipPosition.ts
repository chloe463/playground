import { useIsomorphicLayoutEffect } from "../../hooks/useIsomarphicLayoutEffect";
import type { Offset, Placement } from "./types";

type UseTooltipPositionOptions = {
  ref: React.MutableRefObject<HTMLSpanElement | null>;
  placement: Placement;
  offset: Offset;
  anchorSizeAndPosition: { x: number; y: number; width: number; height: number };
};

export const useTooltipPosition = (options: UseTooltipPositionOptions) => {
  const { ref, anchorSizeAndPosition, placement, offset } = options;
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      switch (placement) {
        case "top-start": {
          const x = anchorSizeAndPosition.x;
          const y = anchorSizeAndPosition.y - height - (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "top-center": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width / 2;
          const y = anchorSizeAndPosition.y - height - (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateX(-50%)`;
          break;
        }
        case "top-end": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width - width + (offset.x || 0);
          const y = anchorSizeAndPosition.y - height - (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-start": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width + (offset.x || 0);
          const y = anchorSizeAndPosition.y - height - (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "right-center": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width + (offset.x || 0);
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height / 2;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateY(-50%)`;
          break;
        }
        case "right-end": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width + (offset.x || 0);
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height + (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-end": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width - width + (offset.x || 0);
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height + (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "bottom-center": {
          const x = anchorSizeAndPosition.x + anchorSizeAndPosition.width / 2;
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height + (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateX(-50%)`;
          break;
        }
        case "bottom-start": {
          const x = anchorSizeAndPosition.x - (offset.x || 0);
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height + (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-end": {
          const x = anchorSizeAndPosition.x - width - (offset.x || 0);
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height + (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
        case "left-center": {
          const x = anchorSizeAndPosition.x - width - (offset.x || 0);
          const y = anchorSizeAndPosition.y + anchorSizeAndPosition.height / 2;
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0) translateY(-50%)`;
          break;
        }
        case "left-start": {
          const x = anchorSizeAndPosition.x - width - (offset.x || 0);
          const y = anchorSizeAndPosition.y - height - (offset.y || 0);
          ref.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
          break;
        }
      }
    }
  }, [anchorSizeAndPosition, placement, offset]);
};
