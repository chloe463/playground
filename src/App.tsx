import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { LayoutAnimation } from "./pages/LayoutAnimation";
import { ListToDetail } from "./pages/ListToDetail";
import { PostDetail } from "./pages/PostDetail";
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
    path: "/virtualized-list",
    component: VirtualizedList,
  },
  {
    key: "virtualizedList",
    path: "/post/:id",
    component: PostDetail,
  },
  {
    key: "listToDetail",
    path: ["/list-to-detail", "/list-to-detail/:id"],
    component: ListToDetail,
  },
];

const AppRouter = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => {
              return (
                <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};

export default function App() {
  return <AppRouter />;
};
