import React, { useCallback, useState } from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";

type Props = {
  todo: Todo;
  onEdit: (todo: UpdateTodoInput) => Promise<void>;
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
    props.onEdit({
      id: props.todo.id,
      task: props.todo.task,
      finishedAt: new Date(),
    });
  }, [props]);

  return (
    <div>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={editingTask}
            onChange={(e) => setEditingTask(e.currentTarget.value)}
            autoFocus
          />
          <div>
            <button type="button" onClick={() => setIsEditing(false)}>
              [cancel]
            </button>
            <button type="submit">[save]</button>
          </div>
        </form>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={Boolean(props.todo.finishedAt)} onChange={onCheck} />
            <p>{props.todo.task}</p>
          </label>
          <div>
            <button onClick={() => setIsEditing((v) => !v)}>[edit]</button>
            <button>[delete]</button>
          </div>
        </>
      )}
    </div>
  );
};
