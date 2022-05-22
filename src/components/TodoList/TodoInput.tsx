import React, { useMemo, useState } from "react";
import { PrimaryButton, TextField } from "../../lib";

type SubmitValue = {
  task: string;
};

type Props = {
  loading: boolean;
  onSubmit: (value: SubmitValue) => void;
};

export const TodoInput: React.VFC<Props> = (props) => {
  const [task, setTask] = useState("");

  const canSubmit = useMemo(() => {
    return task.length > 0;
  }, [task]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!task) return;
    props.onSubmit({ task });
    setTask("");
  };

  return (
    <form className="flex justify-between items-center" onSubmit={onSubmit}>
      <div className="w-[80%]">
        <TextField label={"Task"} name="task" value={task} onChange={(v) => setTask(v)} />
      </div>
      <PrimaryButton type="submit" disabled={props.loading || !canSubmit}>
        Submit
      </PrimaryButton>
    </form>
  );
};
