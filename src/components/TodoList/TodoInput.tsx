import React, { useState } from "react";
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

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!task) return;
    props.onSubmit({ task });
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField label={"Task"} name="task" value={task} onChange={(v) => setTask(v)} />
      <PrimaryButton type="submit" disabled={props.loading}>
        Submit
      </PrimaryButton>
    </form>
  );
};
