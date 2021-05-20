import React from "react";
import { useLocation } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "../../lib/styles";

export type Page = {
  name: string;
  url: string;
};

type Props = {
  pages: Page[];
};

export const SIDEBAR_WIDTH = 280;

export const SideBar: React.VFC<Props> = (props) => {
  const location = useLocation();
  return (
    <Base>
      <LogoLink to={"/"}>
        <DummyLogo />
        <Title>
          My sandbox
        </Title>
      </LogoLink>
      <List>
        {props.pages.map((page) => {
          return (
            <Item key={page.name} $selected={page.url === location.pathname}>
              <Link to={page.url}>
                <DummyIconArea />
                {page.name}
              </Link>
            </Item>
          );
        })}
      </List>
    </Base>
  );
};

const Base = styled.nav`
  display: block;
  width: ${SIDEBAR_WIDTH}px;
  margin-top: 24px;
`;

const LogoLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  text-decoration: none;
`;

const DummyLogo = styled.div`
  display: block;
  width: 36px;
  height: 36px;
  background-color: ${colors.blackAlpha500};
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-left: 16px;
  font-size: 24px;
  line-height: 32px;
  color: ${colors.blackAlpha700};
  &:hover {
    color: ${colors.blackAlpha800};
  }
`;

const List = styled.ul`
  margin-top: 64px;
`;

const Item = styled.li<{ $selected: boolean }>`
  ${({ $selected }) => $selected && css`
    .dummy-icon-area {
      background-color: ${colors.blackAlpha500};
    }
    .link {
      color: ${colors.blackAlpha700};
    }
  `}
`;

const Link = styled(RouterLink).attrs({ className: "link" })`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: ${colors.blackAlpha500};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-out;

  &:hover, &:active {
    color: ${colors.blackAlpha700};
    text-decoration: none;

    .dummy-icon-area {
      background-color: ${colors.blackAlpha500};
    }
  }
  &:visited {
    color: ${colors.blackAlpha500};
    text-decoration: none;
  }
`;

const DummyIconArea = styled.div.attrs({ className: "dummy-icon-area" })`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${colors.blackAlpha400};
  margin-right: 16px;
  transition: all 0.2s ease-out;
`;
