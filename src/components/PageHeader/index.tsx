import React from "react";
import styled from "styled-components";

type PageHeaderProps = {
  title: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Header>
      <PageTitle>{title}</PageTitle>
      {children}
    </Header>
  );
};

const Header = styled.header`
  position: relative;
  padding: 0 24px;
`;

const PageTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
`;
