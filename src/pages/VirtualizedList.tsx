import React from "react";
import { AppBase } from "../components/layout";
import { PageHeader } from "../components/PageHeader";
import { useVirtualizedList } from "../hooks/VirtualizedList.hooks";


export const VirtualizedList = () => {
  const { posts, postsLoading } = useVirtualizedList();
  console.log({ posts, postsLoading });
  return (
    <AppBase>
      <PageHeader title={"Virtualized List example"} />
    </AppBase>
  );
};
