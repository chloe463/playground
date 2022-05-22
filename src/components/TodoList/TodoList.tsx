import React from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: Todo[];
  onSave: (todo: UpdateTodoInput) => Promise<void>;
};

export const TodoList: React.VFC<Props> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoListItem todo={todo} onClickSave={props.onSave} />
          </li>
        );
      })}
    </ul>
  );
};
