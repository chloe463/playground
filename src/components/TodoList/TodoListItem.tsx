import classnames from "classnames";
import React, { useCallback } from "react";
import { Todo, TodoId } from "../../__generated__/types";

type Props = {
  todo: Todo;
  editingTodo: Todo | undefined;
  onClickCheckbox: (id: TodoId, finishedAt: Date | undefined) => void;
  onClickEdit: (todo: Todo) => void;
  onClickCancelEdit: () => void;
  onChangeEditForm: (v: string) => void;
  onSubmitEdit: () => Promise<void>;
  onClickDelete: (todoToDelete: Todo) => void;
};

export const TodoListItem: React.FC<Props> = (props) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      props.onSubmitEdit();
    },
    [props]
  );

  const onCheck = useCallback(() => {
    const newFinishedAt = props.todo.finishedAt ? undefined : new Date();
    props.onClickCheckbox(props.todo.id, newFinishedAt);
  }, [props]);

  return (
    <div className="group flex justify-between items-center py-2 px-6 hover:bg-black-alpha50">
      {props.editingTodo ? (
        <form className="flex justify-between items-center w-full" onSubmit={onSubmit}>
          <input
            type="text"
            className="block ml-5 w-full"
            value={props.editingTodo?.task || ""}
            onChange={(e) => props.onChangeEditForm(e.currentTarget.value)}
            autoFocus
          />
          <div className="flex items-center ml-4 space-x-2">
            <button
              type="button"
              className="text-black-alpha500 hover:text-black-alpha700"
              onClick={() => props.onClickCancelEdit()}
            >
              [cancel]
            </button>
            <button type="submit" className="text-black-alpha500 hover:text-black-alpha700">
              [save]
            </button>
          </div>
        </form>
      ) : (
        <>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" checked={Boolean(props.todo.finishedAt)} onChange={onCheck} />
            <span
              className={classnames(`ml-2 text-body1 text-black-alpha800`, {
                "line-through": Boolean(props.todo.finishedAt),
                "text-black-alpha500": Boolean(props.todo.finishedAt),
              })}
            >
              {props.todo.task}
            </span>
          </label>
          <div className="flex items-center ml-4 space-x-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              className="text-black-alpha500 hover:text-black-alpha700"
              onClick={() => props.onClickEdit(props.todo)}
            >
              [edit]
            </button>
            <button
              type="button"
              className="text-black-alpha500 hover:text-black-alpha700"
              onClick={() => props.onClickDelete(props.todo)}
            >
              [delete]
            </button>
          </div>
        </>
      )}
    </div>
  );
};
