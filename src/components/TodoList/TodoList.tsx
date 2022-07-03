import React from "react";
import { Todo, TodoId } from "../../__generated__/types";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: Todo[];
  editingTodo: Todo | undefined;
  onClickCheckbox: (id: TodoId, finishedAt: Date | undefined) => void;
  onClickEdit: (todo: Todo | undefined) => void;
  onClickCancelEdit: () => void;
  onChangeEditForm: (v: string) => void;
  onSubmitEdit: () => Promise<void>;
  onClickDelete: (todoToDelete: Todo) => void;
};

export const TodoList: React.VFC<Props> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoListItem
              todo={todo}
              editingTodo={todo.id === props.editingTodo?.id ? props.editingTodo : undefined}
              onClickCheckbox={props.onClickCheckbox}
              onClickEdit={props.onClickEdit}
              onClickCancelEdit={props.onClickCancelEdit}
              onChangeEditForm={props.onChangeEditForm}
              onSubmitEdit={props.onSubmitEdit}
              onClickDelete={props.onClickDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};
