import { gql, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import {
  newTaskVar,
  todoToDeleteVar,
  todoToEditVar,
} from "../components/TodoList/todoReactiveVars";

export const extendedTypeDefs = gql`
  extend type Query {
    newTask: String
    todoToDelete: Todo
    todoToEdit: Todo
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
        todoToEdit: {
          read() {
            return todoToEditVar();
          },
        },
      },
    },
  },
});
