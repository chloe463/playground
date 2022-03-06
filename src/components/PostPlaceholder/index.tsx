import React from "react";
import styled, { keyframes } from "styled-components";

export const PostPlaceholder: React.VFC = () => {
  return (
    <div className="relative flex items-center py-4 px-6">
      <div className="block w-14 h-14 rounded-full bg-black-alpha100" />
      <div className="ml-4">
        <header>
          <div className="w-[180px] h-[22px] m-0 p-0 bg-black-alpha100 rounded-full text-subheading"/>
        </header>
        <div className="mt-3">
          <p className="block m-0 p-0 text-body2 w-[240px] h-[18px] bg-black-alpha100 rounded-full text-body2" />
        </div>
      </div>
      <ShimmerBg />
    </div>
  );
}


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
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  position: absolute;
  top: 0;
  left: 0;
  animation: ${shimmerAnimation} 1.2s linear infinite;
`;
