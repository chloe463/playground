import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { appBaseStyle } from "../../../components/layout";
import { PageHeader } from "../../../components/PageHeader";
import { TodoListContainerWithRedux } from "../../../components/TodoList";
import { store } from "../../../components/TodoList/store";

type Props = {};

const WithRedux: React.VFC<Props> = () => {
  return (
    <ReduxProvider store={store}>
      <div className={appBaseStyle}>
        <PageHeader title={"Todo list"} />
        <div className="block mt-4" />
        <TodoListContainerWithRedux />
      </div>
    </ReduxProvider>
  );
};

export default WithRedux;
