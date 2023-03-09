import React, { useCallback, useEffect, useState } from "react";
import { Todo } from "../../__generated__/types";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { useAppDispatch, useAppSelector } from "./store";
import { PutTodoParams } from "./todoAPI";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { createTodo, deleteTodo, fetchTodoList, updateTodo } from "./todoSlice";

type Props = {};

type SubmitHandler = React.ComponentProps<typeof TodoInput>["onSubmit"];

export const TodoListContainerWithRedux: React.VFC<Props> = (_props) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const loading = useAppSelector((state) => state.todo.loading);
  const creating = useAppSelector((state) => state.todo.creating);
  const [todoToDelete, setTodoToDelete] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const onSubmit: SubmitHandler = useCallback(
    async (e) => {
      dispatch(createTodo({ task: e.task }));
    },
    [dispatch]
  );

  const onSubmitUpdate = useCallback(
    async (todo: PutTodoParams) => {
      dispatch(updateTodo(todo));
    },
    [dispatch]
  );

  const prepareToDelete = useCallback((todo: Todo) => {
    setTodoToDelete(todo);
  }, []);

  const onDelete = useCallback(
    async (id: Todo["id"]) => {
      setTodoToDelete(undefined);
      dispatch(deleteTodo({ id }));
    },
    [dispatch]
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
