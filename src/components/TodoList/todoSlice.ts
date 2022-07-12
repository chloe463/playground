import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../../__generated__/types";
import type { PutTodoParams } from "./todoAPI";
import * as todoAPI from "./todoAPI";

export const fetchTodoList = createAsyncThunk<Todo[]>("todos/fetchTodoList", async () => {
  const todos = await todoAPI.fetchTodos();
  return todos;
});

export const createTodo = createAsyncThunk<Todo, { task: string }>(
  "todos/create",
  async ({ task }) => {
    const createdTodo = todoAPI.postTodo(task);
    return createdTodo;
  }
);

export const updateTodo = createAsyncThunk<Todo, PutTodoParams>("todos/update", async (params) => {
  const updatedTodo = todoAPI.putTodo(params);
  return updatedTodo;
});

export const deleteTodo = createAsyncThunk<{ id: number }, { id: number }>(
  "todo/delete",
  async ({ id }) => {
    const deletedTodo = todoAPI.deleteTodo(id);
    return deletedTodo;
  }
);

export type TodoState = {
  loading: boolean;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  todos: Todo[];
};

const initialState: TodoState = {
  loading: false,
  creating: false,
  updating: false,
  deleting: false,
  todos: [],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodoList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
    builder.addCase(createTodo.pending, (state) => {
      state.creating = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.creating = false;
    });
    builder.addCase(updateTodo.pending, (state) => {
      state.updating = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const { id, task, finishedAt } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
        todo.finishedAt = finishedAt;
      }
      state.updating = false;
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.deleting = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos = [...state.todos.slice(0, index), ...state.todos.slice(index + 1)];
      state.deleting = false;
    });
  },
});
