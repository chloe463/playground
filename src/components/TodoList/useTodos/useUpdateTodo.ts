import { ApolloError, gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  UpdateTodoDocument,
  UpdateTodoMutationVariables,
} from "../../../__generated__/graphqlOperationTypes";
import { UpdateTodoInput } from "../../../__generated__/types";

type CreateTodo = {
  loading: boolean;
  error: ApolloError | undefined;
  updateTodo: (todo: UpdateTodoInput) => Promise<void>;
};

const UPDATED_TODO_FRAGMENT = gql`
  fragment UpdatedTodoFragment on Todo {
    id
    task
    finishedAt
    updatedAt
  }
`;

const _UPDATE_TODO_MUTAION = gql`
  mutation UpdateTodo($todo: UpdateTodoInput!) {
    updateTodo(todo: $todo) {
      todo {
        ...UpdatedTodoFragment
      }
    }
  }
  ${UPDATED_TODO_FRAGMENT}
`;

export const useUpdateTodo = (): CreateTodo => {
  const [execMutation, { loading, error }] = useMutation(UpdateTodoDocument, {
    optimisticResponse: (variables) => {
      return {
        updateTodo: {
          todo: {
            ...variables.todo,
            updatedAt: new Date(),
            __typename: "Todo" as const,
          },
        },
      };
    },
  });

  const updateTodo = useCallback(
    async (todo: UpdateTodoInput) => {
      try {
        const variables: UpdateTodoMutationVariables = { todo };
        await execMutation({
          variables,
        });
      } catch (e) {
        console.error(e);
      }
    },
    [execMutation]
  );

  return {
    loading,
    error,
    updateTodo,
  };
};
