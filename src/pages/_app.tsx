import { ApolloProvider } from "@apollo/client";
import { OverlayProvider } from "@react-aria/overlays";
import { SSRProvider } from "@react-aria/ssr";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { getPathNameAndQueryFromAsPath } from "../common/getPathNameAndQueryFromAsPath";
import { SideBar, SIDEBAR_WIDTH } from "../components/SideBar";
import { useApolloClient } from "../hooks/useApolloClient";
import "../index.css";

if (process.env.NEXT_PUBLIC_API_MOCK) {
  const mockWorker = () => import("../mocks");
  mockWorker();
}

const App = ({ Component, pageProps, router }: AppProps) => {
  const apolloClient = useApolloClient(pageProps);
  const { asPath } = router;
  const { pathname } = getPathNameAndQueryFromAsPath(asPath);

  return (
    <SSRProvider>
      <OverlayProvider>
        <ApolloProvider client={apolloClient}>
          <Head>
            <title>Playground</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          </Head>
          <div className="flex">
            <div className="block sticky top-0 w-[280px] h-screen">
              <SideBar currentPathName={pathname} />
            </div>
            <div
              className={`block flex-shrink elevation4`}
              style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)` }}
            >
              <AnimatePresence exitBeforeEnter initial={false}>
                {/* NOTE: The "key" props is needed for exiting animation */}
                <main className="mt-32" key={router.pathname}>
                  <Component {...pageProps} />
                </main>
              </AnimatePresence>
            </div>
          </div>
        </ApolloProvider>
      </OverlayProvider>
    </SSRProvider>
  );
};

export default App;
