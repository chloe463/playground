import React from "react";
import { appBaseStyle } from "../../../components/layout";
import { PageHeader } from "../../../components/PageHeader";
import { TodoListContainerWithHooks } from "../../../components/TodoList";

type Props = {};

const WithReactHooksPage: React.VFC<Props> = () => {
  return (
    <div className={appBaseStyle}>
      <PageHeader title={"Todo list"} />
      <div className="block mt-4" />
      <TodoListContainerWithHooks />
    </div>
  );
};

export default WithReactHooksPage;
