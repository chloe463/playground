import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export type Page = {
  name: string;
  url: string;
};

type Props = {
  pages: Page[];
};

export const SIDEBAR_WIDTH = 240;

export const SideBar: React.VFC<Props> = (props) => {
  return (
    <Base>
      <List>
        {props.pages.map((page) => {
          return (
            <Item key={page.name}>
              <Link to={page.url}>
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
  width: 240px;
  margin-top: 64px;
`;

const List = styled.ul``;

const Item = styled.li`
`;

const Link = styled(RouterLink)`
  display: block;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.56);
  text-decoration: none;
  text-transform: uppercase;

  &:hover, &:active {
    color: rgba(0, 0, 0, 0.74);
    text-decoration: none;
  }
  &:visited {
    color: rgba(0, 0, 0, 0.56);
    text-decoration: none;
  }
`;
