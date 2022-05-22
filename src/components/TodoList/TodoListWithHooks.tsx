import React, { useCallback } from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

type Props = {};

type SubmitHandler = React.ComponentProps<typeof TodoInput>["onSubmit"];

export const TodoListContainerWithHooks: React.VFC<Props> = (_props) => {
  const { loading, todos, creating, createTodo, updateTodo, deleteTodo } = useTodos();

  const onSubmit: SubmitHandler = useCallback(
    async (e) => {
      await createTodo(e.task);
    },
    [createTodo]
  );

  const onSubmitUpdate = useCallback(
    async (todo: UpdateTodoInput) => {
      await updateTodo(todo);
    },
    [updateTodo]
  );

  const onDelete = useCallback(
    async (id: Todo["id"]) => {
      await deleteTodo(id);
    },
    [deleteTodo]
  );

  return (
    <div>
      <TodoInput loading={loading || creating} onSubmit={onSubmit} />
      <div className="block h-6" />
      <TodoList todos={todos} onSave={onSubmitUpdate} onDelete={onDelete} />
    </div>
  );
};
