import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Page, SideBar, SIDEBAR_WIDTH } from "./components/SideBar";
import { Crud } from "./pages/Crud";
import { LayoutAnimation } from "./pages/LayoutAnimation";
import { VirtualizedList } from "./pages/VirtualizedList";

const GRAPHQL_SERVER_URI = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URI || "http://localhost:4000";

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

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="flex">
          <div className="sticky top-0 block w-[280px] h-screen">
            <SideBar pages={pages} />
          </div>
          <div className={`block flex-shrink elevation4`} style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)` }}>
            <div className="mt-32">
              <AppRouter />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};
