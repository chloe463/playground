import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Datepicker } from "../../lib/components/Datepicker";
import { Dropdown } from "../../lib/components/Dropdown";
import { TextArea } from "../../lib/components/TextArea";
import { TextField } from "../../lib/components/TextField";

export const NewQuestionnaireForm: React.VFC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [startAt, setStartAt] = useState<Date>(new Date());
  const [endAt, setEndAt] = useState<Date>(new Date());

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const onChangeState = (v: string) => {
    setState(v);
  };

  const onChangeStartAt = useCallback((v: Date | null) => {
    if (!v) {
      return;
    }
    setStartAt(v);
    if (dayjs(v) > dayjs(endAt)) {
      setEndAt(v);
    }
  }, [endAt]);
  const onChangeEndAt = (v: Date | null) => {
    if (!v) {
      return;
    }
    setEndAt(v);
  };

  const options = [
    "Option1",
    "Option2",
    "Option3",
    "Option4",
    "Option5",
    "Option6",
    "Option7",
    "Option8",
    "Option9",
    "Option10",
    "Option11",
    "Option12",
    "Option13",
    "Option14",
    "Option15",
  ];

  return (
    <Base>
      <Field>
        <TextField placeholder={"Title"} value={title} onChange={onChangeTitle}/>
      </Field>
      <Field>
        <TextArea placeholder={"Description"} value={description} onChange={onChangeDescription}/>
      </Field>
      <Field>
        <Dropdown
          placeholder={"Dropdown"}
          options={options}
          value={state}
          itemToString={(v) => v}
          onChange={onChangeState}
        />
      </Field>
      <Field>
        <Datepicker
          id="start-at-date-picker"
          name="startAt"
          placeholder={"Date"}
          value={startAt}
          min={"2021/05/15"}
          onChange={onChangeStartAt}
        />
      </Field>
      <Field>
        <Datepicker
          id="end-at-date-picker"
          name="startAt"
          placeholder={"Date"}
          value={endAt}
          min={startAt ? dayjs(startAt).subtract(1, "day").toDate() : dayjs().subtract(1, "day").toDate()}
          onChange={onChangeEndAt}
        />
      </Field>
    </Base>
  );
};

const Base = styled.div`
  padding: 0 24px;
`;

const Field = styled.div`
  width: 320px;
  & + & {
    margin-top: 32px;
  }
`;
