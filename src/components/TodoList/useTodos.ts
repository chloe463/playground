import { ApolloError, gql, useQuery } from "@apollo/client";
import { GetTodoConnectionQueryDocument } from "../../__generated__/graphqlOperationTypes";
import { Todo } from "../../__generated__/types";
import { useCreateTodo } from "./useCreateTodo";
import { useUpdateTodo } from "./useUpdateTodo";

type CreateTodo = ReturnType<typeof useCreateTodo>;
type UpdateTodo = ReturnType<typeof useUpdateTodo>;

type Todos = {
  loading: boolean;
  error: ApolloError | undefined;
  todos: Todo[];
  creating: boolean;
  createError: CreateTodo["error"];
  createTodo: CreateTodo["createTodo"];
  updating: boolean;
  updateError: UpdateTodo["error"];
  updateTodo: UpdateTodo["updateTodo"];
};

const TODO_FRAGMENT = gql`
  fragment TodoFragment on Todo {
    id
    task
    finishedAt
    createdAt
    updatedAt
  }
`;

const _GET_TODO_CONNECTION_QUERY = gql`
  query GetTodoConnectionQuery($first: Int!, $after: String) {
    todoConnection(first: $first, after: $after) {
      edges {
        cursor
        node {
          ...TodoFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${TODO_FRAGMENT}
`;

const PER = 10;

export const useTodos = (): Todos => {
  const { data, loading, error } = useQuery(GetTodoConnectionQueryDocument, {
    variables: {
      first: PER,
      after: "0",
    },
  });
  const { loading: creating, error: createError, createTodo } = useCreateTodo();
  const { loading: updating, error: updateError, updateTodo } = useUpdateTodo();

  const todos: Todo[] =
    data?.todoConnection.edges.map((edge) => ({
      ...edge.node,
    })) || [];

  return {
    loading,
    error,
    todos,
    creating,
    createError,
    createTodo,
    updating,
    updateError,
    updateTodo,
  };
};
