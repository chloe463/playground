import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Page, SideBar, SIDEBAR_WIDTH } from "./components/SideBar";
import { Crud } from "./pages/Crud";
import { LayoutAnimation } from "./pages/LayoutAnimation";
import { VirtualizedList } from "./pages/VirtualizedList";

const GRAPHQL_SERVER_URI = process.env.REACT_APP_GRAPHQL_SERVER_URI || "http://localhost:4000";

const inMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        postConnection: relayStylePagination(["query"]),
        questionnaireConnection: relayStylePagination(),
      }
    },
  }
})

const client = new ApolloClient({
  uri: `${GRAPHQL_SERVER_URI}/graphql`,
  cache: inMemoryCache,
});

const routes = [
  {
    key: "home",
    path: "/",
    component: LayoutAnimation,
    exact: true,
  },
  {
    key: "layoutAnimation",
    path: "/layout-animation",
    component: LayoutAnimation,
  },
  {
    key: "virtualizedList",
    path: ["/virtualized-list", "/virtualized-list/:id"],
    component: VirtualizedList,
    expect: false,
  },
  {
    key: "crud",
    path: ["/crud", "/crud/new"],
    component: Crud,
    expect: false,
  },
];

const pages: Page[] = routes.map((route) => ({
  name: route.key,
  url: Array.isArray(route.path) ? route.path[0] : route.path,
}));

const AppRouter = () => {
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={rootPath}>
          {routes.map((route) => {
            return (
              <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />
            );
          })}
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: none;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <BrowserRouter>
        <PageLayout>
          <LeftColumn>
            <SideBar pages={pages} />
          </LeftColumn>
          <RightColumn>
            <div style={{ marginTop: "156px" }}>
              <AppRouter />
            </div>
          </RightColumn>
        </PageLayout>
      </BrowserRouter>
    </ApolloProvider>
  );
};

const PageLayout = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  position: sticky;
  top: 0;
  display: block;
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
`;

const RightColumn = styled.div`
  display: block;
  width: calc(100vw - ${SIDEBAR_WIDTH}px);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
`;
