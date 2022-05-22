import React from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: Todo[];
  onSave: (todo: UpdateTodoInput) => Promise<void>;
  onDelete: (id: Todo["id"]) => Promise<void>;
};

export const TodoList: React.VFC<Props> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoListItem todo={todo} onEdit={props.onSave} onDelete={props.onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
