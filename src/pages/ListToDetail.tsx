import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Item = {
  id: number;
  key: string;
  title: string;
  avatarUrl: string;
  description: string;
  shortDescription: string;
};

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const items: Item[] = Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
  return {
    id: i,
    key: `item${i}`,
    title: `Item ${i}`,
    avatarUrl: "https://avatars.dicebear.com/api/gridy/custom-seed.svg",
    description: LOREM,
    shortDescription: LOREM.substring(0, 50),
  };
});

export const ListToDetail = () => {
  const location = useLocation();

  return (
    <Base>
      <ContentList>
        {items.map((item) => {
          return (
            <CustomLink to={`/list-to-detail/${item.id}`}>
              <ContentItem key={item.key}>
                <Content>
                  <Avatar src={item.avatarUrl}></Avatar>
                  <Title>{item.title}</Title>
                  <ShortDescription>{item.shortDescription}</ShortDescription>
                </Content>
              </ContentItem>
            </CustomLink>
          );
        })}
      </ContentList>
    </Base>
  );
};

const Base = styled.div`
  display: block;
  width: 80%;
  max-width: 1280px;
  min-width: 720px;
  margin: auto;
`;

const ContentList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

const CustomLink = styled(Link)`
  margin-top: 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.86);
  background-color: rgba(255, 255, 255, 1);
  transition: all 300ms cubic-bezier(0.3, 0.3, 0.3, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:nth-child(2n) {
    margin-left: 16px;
  }
`;

const ContentItem = styled.li`
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 40px 24px;

`;

const Avatar = styled.img`
`;

const Title = styled.h3``;

const ShortDescription = styled.p``;
