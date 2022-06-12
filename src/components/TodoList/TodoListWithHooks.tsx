import { useReactiveVar } from "@apollo/client";
import React, { useCallback, useMemo } from "react";
import { newTaskVar, todoToDeleteVar } from "../../hooks/cache";
import { Todo, UpdateTodoInput } from "../../__generated__/types";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

export const TodoListContainerWithHooks: React.VFC = () => {
  const newTask = useReactiveVar(newTaskVar);
  const todoToDelete = useReactiveVar(todoToDeleteVar);
  const { loading, todos, creating, createTodo, updateTodo, deleteTodo } = useTodos();

  const canSubmit = useMemo(() => {
    return newTask.length > 0;
  }, [newTask]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      await createTodo(newTask);
    },
    [createTodo, newTask]
  );

  const onSubmitUpdate = useCallback(
    async (todo: UpdateTodoInput) => {
      await updateTodo(todo);
    },
    [updateTodo]
  );

  const prepareToDelete = useCallback((todo: Todo) => {
    todoToDeleteVar(todo);
  }, []);

  const onDelete = useCallback(
    async (id: Todo["id"]) => {
      todoToDeleteVar(undefined);
      await deleteTodo(id);
    },
    [deleteTodo]
  );

  return (
    <div>
      <TodoInput
        task={newTask}
        loading={loading || creating}
        canSubmit={canSubmit}
        onChangeInput={(v) => newTaskVar(v)}
        onSubmit={onSubmit}
      />
      <div className="block h-6" />
      <TodoList todos={todos} onSave={onSubmitUpdate} onDelete={prepareToDelete} />
      <DeleteConfirmationModal
        isOpen={Boolean(todoToDelete)}
        todo={todoToDelete}
        onClose={() => todoToDeleteVar(undefined)}
        onSubmit={onDelete}
      />
    </div>
  );
};
