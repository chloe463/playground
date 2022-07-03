import { makeVar } from "@apollo/client";
import { Todo } from "../../__generated__/types";

export const newTaskVar = makeVar<string>("");
export const todoToDeleteVar = makeVar<Todo | undefined>(undefined);
export const todoToEditVar = makeVar<Todo | undefined>(undefined);
