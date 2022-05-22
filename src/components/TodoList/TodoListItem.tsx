import React, { useCallback, useState } from "react";
import { Todo, UpdateTodoInput } from "../../__generated__/types";

type Props = {
  todo: Todo;
  onClickSave: (todo: UpdateTodoInput) => Promise<void>;
};

export const TodoListItem: React.FC<Props> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(props.todo.task);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      props.onClickSave({
        id: props.todo.id,
        task: editingTask,
      });
      setIsEditing(false);
    },
    [editingTask, props]
  );

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
          <p>{props.todo.task}</p>
          <div>
            <button onClick={() => setIsEditing((v) => !v)}>[edit]</button>
            <button>[delete]</button>
          </div>
        </>
      )}
    </div>
  );
};
