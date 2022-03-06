import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { BrowserRouter } from "react-router-dom";

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

const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window === "undefined" || !client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Head>
          <title>Playground</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Component {...pageProps} />
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;