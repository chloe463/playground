import React from "react";
import { PrimaryButton, TextField } from "../../lib";

type Props = {
  task: string;
  loading: boolean;
  canSubmit: boolean;
  onChangeInput: (value: string) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const TodoInput: React.VFC<Props> = (props) => {
  return (
    <form className="flex justify-between items-center px-6" onSubmit={props.onSubmit}>
      <div className="w-[90%]">
        <TextField label={"Task"} name="task" value={props.task} onChange={props.onChangeInput} />
      </div>
      <PrimaryButton type="submit" disabled={props.loading || !props.canSubmit}>
        Submit
      </PrimaryButton>
    </form>
  );
};
