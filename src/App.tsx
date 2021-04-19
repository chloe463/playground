import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { LayoutAnimation } from "./pages/LayoutAnimation";
import { ListToDetail } from "./pages/ListToDetail";
import { VirtualizedList } from "./pages/VirtualizedList";

const GRAPHQL_SERVER_URI = process.env.GRAPHQL_SERVER_URI || "http://localhost:4000";

const inMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        postConnection: relayStylePagination(["query"]),
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
    key: "listToDetail",
    path: ["/list-to-detail", "/list-to-detail/:id"],
    component: ListToDetail,
  },
];

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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "80px" }}>
          <AppRouter />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};
