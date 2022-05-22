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
    <div className="group flex justify-between items-center p-2 hover:bg-black-alpha50">
      {isEditing ? (
        <form className="flex justify-between items-center w-full" onSubmit={onSubmit}>
          <input
            type="text"
            className="block ml-5 w-full"
            value={editingTask}
            onChange={(e) => setEditingTask(e.currentTarget.value)}
            autoFocus
          />
          <div className="flex items-center space-x-2">
            <button type="button" onClick={() => setIsEditing(false)}>
              [cancel]
            </button>
            <button type="submit">[save]</button>
          </div>
        </form>
      ) : (
        <>
          <label className="flex items-center">
            <input type="checkbox" checked={Boolean(props.todo.finishedAt)} onChange={onCheck} />
            <span className="ml-2 text-body1">{props.todo.task}</span>
          </label>
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100">
            <button onClick={() => setIsEditing((v) => !v)}>[edit]</button>
            <button onClick={onClickDelete}>[delete]</button>
          </div>
        </>
      )}
    </div>
  );
};
