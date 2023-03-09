import { Todo } from "../../__generated__/types";

const API_SERVER_URI = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URI || "http://localhost:4000";

export const fetchTodos = async () => {
  const url = new URL(`${API_SERVER_URI}/todos`);
  const res = await fetch(url.toString(), {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
  });

  const todos = await res.json();
  return todos as Todo[];
};

export const postTodo = async (task: string) => {
  const url = new URL(`${API_SERVER_URI}/todos`);
  const res = await fetch(url.toString(), {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ task }),
  });

  const todo = await res.json();
  return todo as Todo;
};

export type PutTodoParams = {
  id: number;
  task: string;
  finishedAt?: Date;
};
export const putTodo = async (params: PutTodoParams) => {
  const { id, ...rest } = params;
  const url = new URL(`${API_SERVER_URI}/todos/${id}`);
  const res = await fetch(url.toString(), {
    method: "PUT",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(rest),
  });

  const todo = await res.json();
  return todo as Todo;
};

export const deleteTodo = async (id: number) => {
  const url = new URL(`${API_SERVER_URI}/todos/${id}`);
  const res = await fetch(url.toString(), {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
  });

  const todo = await res.json();
  return todo as { id: number };
};
