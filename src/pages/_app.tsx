import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

import { Page, SideBar, SIDEBAR_WIDTH } from "../components/SideBar";
import "../index.css";

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
  },
  {
    key: "layoutAnimation",
    path: "/layout-animation",
  },
  {
    key: "virtualizedList",
    path: ["/virtualized-list", "/virtualized-list/:id"],
  },
  {
    key: "questionnaires",
    path: ["/questionnaires", "/questionnaires/new"],
  },
];

const pages: Page[] = routes.map((route) => ({
  name: route.key,
  url: Array.isArray(route.path) ? route.path[0] : route.path,
}));

const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window === "undefined" || !client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Playground</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="flex">
        <div className="sticky top-0 block w-[280px] h-screen">
          <SideBar pages={pages} />
        </div>
        <div className={`block flex-shrink elevation4`} style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)` }}>
          <div className="mt-32">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};
export default App;