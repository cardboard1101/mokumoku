"use client";
 
import { client } from "@/apollo/client";
import { ApolloProvider } from "@apollo/client";
import React from "react";
 
export const WithApolloProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};