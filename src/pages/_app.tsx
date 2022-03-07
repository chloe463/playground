import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Page, SideBar, SIDEBAR_WIDTH } from "../components/SideBar";
import { useApolloClient } from "../hooks/useAplloClient";
import "../index.css";

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

const App = ({ Component, pageProps, router }: AppProps) => {
  const apolloClient = useApolloClient(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Playground</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="flex">
        <div className="sticky top-0 block w-[280px] h-screen">
          <SideBar pages={pages} />
        </div>
        <div className={`block flex-shrink elevation4`} style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)` }}>
          <AnimatePresence exitBeforeEnter initial={false}>
            {/* NOTE: The "key" props is needed for exiting animation */}
            <main className="mt-32" key={router.pathname}>
              <Component {...pageProps} />
            </main>
          </AnimatePresence>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
