import React, { useCallback } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

type Props = {};

type SubmitHandler = React.ComponentProps<typeof TodoInput>["onSubmit"];

export const TodoListContainerWithHooks: React.VFC<Props> = (_props) => {
  const { todos } = useTodos();
  const onSubmit: SubmitHandler = useCallback(
    async (e) => {
      console.log({ e });
    },
    []
  );

  return (
    <div>
      <TodoInput onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};
