import React from "react";
import { appBaseStyle } from "../../../components/layout";
import { TodoListContainerWithHooks } from "../../../components/TodoList";

type Props = {};

const WithReactHooksPage: React.VFC<Props> = (props) => {
  return (
    <div className={appBaseStyle}>
      <TodoListContainerWithHooks />
    </div>
  )
};

export default WithReactHooksPage;
