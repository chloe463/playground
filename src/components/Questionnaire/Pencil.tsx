import React, { forwardRef } from "react";

export const Pencil = forwardRef<SVGSVGElement, React.HTMLAttributes<HTMLOrSVGElement>>(
  (props, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        {...props}
        ref={ref}
      >
        <g transform="matrix(0.606092, 0.606092, -0.651984, 0.651984, 14.617661, -3.546612)">
          <rect x="7" y="5" width="7" height="16" style={{ fill: "currentColor" }} />
          <rect x="7" y="2" width="7" height="2" style={{ fill: "currentColor" }} />
          <path
            d="M -10.5 -25.86 L -7 -21 L -14 -21 L -10.5 -25.86 Z"
            transform="matrix(-1, 0, 0, -1, 0, 0)"
            style={{ fill: "currentColor" }}
          />
        </g>
      </svg>
    );
  }
);

Pencil.displayName = "Pencil";
