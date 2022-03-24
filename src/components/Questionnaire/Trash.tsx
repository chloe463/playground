import React, { forwardRef } from "react";

export const Trash = forwardRef<SVGSVGElement, React.HTMLAttributes<HTMLOrSVGElement>>((props, ref) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props} ref={ref} >
      <g transform="matrix(0.882353, 0, 0, 0.818182, 7.843235, 6.074725)">
        <rect x="-2.789" width="15" height="18" y="0.242" style={{ fill: "currentcolor" }}/>
        <rect x="0.211" width="1" height="13" rx="0.337" ry="0.337" style={{ fill: "rgb(255, 255, 255)" }} y="2.242"/>
        <rect x="-3.789" width="17" height="2" style={{ fill: "currentcolor" }} y="-1.758"/>
        <rect x="0.211" y="-3.758" width="9" height="2" style={{ fill: "currentcolor" }} />
        <rect x="1.211" y="-2.758" width="7" height="1" style={{ fill: "rgb(255, 255, 255)" }} />
        <rect x="4.211" width="1" height="13" rx="0.337" ry="0.337" style={{ fill: "rgb(255, 255, 255)" }} y="2.242"/>
        <rect x="8.211" width="1" height="13" rx="0.337" ry="0.337" style={{ fill: "rgb(255, 255, 255)" }} y="2.242"/>
      </g>
    </svg>
  );
});

Trash.displayName = "Trash";
