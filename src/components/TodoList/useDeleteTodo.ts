import { ApolloError, gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  DeleteTodoDocument,
  GetTodoConnectionQueryQuery,
} from "../../__generated__/graphqlOperationTypes";
import { Todo } from "../../__generated__/types";

type CreateTodo = {
  loading: boolean;
  error: ApolloError | undefined;
  deleteTodo: (id: Todo["id"]) => Promise<void>;
};

const _CREATE_TODO_MUTAION = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      result
    }
  }
`;

export const useDeleteTodo = (): CreateTodo => {
  const [execMutation, { loading, error }] = useMutation(DeleteTodoDocument, {
    update: (cache, result) => {
      cache.modify({
        fields: {
          todoConnection: (
            existings: GetTodoConnectionQueryQuery["todoConnection"],
            { readField }
          ) => {
            const deletedItemIndex = existings.edges.findIndex((edge) => {
              const id = readField("id", edge.node);
              return id === result.data?.deleteTodo?.id;
            });
            return {
              ...existings,
              edges: [
                ...existings.edges.slice(0, deletedItemIndex),
                ...existings.edges.slice(deletedItemIndex + 1),
              ],
            };
          },
        },
      });
    },
  });

  const deleteTodo = useCallback(
    async (id: Todo["id"]) => {
      await execMutation({
        variables: { id },
      });
    },
    [execMutation]
  );

  return {
    loading,
    error,
    deleteTodo,
  };
};
