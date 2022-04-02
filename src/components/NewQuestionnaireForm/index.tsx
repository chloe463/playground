import { DevTool } from "@hookform/devtools";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Datepicker, PrimaryButton, TextArea, TextField } from "../../lib";
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
    <div className="py-0 px-6">
      {process.env.NODE_ENV !== "production" && (
        <DevTool control={control} placement="top-right" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[720px]">
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
        </div>
        <div className="w-[720px] mt-8">
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
        </div>
        <div className="w-[720px] mt-8">
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
        </div>
        <div className="w-[720px] mt-8">
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
        </div>
        <div className="flex justify-center mt-12">
          <PrimaryButton type="submit" style={{ width: "136px" }} disabled={!isValid || !isDirty}>Submit</PrimaryButton>
        </div>
      </form>
    </div>
  );
};
