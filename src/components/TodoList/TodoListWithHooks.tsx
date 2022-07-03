import { useReactiveVar } from "@apollo/client";
import React, { useCallback, useMemo } from "react";
import { Todo, TodoId, UpdateTodoInput } from "../../__generated__/types";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { newTaskVar, todoToDeleteVar, todoToEditVar } from "./todoReactiveVars";
import { useTodos } from "./useTodos";

export const TodoListContainerWithHooks: React.VFC = () => {
  const newTask = useReactiveVar(newTaskVar);
  const todoToDelete = useReactiveVar(todoToDeleteVar);
  const todoToEdit = useReactiveVar(todoToEditVar);
  const { loading, todos, creating, createTodo, updateTodo, deleteTodo } = useTodos();

  const canSubmit = useMemo(() => {
    return newTask.length > 0;
  }, [newTask]);

  const onChangeEditForm = (v: string) => {
    if (todoToEdit) {
      todoToEditVar({ ...todoToEdit, task: v });
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await createTodo(newTask);
        newTaskVar("");
      } catch (e) {
        // TODO: Show error toast.
        console.error(e);
      }
    },
    [createTodo, newTask]
  );

  const onSubmitUpdate = useCallback(async () => {
    if (todoToEdit) {
      const input: UpdateTodoInput = {
        id: todoToEdit.id,
        task: todoToEdit.task,
      };
      await updateTodo(input);
      todoToEditVar(undefined);
    }
  }, [todoToEdit, updateTodo]);

  const onCheck = useCallback(
    async (id: TodoId, finishedAt: Date | undefined) => {
      await updateTodo({
        id,
        finishedAt,
      });
      todoToEditVar(undefined);
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
      <TodoList
        todos={todos}
        editingTodo={todoToEdit}
        onClickCheckbox={onCheck}
        onClickEdit={todoToEditVar}
        onClickCancelEdit={() => todoToEditVar(undefined)}
        onChangeEditForm={onChangeEditForm}
        onSubmitEdit={onSubmitUpdate}
        onClickDelete={prepareToDelete}
      />
      <DeleteConfirmationModal
        isOpen={Boolean(todoToDelete)}
        todo={todoToDelete}
        onClose={() => todoToDeleteVar(undefined)}
        onSubmit={onDelete}
      />
    </div>
  );
};
