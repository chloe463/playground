import { usePreventScroll } from "@react-aria/overlays";
import { useCallback, useEffect, useRef, useState } from "react";

interface DialogElement extends HTMLDialogElement {
  show: () => void;
  showModal: () => void;
  close: () => void;
}

interface UseDialogOptions {
}

export const useDialog = (_options: UseDialogOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDialogElement | null>(null);

  usePreventScroll({ isDisabled: !isOpen });

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current) return;
      const box = ref.current.getBoundingClientRect();
      if (
        e.clientX < box.left ||
        e.clientX > box.right ||
        e.clientY > box.bottom ||
        e.clientY < box.top
      ) {
        (ref.current as DialogElement).close();
      }
    };
    const modal = ref.current;
    modal?.addEventListener("click", listener);
    return () => modal?.removeEventListener("click", listener);
  }, [ref]);

  const open = useCallback(() => {
    if (!ref.current) return;
    (ref.current as DialogElement).showModal();
    setIsOpen(true);
  }, [ref]);

  const open2 = useCallback(() => {
    if (!ref.current) return;
    (ref.current as DialogElement).show();
    setIsOpen(true);
  }, [ref]);

  const close = useCallback(() => {
    if (!ref.current) return;
    (ref.current as DialogElement).close();
    setIsOpen(false);
  }, [ref]);

  return {
    ref,
    open,
    open2,
    close,
  };
};
