import { ApolloError, gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  CreateTodoDocument,
  GetTodoConnectionQueryQuery,
} from "../../__generated__/graphqlOperationTypes";

type CreateTodo = {
  loading: boolean;
  error: ApolloError | undefined;
  createTodo: (task: string) => Promise<void>;
};

const CREATED_TODO_FRAGMENT = gql`
  fragment CreatedTodoFragment on Todo {
    id
    task
    finishedAt
    createdAt
    updatedAt
  }
`;

const _CREATE_TODO_MUTAION = gql`
  mutation CreateTodo($todo: CreateTodoInput!) {
    createTodo(todo: $todo) {
      todo {
        ...CreatedTodoFragment
      }
    }
  }
  ${CREATED_TODO_FRAGMENT}
`;

export const useCreateTodo = (): CreateTodo => {
  const [execMutation, { loading, error }] = useMutation(CreateTodoDocument, {
    update: (cache, result) => {
      cache.modify({
        fields: {
          todoConnection: (existings: GetTodoConnectionQueryQuery["todoConnection"]) => {
            const newTodo = cache.writeFragment({
              fragment: CREATED_TODO_FRAGMENT,
              data: {
                ...result.data?.createTodo?.todo,
              },
            });
            return {
              ...existings,
              edges: [
                ...existings.edges,
                {
                  cursor: result.data?.createTodo?.todo?.id.toString(),
                  node: newTodo,
                },
              ],
            };
          },
        },
      });
    },
  });

  const createTodo = useCallback(
    async (task: string) => {
      try {
        await execMutation({
          variables: {
            todo: {
              task,
            },
          },
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
    createTodo,
  };
};
