"use client";
import { useEffect, useRef } from "react";

export const usePrevious = function <T = any>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
