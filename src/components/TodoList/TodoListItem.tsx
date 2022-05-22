import classnames from "classnames";
import React, { useCallback, useState } from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";

type Props = {
  todo: Todo;
  onEdit: (todo: UpdateTodoInput) => Promise<void>;
  onDelete: (id: Todo["id"]) => Promise<void>;
};

export const TodoListItem: React.FC<Props> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(props.todo.task);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      props.onEdit({
        id: props.todo.id,
        task: editingTask,
      });
      setIsEditing(false);
    },
    [editingTask, props]
  );

  const onCheck = useCallback(() => {
    const newFinishedAt = props.todo.finishedAt ? null : new Date();
    props.onEdit({
      id: props.todo.id,
      task: props.todo.task,
      finishedAt: newFinishedAt,
    });
  }, [props]);

  const onClickDelete = useCallback(() => {
    props.onDelete(props.todo.id);
  }, [props]);

  return (
    <div className="group flex justify-between items-center py-2 px-6 hover:bg-black-alpha50">
      {isEditing ? (
        <form className="flex justify-between items-center w-full" onSubmit={onSubmit}>
          <input
            type="text"
            className="block ml-5 w-full"
            value={editingTask}
            onChange={(e) => setEditingTask(e.currentTarget.value)}
            autoFocus
          />
          <div className="flex items-center ml-4 space-x-2">
            <button
              type="button"
              className="text-black-alpha500 hover:text-black-alpha700"
              onClick={() => setIsEditing(false)}
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
              })}
            >
              {props.todo.task}
            </span>
          </label>
          <div className="flex items-center ml-4 space-x-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              className="text-black-alpha500 hover:text-black-alpha700"
              onClick={() => setIsEditing((v) => !v)}
            >
              [edit]
            </button>
            <button
              type="button"
              className="text-black-alpha500 hover:text-black-alpha700"
              onClick={onClickDelete}
            >
              [delete]
            </button>
          </div>
        </>
      )}
    </div>
  );
};
