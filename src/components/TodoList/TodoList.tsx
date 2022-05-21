import React from "react";
import { Todo } from "../../__generated__/types";

type Props = {
  todos: Todo[];
};

export const TodoList: React.VFC<Props> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
};
