import React from "react";
import { keyframes, styled } from "styled-components";

export const PostPlaceholder: React.FC = () => {
  return (
    <div className="relative flex items-center px-6 py-4">
      <div className="block size-14 rounded-full bg-black-alpha100" />
      <div className="ml-4">
        <header>
          <div className="m-0 h-[22px] w-[180px] rounded-full bg-black-alpha100 p-0 text-subheading" />
        </header>
        <div className="mt-3">
          <p className="m-0 block h-[18px] w-[240px] rounded-full bg-black-alpha100 p-0 text-body2" />
        </div>
      </div>
      <ShimmerBg />
    </div>
  );
};

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%)
  }
`;
const ShimmerBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  position: absolute;
  top: 0;
  left: 0;
  animation: ${shimmerAnimation} 1.2s linear infinite;
`;
