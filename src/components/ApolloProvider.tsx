"use client";
import { ApolloProvider as Provider } from "@apollo/client";
import { ReactNode } from "react";
import { initializeApollo } from "../hooks/useAplloClient";

interface Props {
  cache: string;
  children: ReactNode;
}

export const ApolloProvider = ({ cache, children }: Props) => {
  const client = initializeApollo(JSON.parse(cache));
  return <Provider client={client}>{children}</Provider>;
};
