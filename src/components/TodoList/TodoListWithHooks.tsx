import React, { useCallback, useState } from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

type Props = {};

type SubmitHandler = React.ComponentProps<typeof TodoInput>["onSubmit"];

export const TodoListContainerWithHooks: React.VFC<Props> = (_props) => {
  const { loading, todos, creating, createTodo, updateTodo, deleteTodo } = useTodos();
  const [todoToDelete, setTodoToDelete] = useState<Todo | undefined>(undefined);

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

  const prepareToDelete = useCallback((todo: Todo) => {
    setTodoToDelete(todo);
  }, []);

  const onDelete = useCallback(
    async (id: Todo["id"]) => {
      setTodoToDelete(undefined);
      await deleteTodo(id);
    },
    [deleteTodo]
  );

  return (
    <div>
      <TodoInput loading={loading || creating} onSubmit={onSubmit} />
      <div className="block h-6" />
      <TodoList todos={todos} onSave={onSubmitUpdate} onDelete={prepareToDelete} />
      <DeleteConfirmationModal
        isOpen={Boolean(todoToDelete)}
        todo={todoToDelete}
        onClose={() => setTodoToDelete(undefined)}
        onSubmit={onDelete}
      />
    </div>
  );
};
