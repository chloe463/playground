// This functions are inspired by https://developers.wpengine.com/blog/apollo-client-cache-rehydration-in-next-js

import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import { isEqual } from "lodash-es";
import { useMemo } from "react";
import { IS_SERVER } from "../common/isServer";

const GRAPHQL_SERVER_URI = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URI || "http://localhost:4000";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: IS_SERVER,
    link: new HttpLink({
      // uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL, // Server URL (must be absolute)
      uri: GRAPHQL_SERVER_URI + "/graphql",
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    }),
    connectToDevTools: true,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            postConnection: relayStylePagination(["query"]),
            questionnaireConnection: relayStylePagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (IS_SERVER) return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

type PageProps<T> = {
  props: T;
};

export function addApolloStateToPageProps<T>(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: PageProps<T>
): PageProps<T> {
  if (pageProps?.props) {
    (pageProps.props as any)[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApolloClient(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
