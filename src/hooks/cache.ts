import { gql, InMemoryCache, makeVar } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { Todo } from "../__generated__/types";

export const extendedTypeDefs = gql`
  extend type Query {
    newTask: String
    todoToDelete: Todo
  }
`;

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        postConnection: relayStylePagination(["query"]),
        questionnaireConnection: relayStylePagination(),
        newTask: {
          read() {
            return newTaskVar();
          },
        },
        todoToDelete: {
          read() {
            return todoToDeleteVar();
          },
        },
      },
    },
  },
});

export const newTaskVar = makeVar<string>("");
export const todoToDeleteVar = makeVar<Todo | undefined>(undefined);
