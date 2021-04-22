import React from "react";
import styled, { keyframes } from "styled-components";

export const PostPlaceholder: React.VFC = () => {
  return (
    <Base>
      <DummyAvatar />
      <PostListItemContent>
        <ItemHeader>
          <ItemTitle />
        </ItemHeader>
        <ItemBody>
          <ItemText />
        </ItemBody>
      </PostListItemContent>
      <ShimmerBg />
    </Base>
  );
}

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 24px;
`;

const DummyAvatar = styled.div`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.06);
`;

const PostListItemContent = styled.div`
  margin-left: 16px;
`;

const ItemHeader = styled.header``;

const ItemTitle = styled.h3`
  width: 180px;
  height: 22px;
  margin: 0;
  padding: 0;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 16px;
`;

const ItemBody = styled.div`
  margin-top: 12px;
`;

const ItemText = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 14px;
  width: 240px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 9px;
`;

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
