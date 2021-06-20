import { DevTool } from "@hookform/devtools";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { PrimaryButton as _PrimaryButton } from "../../lib/components/Button";
import { Datepicker } from "../../lib/components/Datepicker";
import { TextArea } from "../../lib/components/TextArea";
import { TextField } from "../../lib/components/TextField";
import { CreateQuestionnaireInput } from "../../__generated__/types";

type Props = {
  onSubmit: (data: CreateQuestionnaireInput) => void;
};

export const NewQuestionnaireForm: React.VFC<Props> = ({ onSubmit }) => {
  const { formState, handleSubmit, control, watch } = useForm<CreateQuestionnaireInput>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      startAt: new Date(),
      endAt: new Date(),
    }
  });
  const { isDirty, isValid } = formState;

  return (
    <Base>
      {process.env.NODE_ENV !== "production" && (
        <DevTool control={control} placement="top-right" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <TextField
                  id="title"
                  label={"Title"}
                  name="title"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="description"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <TextArea
                  id="description"
                  label={"Description"}
                  name="description"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="startAt"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              return (
                <Datepicker
                  id="start-at-date-picker"
                  name="startAt"
                  placeholder={"Date"}
                  value={value}
                  min={"2021/05/15"}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </Field>
        <Field>
          <Controller
            name="endAt"
            control={control}
            render={({ field }) => {
              const { value, onChange, onBlur } = field;
              const startAt = watch("startAt");
              return (
                <Datepicker
                  id="end-at-date-picker"
                  name="startAt"
                  placeholder={"Date"}
                  value={value}
                  min={startAt ? dayjs(startAt).subtract(1, "day").toDate() : dayjs().subtract(1, "day").toDate()}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </Field>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <PrimaryButton type="submit" disabled={!isValid || !isDirty}>Submit</PrimaryButton>
        </div>
      </form>
    </Base>
  );
};

const Base = styled.div`
  padding: 0 24px;
`;

const Field = styled.div`
  width: 720px;
  & + & {
    margin-top: 32px;
  }
`;

const PrimaryButton = styled(_PrimaryButton)`
  width: 136px;
`;
