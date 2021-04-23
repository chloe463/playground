import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <Base>
      <Title>Framer motion experiments</Title>
    </Base>
  );
};

const Base = styled.header`
  display: flex;
  align-items: center;
  width: 80%;
  height: 64px;
  max-width: 1280px;
  min-width: 720px;
  margin: 0 auto 0;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  font-family: Poppins;
`;

